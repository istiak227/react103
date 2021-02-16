import React from 'react'
import TodoItem from './TodoItem'
import todosData  from './todosData'

class Todo extends React.Component {
    constructor () {
        super ()
        this.state = {
            todos: todosData
        }
    }
    
    render () {
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
        const todoDataComponents = this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)

        return (
            <div style={styles}>
                <h3>My Todo's</h3>
                {todoDataComponents}
            </div>
        )
    }
    
}

export default Todo
