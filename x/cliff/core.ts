

export interface Resource<T> {
    applied: boolean;
    create(): T
    info(): T
    update(): T
    delete(): void
}

// Block on one or serveral promises that resolve to something that knows how
// to report reports its result.
export async function block<T>(awaitable: any): Promise<void> {
    // TODO(cm) make T a Reportable or similar. Operation results implement
    // an interface that prints/reports nicely in different formats (json, raw text)
        await Promise.all(awaitable)
}

// A type that reports its result
export interface Reportable {
    report(): Report;
}

// TODO
type Report = string | string[]

type Promises<T> = Promise<T> | Promise<T>[]


function isArray<Item>(t): t is Array<Item> {
    return (<Array<Item>>t) !== undefined;
}

