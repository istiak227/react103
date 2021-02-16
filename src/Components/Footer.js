import React from 'react'

class Footer extends React.Component {
    constructor () {
        super () 
        this.state = {
            text: "Write Somothing in the input field"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const newText = event.target.value
        this.setState({text: newText})
    }

    /* handleChange(event) {
        const newText = event.target.value
        this.setState(prevState => {
            return {
                text: `Greate ${newText}`
            }
        })
    } I dont need the preState In this Case */

    render () {
        return (
            <div>
                <h3 style={{backgroundColor: "red"}}>Write Something That Will Change the FOOTER</h3>
                <p style={{display: "inline-block"}}>{this.state.text} </p>
                <input onChange={this.handleChange} />
            </div>
        )
        
    }
}

export default Footer
