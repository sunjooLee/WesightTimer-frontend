import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const ListedPlayer = () => {

    return (
        <ListedPlayerDiv>
            <LeftCardDiv>
                <Card>
                    <ImgBox>
                        <ImgLeft/>
                        <ImgRight>
                            <Img position="center"/>
                            <Img position="bottom" marginBottomNone="true"/>
                        </ImgRight>
                    </ImgBox>
                    <BottomStyleCont>
                        <PlayBtn><Svg width="22" height="26" viewBox="0 0 22 26" class="jss418 relative"><path fill="#191919" fill-rule="evenodd" d="M0 2.065v21.577c0 1.105.895 2 2 2 .375 0 .742-.105 1.06-.304L20.322 14.55c.936-.586 1.221-1.82.636-2.756-.161-.258-.379-.476-.636-.636L3.06.368C2.123-.216.89.069.304 1.006.105 1.323 0 1.69 0 2.065z"></path></Svg></PlayBtn>
                    </BottomStyleCont>
                    <ContentWrapper>
                        <TitleDiv>Anxiety Relief</TitleDiv>
                        <LogoDiv>
                            <Logo src="https://users.insighttimer.com/m7K4F2Q5S7X3a1j6U8a6X8B0a1e7R1g8E3z4b5k1C8L0Q8B3J6J0k8X5x2J1V6n2u9j3P1u6W0c3L2v3c8f3W7z6H7t4E1t6t0B0%2Fpictures%2Fsquare_small.jpeg?alt=media" alt="logo"/>
                            <AtagMsg>Insight Timer</AtagMsg>
                        </LogoDiv>
                        <TextCont>
                            <Ptag>In our fast paced world, <Strong>#anxiety</Strong> is at an all time high. These practices will help you #befrienddanxiety as you slow things down, regain control of your mind and find <Strong>#peace</Strong> in each moment.</Ptag>
                        </TextCont>
                        <FollowBtn>Follow</FollowBtn>
                        <FollowersDesc><Span>1K</Span> followers</FollowersDesc>
                    </ContentWrapper>
                </Card>
            </LeftCardDiv>

            <PlayListWrapper>

            <Playlist>
                <PrImg src="https://libraryitems.insighttimer.com/k8f0q2v0t5b9r7m2f4r7x1d3h1k5w5v2c8j9z4s3%2Fpictures%2Fsquare_medium.jpeg?alt=media" alt="playlist image"/>
                <TitleBox>
                <DivPrTitle>Working With Anxiety</DivPrTitle>
                <Teacher>Manoj Dias</Teacher>
                </TitleBox>
                <SpanPr>14 min</SpanPr>
                <SendBtn><ImgBtn src="https://insighttimer.com/static/media/share-icon.c19cdc22.svg"/></SendBtn>
            </Playlist>

            <Playlist>
                <PrImg src="https://libraryitems.insighttimer.com/k8f0q2v0t5b9r7m2f4r7x1d3h1k5w5v2c8j9z4s3%2Fpictures%2Fsquare_medium.jpeg?alt=media" alt="playlist image"/>
                <TitleBox>
                <DivPrTitle>Working With Anxiety</DivPrTitle>
                <Teacher>Manoj Dias</Teacher>
                </TitleBox>
                <SpanPr>14 min</SpanPr>
                <SendBtn><ImgBtn src="https://insighttimer.com/static/media/share-icon.c19cdc22.svg"/></SendBtn>
            </Playlist>

            <Playlist>
                <PrImg src="https://libraryitems.insighttimer.com/k8f0q2v0t5b9r7m2f4r7x1d3h1k5w5v2c8j9z4s3%2Fpictures%2Fsquare_medium.jpeg?alt=media" alt="playlist image"/>
                <TitleBox>
                <DivPrTitle>Working With Anxiety</DivPrTitle>
                <Teacher>Manoj Dias</Teacher>
                </TitleBox>
                <SpanPr>14 min</SpanPr>
                <SendBtn><ImgBtn src="https://insighttimer.com/static/media/share-icon.c19cdc22.svg"/></SendBtn>
            </Playlist>

            <Playlist>
                <PrImg src="https://libraryitems.insighttimer.com/k8f0q2v0t5b9r7m2f4r7x1d3h1k5w5v2c8j9z4s3%2Fpictures%2Fsquare_medium.jpeg?alt=media" alt="playlist image"/>
                <TitleBox>
                <DivPrTitle>Working With Anxiety</DivPrTitle>
                <Teacher>Manoj Dias</Teacher>
                </TitleBox>
                <SpanPr>14 min</SpanPr>
                <SendBtn><ImgBtn src="https://insighttimer.com/static/media/share-icon.c19cdc22.svg"/></SendBtn>
            </Playlist>

            <Playlist>
                <PrImg src="https://libraryitems.insighttimer.com/k8f0q2v0t5b9r7m2f4r7x1d3h1k5w5v2c8j9z4s3%2Fpictures%2Fsquare_medium.jpeg?alt=media" alt="playlist image"/>
                <TitleBox>
                <DivPrTitle>Working With Anxiety</DivPrTitle>
                <Teacher>Manoj Dias</Teacher>
                </TitleBox>
                <SpanPr>14 min</SpanPr>
                <SendBtn><ImgBtn src="https://insighttimer.com/static/media/share-icon.c19cdc22.svg"/></SendBtn>
            </Playlist>

            </PlayListWrapper>

        </ListedPlayerDiv>
    )

};

const ListedPlayerDiv = styled.div`
    padding: 0px 40px;
    width: 100%;
    display: flex;
    margin: auto;
    max-width: 1800px;
    padding-left: 64px;
    padding-right: 64px;
    padding-top: 64px;
`;

const LeftCardDiv = styled.div`
   
    padding-right: 48px;
    flex-grow: 0;
    flex-basis: 33.33333%;
    border-radius: 10px;
`;

const Card = styled.div`
    padding: 32px;
    height: inherit;
    border: solid 1px #f1f1f1;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    background: #fff;
`;

const ImgBox = styled.div`
    width: 413.33px;
    border-radius: 6px;
    background: #f4f4f4!important;
    display:flex;
    overflow:hidden;
    height:280.8px;
    min-width: 64px;
    box-sizing: border-box;
    flex-direction:row;
`;

const ImgLeft = styled.div`
   background-image: url("https://playlists.insighttimer.com/BlNnKkR6cSGO1f9ciyqw%2Fpictures%2Fmontage_medium.jpeg?alt=media");
   flex:3;
   margin-right: 0.25rem;
   background-size: 135%;
   background-position: top center;
`;

const ImgRight = styled.div`
    flex:2;
    display:flex;
    flex-direction:column;
`;

const Img = styled.div`
    background-image: url("https://playlists.insighttimer.com/BlNnKkR6cSGO1f9ciyqw%2Fpictures%2Fmontage_medium.jpeg?alt=media");
    flex:1;
    margin-bottom: ${props => props.marginBottomNone ? 0 : "0.25rem" };
    background-size: cover;
    background-position: ${props => props.position};
`;

const BottomStyleCont = styled.div`
    width: 413.33px;
    height: 60px;
    margin: 0;
    position: relative;
`;

const PlayBtn = styled.button`
    position: absolute;
    right: 1px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: 0 3px 20px -8px rgba(0,0,0,0.3);
    background: #fff;
    border: 0;
    left: 42%;
    top: -30px;
    display:flex;
    justify-content: center;
`;

const Svg = styled.svg`
    position: absolute;
    left: 42%;
    top: 27px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

const TitleDiv = styled.div`
    height: 40px;
    width: inherit;
    font-size: 28px;
    text-align: center;
    font-family: ProximaNovaBold;
    color: #181818;
`;

const LogoDiv = styled.div`
    margin-top: 4px;
    margin-bottom: 20px;
    height: 25px;
    width: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    width: 20px;
    height: 20px;
`;

const AtagMsg = styled.a`
    font-size: .875rem;
    opacity: .5;
    margin-left: .5rem;
    font-family: ProximaNovaRegular;
`;

const TextCont = styled.div`
    text-align: center;
    color: rgba(22, 22, 22, 0.6);
    font-size: 15px;
    font-family: ProximaNovaRegular;
`;

const Ptag = styled.div`
    padding: 0 32px;
    margin-bottom: 20px;
`;

const FollowBtn = styled.button`

    height: 38px;
    font-size: 15px;
    margin: 0 auto;
    width: 200px;
    background: #efefef;
    padding: 6px 8px;
    border: 0;
    border-style: none;
    border-radius: .25rem;
    font-family: ProximaNovaSemiBold;

`;

const FollowersDesc = styled.p`
    margin-top: 20px;
    font-size: 15px;
    color: #7b7b7b;
    font-family: ProximaNovaRegular;
`;

const Span  = styled.span`
    font-size: 15px;
    color: #2e2e2e;
    font-family: ProximaNovaSemiBold;
`;

const Strong = styled.strong``;

const PlayListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Playlist = styled.div`
    height: 81px;
    padding: 15px 10px 17px 20px;
    display: flex;
    position: relative;
    width: 100%;

    &:after {
    left: 100px;
    right: 0;
    bottom: 0;
    height: 1px;
    content: '';
    opacity: 0.7;
    z-index: 10;
    position: absolute;
    background: rgba(0, 0, 0, 0.87);
    opacity: 0.05;
    }

`;

const PrImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 4px;
    background-color: #f4f4f4;
    max-width: 100%;
`;

const TitleBox = styled.div`
    padding-left: 1.25rem;
`;

const DivPrTitle = styled.div`
    color: #191919;
    font-family: ProximaNovaSemiBold;
    line-height: 1.6;
`;

const Teacher = styled.div`
    color: #181818;
    font-family: ProximaNovaRegular;
    opacity: 0.5;
`;

const SpanPr = styled.span`
    position: absolute;
    right: 38px;
    padding-right: 30px;
    color: #191919;
    font-family: ProximaNovaRegular;
    opacity: 0.4;
    align-self: center;
`;

const SendBtn = styled.button`
    position: absolute;
    right: 10px;
    padding: 12px;
    border: 0;
    border-style: none;
    background: transparent;
    align-self: center;
`;

const ImgBtn = styled.img`
`;





export default ListedPlayer;