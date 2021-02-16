import React from 'react'

const ContactCard = (props) => {
    const styles = {
        display: "inline-block",
        margin: "20px",
        padding: "10px",
        border: "2px solid"
    }
    const cat = props.cat
    const { img, name, number, email } = cat  

    const displayBillu = () => alert(`This is ${name}`)
    const bigBillu = () => {
        
    }
    
    return (
        <div style={styles}>
            <img onMouseOver={bigBillu} alt="billuImage" src={img}/>
            <h3>{name}</h3>
            <p>{number}</p>
            <p>{email}</p>
            <button onClick={displayBillu} >View The Cat</button>
        </div>
    )
}

export default ContactCard
