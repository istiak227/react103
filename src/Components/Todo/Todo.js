import React from 'react'
import TodoItem from './TodoItem'
import todosData  from './todosData'

class Todo extends React.Component {
    constructor () {
        super ()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        /* UPDATE VERSION 
        this.setState(currentState => {
            const newTodos = currentState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed ? todo.completed = false : todo.completed = true
                } return todo
            })
            return {todos: newTodos}
        }) alos failed */

        /* this.setState(currentState => {
            const updatedTodos = currentState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        }) His Way I could not make it work, the logic inside complete and not complete seemed flowed */

        const newTodos = this.state.todos.map(todo => {
            if(id===todo.id){
                todo.completed = !todo.completed
            } return todo
        })
        this.setState(newTodos)
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
        const todoDataComponents = this.state.todos.map(todo => <TodoItem handleChange={this.handleChange} key={todo.id} todo={todo} />)
        return (
            <div style={styles}>
                <h3>My Todo's</h3>
                {todoDataComponents}
            </div>
        )
    }
    
}

export default Todo
