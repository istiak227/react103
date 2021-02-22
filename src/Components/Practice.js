import React from 'react'

class Practice extends React.Component {
    constructor() {
        super()
        this.state = {
            initialCount: 1
        }
    }

    increaseNumberByDouble() {
        this.setState(newState => {
            return {
                initialCount: this.state.initialCount + newState.initialCount
            }
        })
    }

    render() {
        const { initialCount } = this.state
        return (
            <div>
                <button onClick={this.increaseNumberByDouble.bind(this)}>+</button>
                <p>{initialCount}</p>
            </div>
        )
    }
}

export default Practice