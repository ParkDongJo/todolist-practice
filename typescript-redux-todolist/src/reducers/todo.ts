import { 
    CREATE, 
    REMOVE, 
    TOGGLE, 
    CHANGE_INPUT, 
    TodoActionTypes 
} from '../types'
import { TodoState } from '../interfaces'

const initialState: TodoState = {
    todoItems: [],
    input:  ""
};

export const todoReducer = (
    state: TodoState = initialState,
    action: TodoActionTypes  
): TodoState => {
    switch(action.type) {
        case CREATE:
            return {
                input: "",
                todoItems: [
                    ...state.todoItems, 
                    action.payload
                ]
            }
        case REMOVE:
            return {
                ...state,
                todoItems: state.todoItems
                                .filter(todo => todo.id !== action.meta.id)
            }
        case TOGGLE:
            return {
                ...state,
                todoItems: state.todoItems.map(todo => {
                    if (todo.id === action.meta.id) {
                        todo.done = !todo.done;
                    }
                    return todo;
                })
            }
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.meta.input
            }
        default:
            return state
    }
}
