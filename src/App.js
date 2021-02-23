import React from 'react'
import './App.css';

import Header from './Components/Header'
import MyInfo from './Components/MyInfo'
import Footer from './Components/Footer'
import Todo from './Components/Todo/Todo'
import Contacts from './Components/Contact/Contacts'
import Jokes from './Components/Jokes/Jokes'
import Greeting from './Components/Greeting'
import Practice from './Components/Practice'
import Conditional from './Components/ConditionalRendering/Conditional';
import ConditionalApp from './Components/ConditionalRendering/ConditionalApp';
import StarWars from './Components/StarWarsApi/StarWars';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      name: "Istiak Ahmed",
      isLoggedIn: false,
      isLodding: true
    }
    this.changeLoggingState = this.changeLoggingState.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLodding: false
      })
    }, 1500)
  }

  changeLoggingState() {
      this.setState(currentState => {
        return {
          isLoggedIn: !currentState.isLoggedIn
        }
      })
  } 
  
  render () {
    const isLoggedIn = this.state.isLoggedIn;
    let wordDisplay
    isLoggedIn ? wordDisplay = "in"
    : wordDisplay = "out"
    return (
      <div className="App">
       <Header />
       <StarWars />
       <MyInfo name={this.state.name} />
       {
         this.state.isLodding ? <h2>Lodding.....</h2>
         : <Conditional />
       }
       <ConditionalApp />
       <h1>You are Currently Logged {wordDisplay}</h1>
       <button onClick={this.changeLoggingState}>
         Log{wordDisplay}
       </button>
       {/* {isLoggedIn ? <h1>Your are looged (in)</h1>
       : <h1>You are logged (out)</h1>} */}
       <Practice />
       <Todo />
       <Contacts />
       <Jokes /> 
       <Footer />
       <Greeting />
      </div>
    );
  }
}

/* THIS IS THE SAME FUNCTION METHOD AS ABOVE CLASS COMPONENT ----------->
  function App() {
  const date = new Date()
  const hour = date.getHours()
  let timeOfDay
  if (hour<12) {
    timeOfDay = "mornign"
  } else if (hour >= 12 && hour < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }

  return (
    <div className="App">
     <Header />
     <MyInfo />
     <Todo />
     <Contacts />
     <Jokes /> 
     <Footer />
     <h3>
       Good {timeOfDay}!
     </h3>
    </div>
  );
} */

export default App;
