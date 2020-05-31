import React from "react";
import styled from "styled-components";


const SecondCard = (props) => {
  return (
    <SecondCardcontainer>
      <Roundedmd>
        <Textbox>
          <Starwrap>
              <Starimg src={props.starimg}/>
              <Starscore>{props.starscore}</Starscore>
          </Starwrap>
          <TitleDesc>{props.description}</TitleDesc>
          <Title>{props.title}</Title>
        </Textbox>
        <CardImg2 src={props.imageURL} />
      </Roundedmd>
    </SecondCardcontainer>
  );
};

const SecondCardcontainer = styled.div`
  &:hover {
    transform: translateY(-10px);
    transition: all 0.3s ease-in-out;
  }
`;

const Roundedmd = styled.div`
  border-radius:10px;
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
`;
const Starwrap = styled.div`
  display:flex;
  `;

const Starimg = styled.img`
  width:12px;
  height:12px;
  `;
const Starscore=styled.div`
  `;


const Textbox = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction:column;
  justify-content:flex-end
`;

const TitleDesc = styled.div`
  font-size: 24px;
  font-family: ProximaNovaBold;
`;
const Title = styled.div``;

export default SecondCard;
