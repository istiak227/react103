import React from 'react'
import './TodoItem.css'

const TodoItem = (props) => {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <span>{props.todo.text}</span>
        </div>
        
    )
}

export default TodoItem


