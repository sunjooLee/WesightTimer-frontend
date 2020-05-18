import React, { useState } from "react";
import styled from "styled-components";
import SecondCard from "../components/SecondCard";
import Thirddata from "../components/Thirddata";

const Slider = () => {
  const [number, setNumber] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [button, setButton] = useState(`hidden`);

  const handleClickRight = () => {
    setNumber(number + 1);
    setTranslate(translate - (290 + 15));
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
    setTranslate(translate + (290 + 15));
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
        <Js23wfull>Essential Listening</Js23wfull>

        <SwiperWrap translate={translate}>
          {Thirddata.map((x) => {
            return (
              <SecondCard
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
  position: relative;
  color: #FFFFFF;
`;

const Js23wfull = styled.span`
  font-family: ProximaNovaBold;
  font-size: 27px;
`;

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NextButton = styled.button`
  top: 260px;
  right: 15px;
  border: 1px solid black;
  width: 47px;
  height: 47px;
  position: absolute;
  background-color: white;
  border-radius: 20px;
  z-index: 200;
`;

const ButtonLabel = styled.div``;

const PrevButton = styled.button`
  top: 265px;
  left: -20px;
  border: 1px solid black;
  width: 47px;
  height: 47px;
  position: absolute;
  z-index: 200;
  border-radius: 20px;
  background-color: white;
`;

const Essentialfull = styled.div`
  margin: 0, auto;
  margin-top: 100px;
  flex: 1;
  width: 1600px;
  box-sizing: inherit;
  overflow: hidden;
`;

const Library = styled.span`
  display: inline-block;
  font-family: ProximaNovaBold;
  font-size: 47px;
  margin-top: 40px;
`;

const Freesvg = styled.svg`
  width: 93px;
  height: 83px;
  opacity: 0.8;
  overflow: hidden;
  padding-left: 5px;
  padding-right: 10px;
`;

const Webheder = styled.div`
  padding-top: 100px;

  display: flex;
  justify-content: center;
  border: 1px solid black;
  width: 950px;
  overflow: hidden;
  line-height: 1.2;
  text-align: center;
`;

const Thelarge = styled.span`
  font-family: ProximaNovaBold;
  font-size: 47px;
  margin-top: 40px;
`;

const ContentsWrap = styled.section`
  width: 1680px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 180px;
  display: flex;
`;

const SwiperWrap = styled.section`
  width: 3200px;
  padding-top: 20px;
  display: flex;
  transform: ${(props) => `translateX(${props.translate}px)`};
`;

const directionIcon = styled.div``;

export default Slider;
