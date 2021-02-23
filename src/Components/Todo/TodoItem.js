import React from 'react'
import './TodoItem.css'

const TodoItem = (props) => {
    const changeTodoStatus = () => {
        props.handleChange(props.todo.id)
    }
    const completedStyle = {
        frontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    //let todoStyle = props.todo.completed ? {textDecoration: "line-through"} : {textDecoration: "none"}
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                onChange={changeTodoStatus} 
                checked={props.todo.completed} 
            />
            <span style={props.todo.completed ? completedStyle : null}>{props.todo.text}</span>
        </div>
        
    )
}

export default TodoItem


