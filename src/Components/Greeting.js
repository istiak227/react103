import React, { Component }  from 'react'

class Greeting extends Component {
    render () {
        const date = new Date()
        const hour = date.getHours()
        let timeOfDay
        if (hour<12) {timeOfDay = "mornign"
        } else if (hour >= 12 && hour < 17) {timeOfDay = "afternoon"
        } else {timeOfDay = "night"
        }
        
        return (
            <h3>Good {timeOfDay}!</h3>
        )
    }
}

export default Greeting

