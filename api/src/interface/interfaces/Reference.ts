export type IReference<T> = {
    readonly "get": () => T
    readonly name: string
}