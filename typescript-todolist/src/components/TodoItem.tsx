import React, { StatelessComponent } from 'react';

interface Props {
    text: string;
    done: boolean;
    onToggle(): void;
    onRemove(): void;
}

const TodoItem: StatelessComponent<Props> = ({text, done, onToggle, onRemove}) => {
    return (
        <li>
            <b
                onClick={onToggle}
                style={{textDecoration: done ? 'line-through' : 'none'}}
            >
                <button onClick={onRemove}>삭 제</button>
                {text}
            </b>
        </li>
    )
}

export default TodoItem;