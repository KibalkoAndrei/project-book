import React from "react";
import './BurgerMenu.css'

const BurgerMenu = () => {

    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" for="menu__toggle">
               <span></span>
            </label>
            <ul class="menu__box">
                <li><a className="menu__item" >Главная</a></li>
                <li><a className="menu__item" >Проекты</a></li>
                <li><a className="menu__item" >Команда</a></li>
                <li><a className="menu__item" >Блог</a></li>
                <li><a className="menu__item" >Контакты</a></li>
             </ul>
</div>

  
    )
}

export default BurgerMenu