import React from 'react'

const ContactCard = (props) => {
    const styles = {
        display: "inline-block",
        margin: "20px",
        padding: "10px",
        border: "2px solid"
    }
    const cats = props.cats
    const { img, name, number, email } = cats  
    return (
        <div style={styles} className="Contacts">
            <img alt="billuImage" src={img}/>
            <h3>{name}</h3>
            <p>{number}</p>
            <p>{email}</p>
        </div>
    )
}

export default ContactCard
