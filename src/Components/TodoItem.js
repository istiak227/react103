import React from 'react'
import './TodoItem.css'

const TodoItem = (props) => {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <span>{props.item}</span>
        </div>
        
    )
}

export default TodoItem


