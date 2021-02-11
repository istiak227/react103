import React from 'react'
import NavberTitle from './NavberTitle'

const Navber = () => {
    const title = ['Home', 'About', 'Contact']
    return (
        <div>
            <NavberTitle title = {title} />
        </div>
    )
}

export default Navber;
