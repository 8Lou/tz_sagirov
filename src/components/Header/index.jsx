import React from "react";
// import logo from "../img/logo.svg";
import { ReactComponent as Logo } from './logo.svg';
import "./style.css";

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <Logo className="logo" />
                {/* <img src={logo} alt="Логотип" /> */}
                <ul className="nav-menu">
                    <li className="nav-item"><a href="/home" className="nav-link">Главная</a></li>
                    <li className="nav-item"><a href="/about" className="nav-link">Технологии</a></li>
                    <li className="nav-item"><a href="/about" className="nav-link">График полетов</a></li>
                    <li className="nav-item"><a href="/about" className="nav-link">Гарантии</a></li>
                    <li className="nav-item"><a href="/about" className="nav-link">О компании</a></li>
                    <li className="nav-item"><a href="/about" className="nav-link">Контакты</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;