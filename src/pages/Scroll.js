import React from "react";
import styled from "styled-components";
import SecondCard from "../components/SecondCard";
import Rolldata from "../components/Thirddata";
import Rollcard from "../components/Rollcard"

const Scroll = () => {

  return (
    <Essentialwrap>
      <Essentialfull>
        <SwiperWrap>
          {Rolldata.map((x) => {
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
  width:1375px;
  position: relative;
  color: #FFFFFF;
`;



const Essentialfull = styled.div`
  
  margin: 0, auto;
  margin-top: 100px;
  flex: 1;
  width: inherit;
  box-sizing: inherit;
  overflow:hidden;
  
`;


const SwiperWrap = styled.section`
  width: 3518px;
  padding-top: 20px;
  display: flex;
  transform: ${(props) => `translateX(${props.translate}px)`};
`;


export default Scroll;
