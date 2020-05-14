import React, { useState } from 'react';
import PopularCard from '../components/PopularCard';
import styled from 'styled-components';

const PopularPage = () => {

    const [number, setNumber] = useState(0);
    const [translate, setTranslate] = useState(0);
    const [button, setButton] = useState("hidden");

    const handleClickRight = () => {
        setNumber(number + 1)
        setTranslate(translate - 570)
        console.log("number: ", number);
        // console.log("translate: ", translate);
        // console.log("aaaa", button);
        if (number >= 0) {
            setButton("visible");
            // console.log("bbbb", button);
        }
    }

    const handleClickLeft = () => {
        setNumber(number - 1)
        setTranslate(translate + 570)
        console.log("sas: ", number);
        if (number === 1) {
            setButton("hidden");
        }
    }

    return (
        <div className="PopularPage">
            <PrevButton leftButton={button}>
                <ButtonLabel onClick={handleClickLeft}>
                    <Icon viewBox="0 0 24 24">
                        <path d="M 10 6 L 8.59 7.41 L 13.17 12 l -4.58 4.59 L 10 18 l 6 -6 Z" />
                    </Icon>
                </ButtonLabel>
            </PrevButton>
            <NextButton>
                <ButtonLabel onClick={handleClickRight}>
                    <Icon viewBox="0 0 24 24">
                        <path d="M 10 6 L 8.59 7.41 L 13.17 12 l -4.58 4.59 L 10 18 l 6 -6 Z" />
                    </Icon>
                </ButtonLabel>
            </NextButton>
            <ListWrap>
                <Title>Popular Courses</Title>
                <ContentsWrap translate={translate}>
                    <PopularCard />
                    <PopularCard />
                    <PopularCard />
                    <PopularCard />
                    <PopularCard />
                </ContentsWrap>
            </ListWrap>
        </div>
    );
}

export default PopularPage;


// styled-components

const PrevButton = styled.button`
    width: 50px;
    height: 50px;    
    //position: fixed;
    position: absolute; 
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px -2px;
    background-color: #FFFFFF;
    justify-content: center;
    align-content: center;
    top: 25%;
    left: 30px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    z-index: 10;
    transform: rotate(180deg);    
    visibility: ${props => props.leftButton};    
`;

const NextButton = styled.button`    
    width: 50px;
    height: 50px;    
    //position: fixed;
    position: absolute; 
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px -2px;
    background-color: #FFFFFF;
    display: flex;    
    justify-content: center;
    align-content: center;
    top: 25%;
    right: 30px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    z-index: 100;
`;

const ButtonLabel = styled.span``;

const Icon = styled.svg`
    height: 24px;
    width: 24px;
    color: #1b1b1b;   
`;

const Title = styled.h3`
    font-size: 30px;
    font-family: ProximaNovaSemiBold;        
`;

const ListWrap = styled.section`   
    margin: 0 56px;  
    width: 1680px;      
    height: 560px;    
    padding-bottom: 106px;
    margin-top: 2rem!important;
    overflow:hidden;      
    position: relative;      
`;

const ContentsWrap = styled.div`  
    flex-direction: row;
    justify-content: flex-start;
    display: flex;    
    width: 100%;   
    /* height: 380px; */
    position: absolute;     
    left:0;    
    transform: translateX(${props => props.translate}px);    
`;


// transform: translate(0, 0px);
//     transition: 0.4s;
//     transition-property: all;
//     transition-duration: 0.4s;
//     transition-timing-function: ease;
//     transition-delay: 0s;

