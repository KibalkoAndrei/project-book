import React from "react";
import { ReactComponent as Loupe } from './loup.svg';
import './Form.css'

function Form ({options, defaultValue, valueOption, onChangeOption, onChangeInput}) {
    return (
        <form action="">
            <Loupe className="lupa"></Loupe>
            <input type="text" onChange={e=> onChangeInput(e.target.value)}/>
            <select
                value={valueOption}
                onChange={event => onChangeOption(event.target.value)}
            >
                <option disabled={true} value=''>{defaultValue}</option>
                {options.map(option => 
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.name}
                    </option>
                )}

            </select>
        </form>
    )
}

export default Form;