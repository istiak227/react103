import React, { Component } from 'react' 

class StarWars extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            person: {}
        }
    }
    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.dev/api/people/1/")
        .then(response => response.json())
        .then(data => {
            this.setState({
                loading: false,
                person: data
            })
        })
    }
    render () {
        const text = this.state.loading ? "Loading...." : this.state.person.name
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default StarWars