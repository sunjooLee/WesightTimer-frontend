import React from "react";
import styled from "styled-components";
import SecondCard from "../components/SecondCard";
import Rolldata from "../components/Thirddata";
import Rollcard from "../components/Rollcard"

const Scroll = (props) => {

  return (
    <Essentialwrap>
      <Essentialfull>
        <SwiperWrap>
          {props.data && props.data.map((x) => {
            return (
              <Rollcard
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
  width: 100vw;
  position: relative;
  color: #FFFFFF;
`;

const Essentialfull = styled.div`
  
  margin: 0, auto;
  margin-top: 100px;
  width: 100vw;
  box-sizing: inherit;
  overflow:hidden;
  
`;

const SwiperWrap = styled.section`
  width: inherit;
  padding-top: 20px;
  transform: ${(props) => `translateX(${props.translate}px)`};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;


export default Scroll;
