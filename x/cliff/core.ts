

export interface Resource<T> {
    applied: boolean;
    create(): T
    info(): T
    update(): T
    delete(): void
}

