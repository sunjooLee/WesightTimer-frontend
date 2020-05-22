import React, { useState } from 'react'
import axios from 'axios';
<<<<<<< HEAD
import UnloggedNav from '../components/UnloggedNav';
=======
import UnloggdeNav from '../components/UnloggdeNav';
>>>>>>> fce223c... 로그인 후 회원 정보 가져오기 완료
import LoginSelector from '../components/LoginSelector';
import styled from 'styled-components';
import { facebookLink } from '../config';

const UnloggedInMain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sendStateVal = () => {
        setIsModalOpen(true);
    }

    console.log(facebookLink);

    // console.log("Main.js - isModalOpen : ", isModalOpen)

    return (
        <>
            <ViewDiv>
                <MainDiv>
<<<<<<< HEAD
                    <UnloggedNav onClickFromMain={() => setIsModalOpen(true)} />
=======
                    <UnloggdeNav onClickFromMain={() => setIsModalOpen(true)} />
>>>>>>> fce223c... 로그인 후 회원 정보 가져오기 완료
                    <LoginSelector setIsModalOpen={(state) => setIsModalOpen(state)} isVisible={isModalOpen} />
                    <UnloggedInSec>
                        <LeftLoginBox />
                        <ImgBox >
                            {/* <A href="https://www.facebook.com/v7.0/dialog/oauth?client_id=268946514245799&redirect_uri=https://10.58.2.238:8001/user/login">Sign up</A> */}
                            <ImgIns src="https://insighttimer.com/static/media/home_desktop_v1.41c5e3a2.jpg" alt="loginImg" />
                        </ImgBox>
                    </UnloggedInSec>
                </MainDiv>
            </ViewDiv>
        </>
    )
}

const LeftLoginBox = () => (

    <LeftLoginCont>
        <Title>
            #1 free app for sleep,<br />
            anxiety and stress.
    </Title>
        <TitleDesc>
            Create an account. It’s free. Join 15 million <br />
            people today.
    </TitleDesc>
        <BtnBox>
            <Button><Span>Sign up with email</Span></Button>
            <WhiteBtn>
                <Img src="https://insighttimer.com/static/media/facebook-circular-logo.078994bf.svg" />
                <Span>Sign up with Facebook</Span>
            </WhiteBtn>
            <Div>Already signed up?<Atag href="#">Log in</Atag></Div>
        </BtnBox>
    </LeftLoginCont>
);

const ViewDiv = styled.div`  
    top: 0;
    left: 0;
`;

const LeftLoginCont = styled.div`
    margin-top: calc(var(--vh, 1vh) * 15) !important;
    margin-right: 85px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: inherit;
    width: 30%;
    z-index: 0;
`;

const ImgBox = styled.div`
    width: 60%;
    margin: 0;
    display: flex;
    justify-content: center;
    box-sizing: inherit;
`;

const ImgIns = styled.img`
    max-height: 700px;
    margin-top: 73px;
    width: 100%;
    height: auto;
    object-fit: contain;        
`;

const Title = styled.div`
    font-family: ProximaNovaBold;
    margin-bottom: 17px;
    color: $primary-dk-font-title;
    font-size: 38px;
    line-height: 43px;
    letter-spacing: 0.8px;
`;

const TitleDesc = styled.div`
    color: #3f414c;
    font-family: ProximaNovaLight;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 24px;
    letter-spacing: 0.2px;
`;

const BtnBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Button = styled.button`
    width: 360px;
    height: 50px;
    font-size: 17px;
    letter-spacing: 0.19px;
    border-radius: 4px;
    background: #181818;
    padding: 6px 8px;
    color: #fff;
    margin-bottom: 20px;
    font-family: ProximaNovaSemiBold;
`;

const Span = styled.span`
    width: 100%;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
`;

const WhiteBtn = styled.button`
    width: 360px;
    height: 50px;
    background: #fff;
    color: #181818;
    font-size: 17px;
    border-radius: 4px;
    border: solid 1px #ebebeb;
    font-family: ProximaNovaSemiBold;
    letter-spacing: 0.19px;
    padding: 6px 8px;
    position: relative;
`;

const A = styled.a`
`;

const Img = styled.img`
    left: 17px;
    width: 21px;
    height: 21px;
    position: absolute;
`;

const Div = styled.div`
    margin-top: 20px;
    padding-right: 4px;
    font-size: 15px;
    font-family: ProximaNovaRegular;
    color: #373943;
`;

const Atag = styled.a`
    margin-left: 4px;
    font-family: ProximaNovaBold;
    color: #3f414c;
`;

const UnloggedInSec = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-sizing: inherit;
    min-width: 960px;
    padding: 0px 40px;
`;

const MainDiv = styled.div`
    padding: 0px 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    --vh: 9.16px;
    align-self: center;
    position: absolute;
    top: 0;
    left: 0;
`;


export default UnloggedInMain;
