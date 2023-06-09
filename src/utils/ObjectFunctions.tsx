export function objectIncludesType(obj: Object, type: Function) {
    return Object.values(obj).some((d) => d instanceof type);
}
