import React from 'react';
import './MyInfo.css';

class MyInfo extends React.Component {
    constructor () {
        super ()
        this.state = {
            age: 25
        }
        this.increaseAge = this.increaseAge.bind(this)
    }

    increaseAge() {
        this.setState(prevState => {
            return {
                age: prevState.age + 1
            }
        })
    }
    
    render () {
        return (
            <main>
                <h1 className="title">My Name is {this.props.name}</h1>
                <h3>I am {this.state.age} years old</h3>
                <button onClick={this.increaseAge}>Increase My Age</button>
                <p style={{padding: "10px", margin: "5px"}}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nulla, similique rem voluptatum unde nisi iure? Voluptatibus aliquid voluptate iusto dolorum perspiciatis eligendi ex dolor quos! Est doloremque voluptatum natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nulla, similique rem voluptatum unde nisi iure? Voluptatibus aliquid voluptate iusto dolorum perspiciatis eligendi ex dolor quos! Est doloremque voluptatum natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nulla, similique rem voluptatum unde nisi iure? Voluptatibus aliquid voluptate iusto dolorum perspiciatis eligendi ex dolor quos! Est doloremque voluptatum natus!
                </p>
                <ul>
                    <li className="list">Cox</li>
                    <li className="list">Malaysia</li>
                    <li className="list">Sylhet</li>
                </ul>
            </main>
        )
    }
}


export default MyInfo;
