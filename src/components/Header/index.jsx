import React from "react";
import logo from "../img/logo.svg";

const Header = () => {
    return (
        <div>
            <img src={logo} alt="Логотип" />
            <div>
                <p>Главная</p>
                <p>Технологии</p>
                <p>График полетов</p>
                <p>Гарантии</p>
                <p>О компании</p>
                <p>Контакты</p>
            </div>
            <h1>Menu</h1>
        </div>
    );
};

export default Header;