import React from 'react'
import TodoItem from './TodoItem'

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
    return (
        <div style={styles}>
            <h3>My Todo's</h3>
            <TodoItem item={"This is a Todo Item 1"} />
            <TodoItem item={"This is a Todo Item 2"} />
            <TodoItem item={"This is a Todo Item 3"} />
            <TodoItem item={"This is a Todo Item 4"} />
        </div>
    )
}

export default Todo
