import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const {todos, onToggle, onRemove} = this.props;

        return (
            <div>
                <TodoItem text="강의듣기"/>
                <TodoItem text="책읽기"/>
                <TodoItem text="운동하기"/>
            </div>
        );
    }
}

export default TodoItemList;