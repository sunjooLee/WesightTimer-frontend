import React from "react";
import styled from "styled-components";

const SecondCard = (props) => {
  return (
    <SecondCardcontainer>
      <Roundedmd>
        <Textbox>
          <TitleDesc>{props.description}</TitleDesc>
          <Title>{props.title}</Title>
        </Textbox>
        <CardImg2 src={props.imageURL} />
      </Roundedmd>
    </SecondCardcontainer>
  );
};

const SecondCardcontainer = styled.div``;

const Roundedmd = styled.div`
  margin-right: 30px;
  background-color: transparent;
  flex: 1;
  width: auto;
  height: 100%;
  box-sizing: inherit;
  position: relative;
  overflow: hidden;
`;

const CardImg2 = styled.img`
  width: 100%;
  ${Roundedmd}:hover & {
    position: relative;
    bottom: 20px;
  }
`;

const Textbox = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const TitleDesc = styled.div`
  font-size: 35px;
  font-family: JennaSue;
`;
const Title = styled.div``;

export default SecondCard;
