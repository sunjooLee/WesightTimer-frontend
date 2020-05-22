import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PlayListCard = () => {

    const [staffPick, setStaffPick] = useState([]);

    useEffect(() => {
        fetch(`http://10.58.2.238:8005/content/playlistmain`)
            .then((response) => response.json())
            .then((response) => {
                // console.log("response", response.staff_pick)
                setStaffPick(response.staff_pick);
            })

    }, [])

    return (
        staffPick.map((item) => {
            return (
                <CardContent>
                    <ImgBox>
                        <FeaturedLabel src="data:image/png;base64,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" alt="featuredImg" />
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

export default PlayListCard;

// styled-components
const CardContent = styled.div`
    width: 374.75px;
    display: inline-block;
    padding-top: .5rem!important;
    margin-right: ${props => props.a ? "0" : "50px"};   
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

