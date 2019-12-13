import React, { StatelessComponent } from 'react';

interface Props {
    text: string;
    done: boolean;
    onToggle(): void;
    onRemove(e: React.MouseEvent): void;
    onModify(): void;
}

const TodoItem: StatelessComponent<Props> = ({text, done, onToggle, onRemove, onModify}) => {
    return (
        <li>
            <b
                onClick={onToggle}
                style={{textDecoration: done ? 'line-through' : 'none'}}
            >
                <button onClick={onRemove}>삭 제</button>
                <button onClick={onModify}>수 정</button>
                {text}
            </b>
        </li>
    )
}

export default TodoItem;