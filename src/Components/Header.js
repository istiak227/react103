import React from 'react'
import NavberTitle from './NavberTitle'

const Header = () => {
    const title = ['Home', 'About', 'Contact']
    return (
        <header>
            <NavberTitle title = {title} />
        </header>
    )
}

export default Header;
