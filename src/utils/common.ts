import { batch } from "solid-js";

export type PlainRecord = Record<string, unknown>;

export const defined = <V, F>(value: V, fallback: F) => {
  return (value === undefined ? fallback : value) as Exclude<V, undefined> | F;
};

export const raf = (callback: () => void) => {
  requestAnimationFrame(() => requestAnimationFrame(callback));
};
