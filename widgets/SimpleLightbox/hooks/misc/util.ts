export const noop = () => {
    // do something
};

export function on<T extends Window | Document | HTMLElement | EventTarget>(
    obj: T | null,
    ...args
): void {
    if (obj && obj.addEventListener) {
        obj.addEventListener(...(args as Parameters<HTMLElement["addEventListener"]>));
    }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
    obj: T | null,
    ...args
): void {
    if (obj && obj.removeEventListener) {
        obj.removeEventListener(...(args as Parameters<HTMLElement["removeEventListener"]>));
    }
}
