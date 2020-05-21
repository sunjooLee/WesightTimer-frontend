import React from 'react';
import styled from 'styled-components';

const cardDatas = [
    {
        title: "Sleep",
        description: "Improve your",
        imageURL: "https://insighttimer.com/static/media/sleep.ba804918.jpg",
    },
    {
        title: "Anxiety",
        description: "Coping with",
        imageURL:
            "https://insighttimer.com/static/media/anxiety-mountain.9ebb5c46.jpg",
    },
    {
        title: "Stress",
        description: "Managing",
        imageURL: "https://insighttimer.com/static/media/stress-ocean.5a1a74dd.jpg",
    },
    {
        title: "Timer",
        description: "Meditation with",
        imageURL: "https://insighttimer.com/static/media/timer-menu.0e9b1fee.jpg",
    },
    {
        title: "Music",
        description: "Unwind with",
        imageURL: "https://insighttimer.com/static/media/music-menu.d157403e.jpg",
    },
    {
        title: "Parents",
        description: "Meditation for",
        imageURL: "https://insighttimer.com/static/media/kids-menu.34b99efc.jpg",
    },
];

const NavHover = (props) => {

    const hovered = props.isHovered;
    const onMouseLeave = props.onMouseLeave;

    return (
        <>
            <ViewArea isHovered={hovered}>
                <HoverContainer onMouseLeave={() => onMouseLeave(false)}>
                    <TextContainer>
                        <Title>
                            45,000
                    <TitleImg />
                            guided meditations
                </Title>
                        <Description>
                            We believe everyone deserves access to a free daily meditation practice. Which is why we publish the world's largest collection of free guided meditations, with over 45,000 titles.
                </Description>
                        <SeeAll>
                            See all
                    <Strong>
                                &nbsp; 200 Topics
                    </Strong>
                        </SeeAll>
                    </TextContainer>
                    <ImgContainer>
                        <Playlists>
                            <PlaylistsImg src="https://insighttimer.com/static/media/playlists-menu.63bcbf99.png" />
                            <PlaylistsText>
                                <ImgText>Intoducing</ImgText>
                                <Text>Playlists</Text>
                            </PlaylistsText>
                        </Playlists>
                        <Cardlists>
                            {cardDatas.map(data => {
                                return (
                                    <Card url={data.imageURL} >
                                        <CardLabel>
                                            <CardSubTitle>{data.description}</CardSubTitle>
                                            <CardTitle>{data.title}</CardTitle>
                                        </CardLabel>
                                    </Card>
                                );
                            }
                            )}
                        </Cardlists>
                    </ImgContainer>
                </HoverContainer >
            </ViewArea>
        </>
    )
}

const ViewArea = styled.div`        
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.87);
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100; 
    position:fixed;    
    top: 96px;
    left: 0;
    visibility: ${props => props.isHovered ? "visible" : "hidden"};
`;

const HoverContainer = styled.section`
    width: 1570px;
    height: 557px;
    padding: 30px 70px 80px 80px;    
    position: absolute;
    top: -20px;
    left: 0;  
    margin-left: 100px;
    z-index: 500;
    display: flex;   
    /* background-color: oldlace;      */
    background-color: #fff;
    border-radius: 10px;
    //display: ${props => props.isHovered ? "block" : "none"};
`;

const TextContainer = styled.div`
    width: 500px;   
    color: #181818;
    display: block;   
`;

const Title = styled.h3`
    width: 530px;    
    font-family: ProximaNovaBold;
    font-size: 42px;    
    line-height: 1.2;
    margin-right: 20px;
    padding-right: 20px;
`;

const TitleImg = styled.svg``;

const Description = styled.p`
    width: 510px;
    height: 120px;
    font-size: 20px;   
    margin: 14px 40px 24px 0;
    padding-right: 48px;
    opacity: 0.75;
    line-height: 1.5;
`;

const SeeAll = styled.a`
    color: #191919;
    font-size: 16px;   
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,.25);
    display: inline-block;
    cursor: pointer;

    &:hover {
        border-bottom: 1px solid #181818;
    }
`;

const Strong = styled.p`
    font-family: ProximaNovaBold;
    display: inline-block;
`;

const ImgContainer = styled.div`
    width: 890px;
    height: 397px;
    //padding: 12px;
    display: flex;
`;

const Playlists = styled.div`
    width: 241px;
    height: 404px;
    border: solid 1px #e8e8e8;
    border-radius: 7px;
    //padding: 6px 8px;
    position: relative;
    margin: 12px;
    &:hover {
       transform: translateY(-6px);
       transition: transform 0.4s ease-in-out;
       box-shadow: 0 12px 20px -2px rgba(0, 0, 0, 0.15);
    }    
`;

const PlaylistsImg = styled.img`
    width: 238px;
    height: 219px;    
`;

const PlaylistsText = styled.div`
    width: 132px;
    height: 187.5px;
    padding: 40px 0 0 20px;     
`;

const ImgText = styled.div`
    width: 112px;
    height: 28px;
    font-size: 28px;
    color: #181818;
    font-family: JennaSue;
    margin-bottom: 8px;
    display: block;
`;

const Text = styled.div`
    width: 112px;
    height: 32px;
    font-size: 32px;
    color: #181818;
    font-family: ProximaNovaBold;  
    display: block;
`;

const Cardlists = styled.div`
    width: 800px;
    height: 421px;
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    width: 182px;
    height: 190px;    
    border-radius: 7px;
    margin: 12px;    
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.url});
    background-position: center;    
    background-size: cover; 

    &:hover {
       transform: translateY(-6px);
       transition: transform 0.4s ease-in-out;
       box-shadow: 0 12px 20px -2px rgba(0, 0, 0, 0.15);
    }
`;

const CardLabel = styled.div`
    display: inline-block;
    text-align: center;
    align-items: center;
`;

const CardSubTitle = styled.div`
    font-size: 28px;
    font-family: JennaSue;
    color: #FFFFFF;
    margin-bottom: 8px;
`;

const CardTitle = styled.div`
    font-size: 32px;
    font-family: ProximaNovaBold;
    color: #FFFFFF;
`;

export default NavHover;