import React, { Component } from 'react'

class ConditionalApp extends Component {
    constructor () {
        super()
        this.state = {
            messages: ["a"]
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.messages.length > 0 &&
                    <h2>You Have {this.state.messages.length} unread messages</h2>
                }  
            </div>
        )
    }
}

export default ConditionalApp
