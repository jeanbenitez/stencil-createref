export default () => {
  return (() => {
    const _fn: any = (current: HTMLElement) => {
      _fn.current = current;
    };
    return _fn;
  })() as { (el: HTMLElement): void; current: HTMLElement; };
};
