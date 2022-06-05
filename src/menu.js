import { Link } from "react-router-dom";
import React from 'react'; 

export function Menu() {
    return (
        <div>
            <li>
                <Link to='/SM' >Suma y resta</Link> 
                <Link to='/FC' >Fahrenheit to Celsius</Link> 
                <Link to='/form'>Form</Link>
            </li>
        </div>
    )
}