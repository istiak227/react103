import React from 'react'

const MyInfo = () => {
    const style = {
        padding: "10px",
        margin: "10px",
        backgroundColor: "DodgerBlue"
    }
    const listStle = {
        listStyleType: "none",
        justifyContent: "Space-between",
        margin: "5px"
    }
    return (
        <main>
            <h1 style={style}>My Name is Istiak</h1>
            <p style={{padding: "10px", margin: "5px"}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nulla, similique rem voluptatum unde nisi iure? Voluptatibus aliquid voluptate iusto dolorum perspiciatis eligendi ex dolor quos! Est doloremque voluptatum natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nulla, similique rem voluptatum unde nisi iure? Voluptatibus aliquid voluptate iusto dolorum perspiciatis eligendi ex dolor quos! Est doloremque voluptatum natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nulla, similique rem voluptatum unde nisi iure? Voluptatibus aliquid voluptate iusto dolorum perspiciatis eligendi ex dolor quos! Est doloremque voluptatum natus!
            </p>
            <ul>
                <li style={listStle}>Cox</li>
                <li style={listStle}>Malaysia</li>
                <li style={listStle}>Sylhet</li>
            </ul>
        </main>
    )
}

export default MyInfo;
