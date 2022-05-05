export const raf = (callback: () => void) => {
  requestAnimationFrame(() => requestAnimationFrame(callback));
};
