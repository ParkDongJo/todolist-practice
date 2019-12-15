import React, { Component } from 'react'
import TodoItem from './TodoItem'

interface Props {

}

interface TodoItemState {
    id: number;
    text: string;
    done: boolean;
}

interface State {
    input: string;
    todoItems: TodoItemState[];
}

class TodoList extends Component<Props, State> {
    nextTodoId: number = 0;

    state:State = {
        input: '',
        todoItems: []
    }

    onToggle = (id: number): void => {
        const { todoItems } = this.state;
        const nextTodoItems: TodoItemState[] = todoItems.map( item => {
            if (item.id === id) {
                item.done = !item.done;
            }
            return item;
        })

        this.setState({todoItems: nextTodoItems})
    }

    onSubmit = (): void => {
        const { todoItems, input } = this.state;
        const newItem: TodoItemState = { id: this.nextTodoId++, text: input, done: false};
        const nextTodoItems: TodoItemState[] = todoItems.concat(newItem);

        this.setState({
            input: '',
            todoItems: nextTodoItems
        })
    }

    onRemove = (e: React.MouseEvent, id: number): void => {
        console.log("onRemove - ", id);
        e.preventDefault();
        const { todoItems } = this.state;
        const nextTodoItems: TodoItemState[] = todoItems.filter( item => item.id !== id );

        this.setState({
            todoItems: nextTodoItems
        })
    }

    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        const { value } = e.currentTarget;
        this.setState({ input: value })
    }

    onModify = (id: number): void => {
         // 구현중
    }

    render = () => {
        const { onSubmit, onChange, onToggle, onRemove, onModify } = this;
        const { input, todoItems } = this.state;

        const todoItemList: React.ReactElement[] = todoItems.map(
            todo => (
                <TodoItem 
                    key = {todo.id}
                    done = {todo.done}
                    onToggle = {() => onToggle(todo.id)}
                    onRemove = {(e: React.MouseEvent) => onRemove(e, todo.id)}
                    onModify = {() => onModify(todo.id)}
                    text = {todo.text}
                />
            )
        )

        return (
            <div>
                <h1>Todo List</h1>
                <form onSubmit={onSubmit}>
                    <input onChange={onChange} value={input} />
                    <button type="submit">추가하기</button>
                </form>
                <ul>
                    { todoItemList }
                </ul>
            </div>
        );
    }
}

export default TodoList;