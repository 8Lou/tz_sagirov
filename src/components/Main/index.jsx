import React, { useState } from "react";
import "./style.css";
import Bunner from "./bunner.png";
import Button from "../Button";
import styled from 'styled-components';
import MyComp from "../Button";

function Main() {
    const [buttonText, setButtonText] = useState('Click me');

    const handleClick = () => {
        setButtonText('Button clicked');
    };

    const Column = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
`;

    return (
        <main className="main">
            <img className="image" src={Bunner} alt="Баннер" />
            <div className="buttons">
                {/* <MyComp /> */}
                <Button text={buttonText} onClick={handleClick} />
            </div>
        </main>
    );
};

export default Main;