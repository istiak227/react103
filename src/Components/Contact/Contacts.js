import React from 'react'
import ContactCard from './ContactCard'

const Contacts = () => {
    const contactData = [
        {
            img: "http://placekitten.com/300/300",
            name: "Billu",
            number: "1234567",
            email: "billu@gmail.com"
        },
        {
            img: "http://placekitten.com/300/300",
            name: "Noorie",
            number: "1234567",
            email: "billu@gmail.com"
        },
        {
            img: "http://placekitten.com/300/300",
            name: "Pillu",
            number: "1234567",
            email: "billu@gmail.com"
        },
        {
            img: "http://placekitten.com/300/300",
            name: "Tillu",
            number: "1234567",
            email: "billu@gmail.com"
        }
    ]
    return (
        <div>
            <ContactCard contact = {contactData[0]} />
            <ContactCard contact = {contactData[1]} />
            <ContactCard contact = {contactData[2]} />
            <ContactCard contact = {contactData[3]} />
        </div>
    )
}

export default Contacts
