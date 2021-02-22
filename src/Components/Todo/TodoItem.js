import React from 'react'
import './TodoItem.css'

const TodoItem = (props) => {
    const changeTodoStatus = () => {
        props.handleChange(props.todo.id)
    }
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                onChange={changeTodoStatus} 
                checked={props.todo.completed} 
            />
            <span>{props.todo.text}</span>
        </div>
        
    )
}

export default TodoItem


