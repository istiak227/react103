import React from 'react'
import Joke from './Joke'

const Jokes = () => {
    return (
        <div>
           <Joke joke = {{question: "Knock Knock!", punchLine: "Its Annie"}} /> 
           <Joke joke = {{punchLine: "Its Annie"}} /> 
           <Joke joke = {{question: "Knock Knock!", punchLine: "Its Annie"}} /> 
           <Joke joke = {{question: "Knock Knock!", punchLine: "Its Annie"}} /> 
           <Joke joke = {{question: "Knock Knock!", punchLine: "Its Annie"}} /> 
        </div>
    )
}

export default Jokes
