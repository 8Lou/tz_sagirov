import React, { useState } from "react";
import "./style.css";
import Bunner from "./bunner.png";
import Button from "../Button";
import styled from 'styled-components';

function Main() {
    const [buttonText, setButtonText] = useState('Click me');

    const handleClick = () => {
        setButtonText('Button clicked');
    };

    const SpaceButton = styled.button`
        color: #ababab; 
        font-size: 12px;
        width: 145px;
        height: 30px;
        background: transparent; 
        border: ,5px solid #3376ce;
        position: absolute;
        overflow: hidden;
        cursor: pointer;
        box-shadow: 0 0 5px #3376ce; 
        margin-left: 100px;
        z-index: 10;
  &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 7px;
        height: 7px;
        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;
        box-shadow: 0 1 2px #fff;
  }
    &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 7px;
        height: 7px;
        border-top: 1px solid #fff;
        border-right: 1px solid #fff;
        box-shadow: 0 1 3px #fff; 
  }
`;

    return (
        <main className="main">
            <img className="image" src={Bunner} alt="Баннер" />
            <div className="buttons">
                {/* <MyComp /> */}
                <Button text={buttonText} onClick={handleClick} />
            </div>
            <SpaceButton>Начать путешествие</SpaceButton>
        </main>
    );
};

export default Main;