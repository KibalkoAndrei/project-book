import React from "react";
import BurgerMenu from "../UI/burger-menu/BurgerMenu";
import './Header.css';
import  Logo  from './pusheen.svg';
import Pensil from './pencil.svg';
import Cloud from './cloud-arrow-up.svg';
import Form from "../UI/form/Form";
import ButtonHeader from "../UI/button-header/ButtonHeader";

function Header ({ valueOption, valueInput, onChangeOption, onChangeInput}) {
    


    return (
        <header>
            <BurgerMenu/>
            <div className="logo"><img src={Logo} alt="" /></div>
            <Form
                defaultValue='Сортировка'
                valueOption={valueOption}
                onChangeOption={onChangeOption}
                onChangeInput={onChangeInput}
                options={[
                    {value:'title', name: 'По названию'},
                    {value:'body', name: 'По описанию'},
                    {value:'description', name: 'По категории'},
                ]}
            />
            <ButtonHeader img={Pensil} text='СОЗДАТЬ'/>
            <ButtonHeader img={Cloud} text='ЗАГРУЗИТЬ'/>
            <ButtonHeader  text='ВОЙТИ'/>
            <ButtonHeader  text='ЗАРЕГИСТРАЦИЯ'/>

        </header>
    )
}

export default Header;