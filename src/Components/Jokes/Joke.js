import React from 'react'

const Joke = (props) => {
    const {question, punchLine} = props.joke
    return (
        <div>
            <h3 style={{display: question ? "block" : "none"}}>Question: {question}</h3>
            <p style={{color: question ? "" : "blue" }}>Punch Line: {punchLine}</p>
            <hr />
        </div>
    )
}

export default Joke
