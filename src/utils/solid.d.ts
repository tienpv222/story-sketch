import "solid-js";

declare module "solid-js" {
  export function splitProps<T extends object, K extends keyof T>(
    props: T,
    ...keys: [readonly K[]]
  ): [Pick<T, K>, Omit<T, K>];
}
