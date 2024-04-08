
export type MyPick<K, F extends keyof K> = { [Key in F]: K[Key] }

export type MyReadonly<T> = { readonly [Key in keyof T]: T[Key] }


interface Todo {
    title: string
    description: string
    completed: boolean;
    data: {
        test: string
    }
}

type test = MyReadonly<Todo>
