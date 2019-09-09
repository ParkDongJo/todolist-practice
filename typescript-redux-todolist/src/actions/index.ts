import { CREATE, REMOVE, TOGGLE, CHANGE_INPUT } from '../types'

let autoId = 0;

const create = (text: string) => {
    return {
        type: CREATE,
        payload: {
            id: autoId++,
            text: text,
            done: false
        }
    }
}

const remove = (id: number) => {
    return {
        type: REMOVE,
        meta: {
            id: id
        }
    }
}

const toggle = (id: number) => {
    return {
        type: TOGGLE,
        meta: {
            id: id
        }
    }
}

const changeInput = (input: string) => {
    return {
        type: CHANGE_INPUT,
        meta: {
            input: input
        }
    }
}

export const actionCreator = {
    create,
    toggle,
    remove,
    changeInput
}