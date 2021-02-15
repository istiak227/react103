import React from 'react'
import './App.css';

import Header from './Components/Header'
import MyInfo from './Components/MyInfo'
import Footer from './Components/Footer'
import Todo from './Components/Todo'
import Contacts from './Components/Contact/Contacts'
import Jokes from './Components/Jokes/Jokes'



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
}

export default App;
