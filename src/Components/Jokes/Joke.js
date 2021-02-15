import React from 'react'

const Joke = (props) => {
    console.log(props.joke)
    return (
        <div>
            <h3 style={{display: props.joke.question ? "block" : "none"}}>Question: {props.joke.question}</h3>
            <p style={{color: props.joke.question ? "" : "red" }}>Punch Line: {props.joke.punchLine}</p>
            <hr />
        </div>
    )
}

export default Joke
