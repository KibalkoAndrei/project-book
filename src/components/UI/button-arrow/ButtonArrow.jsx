import {React, } from "react";
import './buttonArrow.css';

function ButtonArrow ({status}) {
    
    return (
        <button  className={ status?"button-arrow": 'button-arrow-active'}>

        </button>
    )
}

export default ButtonArrow;