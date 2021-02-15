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

    const conatactComponents = contactData.map((cat,index) => <ContactCard key={index} cat = {cat} />)

    return (
        <div>
            {/* 
                This One passing the whole contactdata to its child
            <ContactCard cats = {contactData} /> */
            }

            {conatactComponents}

            {/* <ContactCard cats = {contactData[0]} />
            <ContactCard cats = {contactData[1]} />
            <ContactCard cats = {contactData[2]} />
            <ContactCard cats = {contactData[3]} /> */}
        </div>
    )
}

export default Contacts
