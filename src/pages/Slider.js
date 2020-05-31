import React, { useState } from "react";
import styled from "styled-components";
import SecondCard from "../components/SecondCard";
import Thirddata from "../components/Thirddata";

const Slider = (props) => {
  const [number, setNumber] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [button, setButton] = useState(`hidden`);

  const handleClickRight = () => {
    setNumber(number + 1);
    setTranslate(translate - (300 -15));
    console.log(`number: `, number);
    // console.log(“translate: “, translate);
    // console.log(“aaaa”, button);
    if (number >= 0) {
      setButton(`visible`);
      // console.log(“bbbb”, button);
    }
  };
  const handleClickLeft = () => {
    setNumber(number - 1);
    // setTranslate(translate + 424.75);
    setTranslate(translate + (300 -15));
    console.log(`sas: `, number);
    if (number === 1) {
      setButton(`hidden`);
    }
  };
  return (
    <Essentialwrap>
      <PrevButton leftButton={button}>
        <ButtonLabel onClick={handleClickLeft}>
          <directionIcon>
            <svg
              class="MuiSvgIcon-root absolute m-auto top-0 left-0 right-0 bottom-0 h-6 w-6"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              role="presentation"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
            </svg>
          </directionIcon>
        </ButtonLabel>
      </PrevButton>
      <NextButton rightButton={button}>
        <ButtonLabel onClick={handleClickRight}>
          <directionIcon>
            <svg
              class="MuiSvgIcon-root absolute m-auto top-0 left-0 right-0 bottom-0 h-6 w-6"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              role="presentation"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
            </svg>
          </directionIcon>
        </ButtonLabel>
      </NextButton>
      <Essentialfull>
        <SwiperWrap translate={translate}>
          {props.data && props.data.map((x) => {
            return (
              <SecondCard
                starimg={x.starimg}
                starscore={x.starscore}
                description={x.description}
                title={x.title}
                imageURL={x.imageURL}
              />
            );
          })}
        </SwiperWrap>
      </Essentialfull>
    </Essentialwrap>
  );
};

const Essentialwrap = styled.div`
  width:1375px;
  position: relative;
  color: #FFFFFF;
`;

const NextButton = styled.button`

    width: 50px;
    height: 50px;    
    position: absolute; 
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px -2px;
    background-color: #FFFFFF;
    justify-content: center;
    align-content: center;
    top: 60%;
    right: -21px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    z-index: 200;
    //transform: rotate(180deg);    
`;

const ButtonLabel = styled.div``;

const PrevButton = styled.button`
    width: 50px;
    height: 50px;    
    position: absolute; 
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px -2px;
    background-color: #FFFFFF;
    justify-content: center;
    align-content: center;
    top: 60%;
    left: -20px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    z-index: 200;
    //transform: rotate(180deg);    
`;

const Essentialfull = styled.div`
  
  margin: 0, auto;
  margin-top: 100px;
  flex: 1;
  width: inherit;
  box-sizing: inherit;
  overflow: hidden;
`;


const SwiperWrap = styled.section`
  width: 3518px;
  padding-top: 20px;
  display: flex;
  transform: ${(props) => `translateX(${props.translate}px)`};
`;


export default Slider;
