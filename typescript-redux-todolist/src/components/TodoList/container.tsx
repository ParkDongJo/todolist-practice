import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';
import { StoreState, TodoItemDataParams } from '../../interfaces'
import { actionCreator as todoActions } from '../../actions'
import TodoList from './presentaion';


interface Props {
    todoItems: TodoItemDataParams[];
    input: string;
    TodosActions: typeof todoActions;
}

class TodoListContainer extends Component<Props> {
    onCreate = (): void => {
        const { TodosActions, input } = this.props;
        TodosActions.create(input);
    }
    onRemove = (id: number): void => {
        const { TodosActions } = this.props;
        TodosActions.remove(id);
    }
    onToggle = (id: number): void => {
        const { TodosActions } = this.props;
        TodosActions.toggle(id);
    }
    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        const { value } = e.currentTarget;
        const { TodosActions } = this.props;
        TodosActions.changeInput(value);
    }

    render() {
        const { input, todoItems } = this.props;
        const { onCreate, onChange, onRemove, onToggle } = this;
        return (
            <TodoList
                input={input}
                todoItems={todoItems}
                onChange={onChange}
                onCreate={onCreate}
                onToggle={onToggle}
                onRemove={onRemove}
            />
        );
    }
}

const mapStateToProps = ({todo}: StoreState) => ({
	input: todo.input,
	todoItems: todo.todoItems,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	TodosActions: bindActionCreators(todoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)