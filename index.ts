export function createRef<T>() {
    return (() => {
        const _fn: any = (current: T) => {
            _fn.current = current;
        };
        return _fn;
    })() as { (el: T): void; current?: T };
}
