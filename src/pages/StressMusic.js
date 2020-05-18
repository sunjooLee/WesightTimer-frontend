import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import Slider from "./Slider";
import styled from 'styled-components';

const StressMusic = (props) => {

    const [stress, setStressData] = useState([]);
    const [teacher, setTeacherData] = useState([]);
    const [stressDetail, setStressDetailData] = useState([]);

    const goToDetailPage = () => {
        props.history.push("/stressDetail");
    }

    return (
            <StressSec>
                <Nav />
                <ContentsWrapper>
                {stressDetail && <Header>
                    <Title>
                    <H1><Span>Managing</Span>Stress</H1>
                    </Title>
                    <Desc><P>The long-term effects of stress can be detrimental to our health and also lead to anxiety and depression. Meditation for stress relief and mindfulness techniques can help to counter these effects by lowering stress hormones and decreasing inflammation in the body.</P></Desc>
                </Header>}
                <StressDiv onClick={()=>{goToDetailPage()}}>
                    <Slider/>
                    <Slider/>
                </StressDiv>
                </ContentsWrapper>
            </StressSec>
    )
}

const StressSec = styled.div`
    max-width: 1732px;
    height: 100vh;
    display:flex;
    flex-direction: column;
    margin: 0 auto;
`;

const ContentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    height: 400px;
    margin: 0 60px;
    padding: 96px 64px 48px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    width: 100%;
    height: 88px;
    text-align: center;
`;

const H1 = styled.h1`
    font-size: 56px;
    line-height: 68px;
    font-family: ProximaNovaBold;
`;

const Span = styled.span`
     font-size: 68px;
     margin-right: 15px;
     font-family: JennaSue;
`;

const Desc = styled.div`
    padding-top: .25rem;
    opacity: .75;
    color: #181818;
    width: 816px;
`;

const P = styled.p`
    font-family: ProximaNovaRegular;
    font-size: 24px;
    line-height: 1.5;
    text-align: center;
`;

const StressDiv = styled.div`
    width: 1732px;
    //margin-top: 3rem;
    align-self:center;
    margin: 0 auto;
`;

export default StressMusic;
