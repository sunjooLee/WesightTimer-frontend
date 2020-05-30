import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const isEvenNum = props.isEvenNum;
  return (
    <CardContainer isEvenNum={isEvenNum}>
      <CardContent>
        <TextContent>
          <TitleDesc>{props.description}</TitleDesc>
          <Title>{props.title}</Title>
        </TextContent>
        <CardImg src={props.imageURL} />
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  transform: ${(props) => (props.isEvenNum ? "translateY(30px)" : 0)};
`;

const CardContent = styled.div`
  margin-right: 30px;
  background-color: transparent;
  flex: 1;
  width: auto;
  height: 100%;
  box-sizing: inherit;
  position: relative;
  overflow: hidden;
`;

const CardImg = styled.img`
  width: 100%;
  transition: transform 0.8s ease-in-out;
  ${CardContent}:hover & {
    transition: transform 0.8s ease-in-out;
    transform: scale(1.2);
    position: relative;
    bottom: 10px;
  }
`;

const TextContent = styled.div`
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
  color: white;
`;
const TitleDesc = styled.div`
  font-size: 35px;
  font-family: JennaSue;
`;
const Title = styled.div``;

export default Card;
