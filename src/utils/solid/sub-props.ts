import { Component, ComponentProps, JSX } from "solid-js";

export type SubProps<
  NAME extends string,
  OPTIONS,
  PROPS = OPTIONS extends keyof JSX.IntrinsicElements
    ? ComponentProps<OPTIONS>
    : OPTIONS
> = {
  [K in NAME]?:
    | (OPTIONS extends string ? OPTIONS : never)
    | Component<PROPS>
    | null;
} & {
  [K in keyof PROPS as K extends string ? `${NAME}_${K}` : never]?: PROPS[K];
};

type SubProp<T> = T extends string
  ? T extends Capitalize<T>
    ? T
    : never
  : never;

type UseSubProps<PROPS, NAME extends string> = {
  [K in keyof PROPS as K extends `${NAME}_${infer U}` ? U : never]: PROPS[K];
};

type UseRootProps<PROPS, BLACKLIST extends keyof PROPS> = Omit<
  PROPS,
  SubProp<keyof PROPS> | BLACKLIST
>;

type ProxyTarget = {
  props: any;
  prefix: string;
  keys: string[];
};

const propDescriptor = { enumerable: true, configurable: true } as const;
const proxyHandler: ProxyHandler<ProxyTarget> = {
  has: ({ keys }, prop: string) => keys.includes(prop),
  get: ({ props, prefix }, prop: string) => props[`${prefix}${prop}`],
  set: () => false,
  ownKeys: (target) => target.keys,
  getOwnPropertyDescriptor: () => propDescriptor,
} as const;

export const getSubProps = <PROPS, NAME extends string>(
  props: PROPS,
  name: NAME
) => {
  const prefix = `${name}_`;
  const keys = Object.keys(props).reduce((keys, p) => {
    if (p.startsWith(prefix)) keys.push(p.slice(prefix.length));
    return keys;
  }, [] as string[]);

  return new Proxy({ props, prefix, keys }, proxyHandler) as any as UseSubProps<
    PROPS,
    NAME
  >;
};

export const getRootProps = <
  PROPS,
  BLACKLIST extends Exclude<keyof PROPS, SubProp<keyof PROPS>>
>(
  props: PROPS,
  blacklist: BLACKLIST[] = []
) => {
  const prefix = "";
  const keys = Object.keys(props).filter(
    (prop) => /^[a-z]/.test(prop) && !blacklist.includes(prop as BLACKLIST)
  );

  return new Proxy(
    { props, prefix, keys },
    proxyHandler
  ) as any as UseRootProps<PROPS, BLACKLIST>;
};
