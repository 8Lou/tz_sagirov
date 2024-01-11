import React, { useState } from "react";
import "./style.css";
import Bunner from "./bunner.png";
import Button from "../Button";

function Main() {
    const [buttonText, setButtonText] = useState('Click me');

    const handleClick = () => {
        setButtonText('Button clicked');
    };

    return (
        <main className="main">
            <div className="content">
                <img className="image" src={Bunner} alt="Картинка" />
                <Button text={buttonText} onClick={handleClick} />
            </div>
        </main>
    );
};

export default Main;