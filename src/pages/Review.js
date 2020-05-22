import React from 'react';
import styled from 'styled-components';

export const ReviewCard = (props) => {
    return (

              <Review>
                    <HeaderDiv>
                    <ImgCont/>
                    <DivCont>
                    <DivUserName>
                        {props.userName}
                    </DivUserName>
                    <DivDate>
                        {props.writeDate}
                    </DivDate>
                    </DivCont>
                    <StarsDiv>
                        <Stars><svg class="MuiSvgIcon-root w-3 h-3 text-black75" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg></Stars>
                        <Stars><svg class="MuiSvgIcon-root w-3 h-3 text-black75" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg></Stars>
                        <Stars><svg class="MuiSvgIcon-root w-3 h-3 text-black75" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg></Stars>
                        <Stars><svg class="MuiSvgIcon-root w-3 h-3 text-black75" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg></Stars>
                        <Stars><svg class="MuiSvgIcon-root w-3 h-3 text-black75" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg></Stars>
                    </StarsDiv>
                    </HeaderDiv>
                    <ReviewContent>
                    {props.reviewContent}
                    </ReviewContent>
                </Review>
    )
}

const Review = styled.div`
    width: 50%;
    margin-right: 20px;
    background-color: #f5f5f5;
    height: max-content;
    margin-bottom: 6rem;
    display: flex;
    flex-direction: column;
`;

const ReviewContent = styled.p`
    padding: 20px;
    letter-spacing: .025em!important;
    color: #1a1a1a;
    line-height: 1.625!important;
    font-family: ProximaNovaRegular;

`;

const HeaderDiv = styled.div`
    display: flex;
    padding: 20px;
`;

const ImgCont = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 10px;
    background-image: url("https://users.insighttimer.com/D3V6k3e9t4J6L0d8R0n3B6c0D1W7Y9e6A7r0z1z0W9N5q2P2q9q1r5a3V1R8D4Y6q4s5P4U6V4w2t6V6G2Q6y2x1d5U2n9P7C6M9%2Fpictures%2Fsquare_medium.jpeg?alt=media");
    background-size: cover;
    background-position: center;
`;

const DivCont = styled.div`
    display:flex;
    height: 40px;
    width: 324.5px;
    flex-direction: column;
    justify-content: space-around;
    padding: 0px 10px;
`;

const DivUserName = styled.div`
    line-height: 1;
    font-family: ProximaNovaSemibold;
`;

const DivDate = styled.div`
    color: #7b7b7b;
    font-family: ProximaNovaRegular;
    font-size: 12px;
`;

const StarsDiv = styled.div`
    width: 100px;
    height: 40px;
    padding: 10px;
`;

const Stars = styled.svg`
    width: 12px;
    height: 12px;
`;

export default ReviewCard;
