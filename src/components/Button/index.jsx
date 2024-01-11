import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  height: 100px;
  color: white;
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  border-radius: 1px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.3)); 
    transition: background 0.3s ease; 
    border: 1px solid linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.7)); 
}
  .big-text {
    font-size: 40px;
  }
  .small-text {
    font-size: 10px;
    color: #ababab;
    padding-bottom: 10px;
  }
`;

const ButtonText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

function MyComp() {
    return (
        <div>
            <Button>
                <ButtonText>
                    <span className="small-text">мы</span>
                    <span className="big-text">1</span>
                    <span className="small-text">на рынке</span>
                </ButtonText>
            </Button>
            <Button>
                <ButtonText>
                    <span className="small-text">гарантируем</span>
                    <span className="big-text">50%</span>
                    <span className="small-text">безопасность</span>
                </ButtonText>
            </Button>
            <Button>
                <ButtonText>
                    <span className="small-text">календарик за</span>
                    <span className="big-text">2001г.</span>
                    <span className="small-text">в подарок</span>
                </ButtonText>
            </Button>
            <Button>
                <ButtonText>
                    <span className="small-text">путешествие</span>
                    <span className="big-text">597</span>
                    <span className="small-text">дней</span>
                </ButtonText>
            </Button>
        </div>
    );
}

export default MyComp;