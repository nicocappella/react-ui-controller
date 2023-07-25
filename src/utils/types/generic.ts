export type RemoveFields<T, P extends keyof T = keyof T> = {
    [S in keyof T as Exclude<S, P>]: T[S];
};
