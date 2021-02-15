import React from 'react'
import Joke from './Joke'
import jokesData from './jokesData'
const Jokes = () => {
    const jokeComponent = jokesData.map(joke => <Joke key={joke.id} joke = {joke} />)
    return (
        <div>
            {jokeComponent}
           {/* <Joke joke = {{question: "Knock Knock!", punchLine: "Its Annie"}} /> 
           <Joke joke = {{punchLine: "Its Annie"}} /> 
           <Joke joke = {{question: "Knock Knock!", punchLine: "Its Annie"}} /> 
           <Joke joke = {{question: "Knock Knock!", punchLine: "Its Annie"}} /> 
           <Joke joke = {{question: "Knock Knock!", punchLine: "Its Annie"}} />  */}
        </div>
    )
}

export default Jokes
