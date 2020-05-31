import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PlayWrapCard = () => {

    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        fetch(`http://13.124.151.251:8000/content/playlistmain`)
            .then((response) => response.json())
            .then((response) => {
                setPlaylist(response.play_list);
            })

    }, [])

    return (
        playlist.map((item) => {
            return (
                <CardContent>
                    <ImgBox>
                        <LeftImg src={item.image_url[0]} />
                        <RightImg>
                            <TopImg src={item.image_url[1]} />
                            <BottomImg src={item.image_url[2]} />
                        </RightImg>
                    </ImgBox>
                    <TextContent>
                        <AvatarImgLink href="/insighttimer">
                            <AvatarImg src="https://users.insighttimer.com/m7K4F2Q5S7X3a1j6U8a6X8B0a1e7R1g8E3z4b5k1C8L0Q8B3J6J0k8X5x2J1V6n2u9j3P1u6W0c3L2v3c8f3W7z6H7t4E1t6t0B0%2Fpictures%2Fsquare_small.jpeg?alt=media" alt="AvatarImg" />
                        </AvatarImgLink>
                        <TitleArea>
                            <TitleLink href="/meditation-playlists/khiMbkvXGuXQVtMTJjCq">
                                <Title>{item.title}</Title>
                            </TitleLink>
                            <AvatarImgLink href="/insighttimer">
                                <TitleDes>{item.teacher}</TitleDes>
                            </AvatarImgLink>
                        </TitleArea>
                    </TextContent>
                    <DescriptionArea>
                        <Description>
                            {item.discribe}
                        </Description>
                    </DescriptionArea>
                </CardContent>
            )
        })
    )
}

export default PlayWrapCard;

// styled-components
const CardContent = styled.div`
    width: 374.75px;
    display: inline-block;
    padding-top: .5rem!important;
    margin-right: ${props => props.a ? "0" : "50px"};  
    margin-bottom: 50px; 
`;

const ImgBox = styled.div`
background-color: #f4f4f4!important;
flex-direction: column;
width: 374.75px;
height: 299.8px;
display: inherit;
/* box-sizing: inherit; */
overflow: hidden!important;
position: relative;
border-radius: 10px;
cursor: pointer;
    &:hover {
       transform: translateY(-6px);
       transition: transform 0.4s ease-in-out;
    }
`;

const FeaturedLabel = styled.img`
position: absolute;
top: 16px;
left: 0;
width: auto;
height: 41px;
z-index: 20;
width: 89px;
height: 41px;
`;

const LeftImg = styled.div`
width: 222.45px;
height: 299.8px;
position: absolute;
box-sizing: inherit;
flex: 3;
background-image: url(${props => `${props.src}`}); 
margin-right: 0.25rem;
background-size: 135%;
background-position: top center;
top: 0!important;
right: 0!important;
bottom: 0!important;
left: 0!important;
`;

const RightImg = styled.div`
width: 148.3px;
height: 299.8px;
flex: 2;
display: flex;
flex-direction: column;
display: block;
position: absolute;
right: 0;
`;

const TopImg = styled.div`
width: 148.3px;
height: 147.91px;
background-image: url(${props => `${props.src}`});
flex: 1;
margin-bottom: 0.25rem;
background-size: cover;
background-position: center;
`;

const BottomImg = styled.div`
width: 148.3px;
height: 147.91px;
background-image: url(${props => `${props.src}`}); 
flex: 1;
background-size: cover;
background-position: bottom;
`;

const TextContent = styled.div`
width: 374.75px;
height: 44px;
display: flex;
margin-top: 24px;
margin-bottom: 16px;
`;

const AvatarImgLink = styled.a``;

const AvatarImg = styled.img`
width: 44px;
height: 44px;
cursor: pointer;
`;

const TitleArea = styled.div`
padding-left: 16px;
`;

const TitleLink = styled.a``;

const Title = styled.h4`
display: block;
margin-bottom: 4px;
color: #181818;
font-family: ProximaNovaSemiBold;
font-size: 18px;
cursor: pointer;
`;

const TitleDes = styled.p`
display: block;
color: #181818;
font-family: ProximaNovaRegular;
font-size: 14px;
cursor: pointer;
`;

const DescriptionArea = styled.div``;

const Description = styled.span`
width: 370.78px;
font-size: 15px;
color: #1A1A1A;
font-family: ProximaNovaRegular;
letter-spacing: .025em;
`;