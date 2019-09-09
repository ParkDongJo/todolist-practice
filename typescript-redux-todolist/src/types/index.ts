import { TodoItemDataParams } from '../interfaces'

export const CREATE = "todo/CREATE"
export const REMOVE = "todo/REMOVE"
export const TOGGLE = "todo/TOGGLE"
export const CHANGE_INPUT = "todo/CHANGE_INPUT"

interface CreateAction {
    type: typeof CREATE;
    payload: TodoItemDataParams
}

interface RemoveAction {
    type: typeof REMOVE,
    meta: {
        id: number;
    };
}

interface ToggleAction {
    type: typeof TOGGLE
    meta: {
        id: number;
    }
}

interface ChangeInputAction {
    type: typeof CHANGE_INPUT;
    meta: {
        input: string;
    }
}


export type TodoActionTypes = 
    | CreateAction
    | RemoveAction
    | ToggleAction
    | ChangeInputAction

