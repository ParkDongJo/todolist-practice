export interface TodoItemDataParams {
    id: number;
    text: string;
    done: boolean;
}

export interface TodoState {
    todoItems: TodoItemDataParams[];
    input: string;
}

export interface StoreState {
    todo: TodoState
}