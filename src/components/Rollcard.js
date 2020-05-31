import React from "react";
import styled from "styled-components";

const Rollcard = (props) => {
  return (
    <RollCardcontainer>
      <Rolledmd>
        <Textbox>
          <Starwrap>
              <Starscore>{props.starscore}</Starscore>
          </Starwrap>
          <TitleDesc>{props.description}</TitleDesc>
          <Title>{props.title}</Title>
        </Textbox>
        <CardImg2 src={props.imageURL} />
      </Rolledmd>
    </RollCardcontainer>
  );
};

const RollCardcontainer = styled.div`
  display: flex;
  width: 340px;
  &:hover {
    transform: translateY(-10px);
  }
  transition: all 0.4s ease-in-out;
`;

const Rolledmd = styled.div`
  margin-right: 30px;
  margin-bottom: 20px;
  background-color: transparent;
  flex: 1;
  width: 50%;
  height: 100%;
  box-sizing: inherit;
  position: relative;
`;

const CardImg2 = styled.img`

  border-radius:10px;
  width: 100%;
`;
const Starwrap = styled.div`
  display:flex;
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

export default Rollcard;
