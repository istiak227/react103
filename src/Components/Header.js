import React from 'react'
import NavberTitle from './NavberTitle'

class Header extends React.Component {
    render () {
        const title = ['Home', 'About', 'Contact'] 
        return (
            <header>
                <NavberTitle title = {title} />
            </header>
        )
    }
}

/* const Header = () => {
    const title = ['Home', 'About', 'Contact']
    return (
        <header>
            <NavberTitle title = {title} />
        </header>
    )
} This is was functional Component */

export default Header;
