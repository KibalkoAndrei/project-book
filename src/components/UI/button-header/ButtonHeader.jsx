import React, { Children } from "react";
import './ButtonHeader.css'
import  Logo  from './pen.svg'

function ButtonHeader ({img, text}) {
    return (
        <button className="button-header">
            <div>
                <img className="img-button-header" src={img} alt="" />
                <span>{text} </span>
            </div>
        </button>
    )
}

export default ButtonHeader;