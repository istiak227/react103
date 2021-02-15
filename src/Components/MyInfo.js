import React from 'react';
import './MyInfo.css';

const MyInfo = (props) => {
    return (
        <main>
            <h1 className="title">My Name is {props.name}</h1>
            <h3>I am {props.age} years old</h3>
            <p style={{padding: "10px", margin: "5px"}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nulla, similique rem voluptatum unde nisi iure? Voluptatibus aliquid voluptate iusto dolorum perspiciatis eligendi ex dolor quos! Est doloremque voluptatum natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nulla, similique rem voluptatum unde nisi iure? Voluptatibus aliquid voluptate iusto dolorum perspiciatis eligendi ex dolor quos! Est doloremque voluptatum natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nulla, similique rem voluptatum unde nisi iure? Voluptatibus aliquid voluptate iusto dolorum perspiciatis eligendi ex dolor quos! Est doloremque voluptatum natus!
            </p>
            <ul>
                <li className="list">Cox</li>
                <li className="list">Malaysia</li>
                <li className="list">Sylhet</li>
            </ul>
        </main>
    )
}

export default MyInfo;
