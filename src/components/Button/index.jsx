import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 100px;
  color: #ababab;  
  font-weight: 600;
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  border-radius: 1px;
  cursor: pointer;  
  margin: 10px;

  &:hover {
    background: linear-gradient(rgba(255,255,255,0.02), rgba(255,255,255,0.3)); 
    transition: background 0.3s ease; 
    border: 1px solid linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.7)); 
}
  .big-text {
    font-size: 40px;
  }
  .small-text {
    font-size: 12px;
    font-weight: lighter;
    color: #ababab;
    padding-bottom: 12px;
  }
`;

const ButtonText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 0;
`;

function MyComp() {
    return (
        <div className='buttons'>
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
                    <Text>
                        <span className="big-text">2001</span>
                        <span className="small-text">г.</span>
                    </Text>
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