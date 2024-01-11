import React, { useState } from "react";
import "./style.css";
import Bunner from "./bunner.png";

function Main() {
    const [buttonText, setButtonText] = useState('Click me');

    const handleClick = () => {
        setButtonText('Button clicked');
    };

    return (
        <main className="main">
            <div className="content">
                <Button text={buttonText} onClick={handleClick} />
                <img className="image" src={Bunner} alt="Картинка" />
                <Button text={buttonText} onClick={handleClick} />
            </div>
        </main>
    );
};

function Button({ text, onClick }) {
    return (
        <button onClick={onClick}>{text}</button>
    );
}

export default Main;