
export type IReadonlyArray<T> = {
    readonly "forEach": (callback: (entry: T) => void) => void
}