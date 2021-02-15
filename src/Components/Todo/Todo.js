import React from 'react'
import TodoItem from './TodoItem'
import todosData  from './todosData'

const Todo = () => {
    const styles = {
        backgoroundColor: "white",
        margin: "auto",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItem: "center",
        border: "2px solid",
        padding: "30px"
    }
    const todoDataComponents = todosData.map(todo => <TodoItem key={todo.id} todo={todo} />)
    return (
        <div style={styles}>
            <h3>My Todo's</h3>
            {todoDataComponents}
        </div>
    )
}

export default Todo
