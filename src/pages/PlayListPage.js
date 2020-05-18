import React, { useState } from 'react';
import Nav from '../components/Nav';
import PlayListCard from '../components/PlayListCard';
import styled from 'styled-components';

const tags = ['#sleep', '#morning', '#relax', '#music', '#anxiety', '#meditation', '#healing', '#relaxation', '#calm', '#stress'];

const PlayListPage = () => {

    const [number, setNumber] = useState(0);
    const [translate, setTranslate] = useState(0);
    const [button, setButton] = useState("hidden");

    const handleClickRight = () => {
        setNumber(number + 1)
        setTranslate(translate - 424.75)
        console.log("number: ", number);
        // console.log("translate: ", translate);        
        if (number >= 0) {
            setButton("visible");
        }
    }

    const handleClickLeft = () => {
        setNumber(number - 1)
        setTranslate(translate + 424.75)
        console.log("sas: ", number);
        if (number === 1) {
            setButton("hidden");
        }
    }

    return (
        <div className="PlayListPage">
            {/* <Nav /> */}
            <TitleArea>
                <TitleText>Playlists</TitleText>
                <TitleDescription>
                    Create public or private Playlists from your Library. <br />You can also browse and follow your friend’s.
                    <BackgroundImg />
                </TitleDescription>
            </TitleArea>
            <TagListArea>
                {tags.map((tag) => {
                    return (
                        <TagList>{tag}</TagList>
                    );
                })}
            </TagListArea>
            <PrevButton leftButton={button}>
                <ButtonLabel onClick={handleClickLeft}>
                    <Icon viewBox="0 0 24 24">
                        <path d="M 10 6 L 8.59 7.41 L 13.17 12 l -4.58 4.59 L 10 18 l 6 -6 Z" />
                    </Icon>
                </ButtonLabel>
            </PrevButton>
            <NextButton>
                <ButtonLabel onClick={handleClickRight}>
                    <Icon viewBox="0 0 24 24">
                        <path d="M 10 6 L 8.59 7.41 L 13.17 12 l -4.58 4.59 L 10 18 l 6 -6 Z" />
                    </Icon>
                </ButtonLabel>
            </NextButton>
            <ListWrap>
                <ContentsWrap translate={translate}>
                    <PlayListCard />
                    <PlayListCard />
                    <PlayListCard />
                    <PlayListCard />
                    <PlayListCard />
                    <PlayListCard />
                    <PlayListCard />
                    <PlayListCard />
                    <PlayListCard />
                </ContentsWrap>
            </ListWrap>
        </div>
    )
}

export default PlayListPage;


// styled-components

const TitleArea = styled.section`
    width: 100%;
    height: 318px;
    padding-left: 64px;
    padding-right: 64px;
    margin: auto;
    background-image: url("https://insighttimer.com/static/media/flyingWindows.513ac78b.png");
    background-size: auto 402px;
    background-repeat: no-repeat;
    background-position: 100% -85px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
`;

const TitleText = styled.h2`
    color: #181818;
    font-size: 54px;
    margin-top: 130px;
    height: 60px;
    line-height: 60px;
    letter-spacing: -0.4px;
    font-family: ProximaNovaBold;
    font-weight: inherit;
`;

const TitleDescription = styled.p`
    width: 100%;
    height: 64px;
    color: rgba(25, 25, 25, 0.7);
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.5px;
    margin-top: 1rem!important;
    margin-bottom: 3rem!important;
`;

const BackgroundImg = styled.div`
    width: 100%;
    height: 100%;    
`;

const TagListArea = styled.div`
    width: 100%;
    height: 64px;
    padding-left: 64px;
    padding-right: 64px;
    margin-bottom: 80px; 
`;

const TagList = styled.li`
    list-style: none;
    margin-right: 10px;
    display: inline-block;
    width: auto!important;
    color: rgba(22, 22, 22, 0.6);
    height: 40px;
    padding: 9px 18px 11px 15px;
    margin-top: 12px;
    line-height: 20px;
    border-radius: 6px;
    letter-spacing: -0.11px;
    background-color: #f3f3f4;
    transition-duration: .3s;
    transition-property: transform, background, color !important;
`;

const ListWrap = styled.section`   
    margin: 0 64px;  
    width: 1650px;      
    height: 548px;    
    overflow:hidden;      
    position: relative;      
`;

const ContentsWrap = styled.div`  
    flex-direction: row;
    justify-content: flex-start;
    display: flex;    
    width: 100%;   
    position: absolute;     
    left:0;
    transform: translateX(${props => props.translate}px);    
`;

const PrevButton = styled.button`
    width: 50px;
    height: 50px;    
    //position: fixed;
    position: absolute; 
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px -2px;
    background-color: #FFFFFF;
    justify-content: center;
    align-content: center;
    top: 56.5%;
    left: 35px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    z-index: 10;
    transform: rotate(180deg);    
    visibility: ${props => props.leftButton};    
`;

const NextButton = styled.button`    
    width: 50px;
    height: 50px;    
    //position: fixed;
    position: absolute; 
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px -2px;
    background-color: #FFFFFF;
    display: flex;    
    justify-content: center;
    align-content: center;
    top: 56.5%;
    right: 55px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    z-index: 100;
`;

const ButtonLabel = styled.span``;

const Icon = styled.svg`
    height: 24px;
    width: 24px;
    color: #1b1b1b;   
`;

