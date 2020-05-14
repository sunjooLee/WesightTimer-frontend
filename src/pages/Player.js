import React, {useState, useRef, useEffect} from 'react';
import axios from "axios";
import { pickIndexStyle } from "./PickIndexStyle";
import {withRouter} from 'react-router-dom';
import styled, {keyframes} from 'styled-components';

const Player = (props) => {

    const [isBtnClicked, setBtnClicked] = useState(false);
    const [play5items, setPlay5items] = useState([]);
    const [playlist, setPlaylist] = useState([]);
    //const [audioFile, setaudioFile] = useState('https://libraryaudio.insighttimer.com/k8f0q2v0t5b9r7m2f4r7x1d3h1k5w5v2c8j9z4s3%2Faudio%2Fstandard_quality.mp3?alt=media');
    const [audioFile, setaudioFile] = useState('http://10.58.1.171:8005/content');
    const audio = useRef(new Audio(audioFile));
    const [indexOrder, setindexOrder] = useState((props.match.params.id)-1);
    const playSong = () => {
        
        if(isBtnClicked === false){
            audio.current.play();
        }
        setBtnClicked(true);
        setBtnClicked(!isBtnClicked);
    }

    const pauseSong = (e) => {

        e.preventDefault();
        setBtnClicked(!isBtnClicked);
        if(isBtnClicked === true){
            audio.current.pause();
        }
       
    }

    const goBack = () => {
        props.history.goBack();
    }

    //onClick 되면 배열 위치 바뀌게 하고 transition을 width랑 height에 걸어주기

    const changeMapItem = (id) => {

        console.log("id     :", id);
        setindexOrder(id);

        if(id >= 10 || id<1){
            setindexOrder(1);

        } else {
            const newArr = [playlist[id-1],playlist[id],playlist[id-1],playlist[id],playlist[id+1]];
            setPlay5items(newArr);
        }
       
    }

    //async await
    const fetchPlaylist = async () => {
        const playlistData = await axios(`http://localhost:3000/Data/Playlist.json`);
        const datalist = playlistData.data.playlist.music;
        setPlaylist(datalist);
        let playlistDt;


        if(indexOrder <=3){
            playlistDt = [datalist[datalist.length-2],datalist[datalist.length-1],datalist[indexOrder], datalist[indexOrder+1], datalist[indexOrder+2]];
            setPlay5items(playlistDt);
        } else {
            playlistDt = [datalist[indexOrder-2],datalist[indexOrder-1],datalist[indexOrder], datalist[indexOrder+1], datalist[indexOrder+2]];
            setPlay5items(playlistDt);
        }
        
    };

    //useEffect 호출 
    useEffect(()=> {
        fetchPlaylist();
    }, []);

    return (
            <PlayerWrapper>
                <GridWrapper>
                    <AlbumCont>
                        <TabNav>
                            <CloseBtn onClick={()=>{goBack()}}>
                                <CloseSvg><svg width="12px" height="12px" viewBox="0 0 12 12" class="w-3 h-3"><title>Group 45</title><desc>Created with Sketch.</desc><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g id="Playlists---Player-(Logged-in)" transform="translate(-54.000000, -50.000000)" stroke="#FFFFFF" stroke-width="2"><g id="Group-46" transform="translate(42.000000, 39.000000)"><g id="Group-45" transform="translate(13.000000, 12.000000)"><line x1="8.52651283e-13" y1="2.36847579e-14" x2="9.42809042" y2="9.42809042" id="Path-3"></line><line x1="8.52651283e-13" y1="2.36847579e-14" x2="9.42809042" y2="9.42809042" id="Path-3" transform="translate(4.714045, 4.714045) scale(-1, 1) translate(-4.714045, -4.714045) "></line></g></g></g></g></svg></CloseSvg>
                            </CloseBtn>
                        </TabNav>

                        <PlayCoverWrapper>
                        <AlbumCoversWrapper>
                        {
                            play5items.length && play5items.map((item, idx, arr)=> {

                                    let zPositionNum = pickIndexStyle(idx).zPositionNum;
                                    let leftVal = pickIndexStyle(idx).leftVal;
                                    let rightVal = pickIndexStyle(idx).rightVal;

                                    return (

                                        <CapitalImg
                                            ZPositionId={zPositionNum}
                                            leftVal={leftVal}
                                            rightVal={rightVal}
                                            index={idx}
                                            array={arr}
                                            onClick={()=>{changeMapItem(item.id)}}
                                        >
                                        <DescBoxGradient>
                                            <DescBox>
                                                {idx === 2 && <H3>{item.title}</H3>}
                                                {idx === 2 && <TeacherBtn><Span>{item.teacher}</Span></TeacherBtn>}
                                            </DescBox>
                                        </DescBoxGradient>
                                        </CapitalImg>
                                    );
                            })
                        }
                    </AlbumCoversWrapper>
                    </PlayCoverWrapper>
                    <TotalPlayTime>
                        07:52:32
                    </TotalPlayTime>
                    </AlbumCont>
                    </GridWrapper>
                    <PlayerControl>
                        <ControlBar>
                            <StageBtn />
                            <StageBar><audio src={audioFile} enckey="241"></audio></StageBar>
                            <Playtime>14:03</Playtime>
                        </ControlBar>
                        <MusicInfoBox>
                            <MusicTitleCont>
                                <MusicTitle>Anxiety Relief</MusicTitle>
                                <MusicTitle isSubTitle ="true">-</MusicTitle>
                                <MusicTitle isSubTitle ="true">Insight Timer</MusicTitle>
                            </MusicTitleCont>
                            <PlayerControlKit>
                                <PlayerControlBtn index="1"><svg width="20" height="20" viewBox="0 0 20 20" class="text-white"><path fill="#FFF" fill-rule="nonzero" d="M10.664 3.55a7.59 7.59 0 1 1 0 15.18 7.592 7.592 0 0 1-7.257-5.363.75.75 0 0 1 1.435-.44 6.092 6.092 0 0 0 11.912-1.788 6.09 6.09 0 0 0-6.09-6.089H4.561l1.27 1.27a.75.75 0 0 1-1.06 1.06L2.22 4.83a.75.75 0 0 1 0-1.06l2.55-2.55a.75.75 0 0 1 1.06 1.06L4.56 3.55h6.103z"></path></svg></PlayerControlBtn>
                                <PlayerControlBtn index="2"><svg width="21" height="24" viewBox="0 0 21 24" class="w-4 sm:w-6"><g fill="#FFF" fill-rule="evenodd" transform="matrix(-1 0 0 1 21 0)"><rect width="4" height="20" x="17" y="1.953" rx="2"></rect><path d="M0 1.763v20.416c0 .553.448 1 1 1 .181 0 .359-.049.514-.142L20 11.953 1.513.904C1.039.621.425.776.142 1.25.049 1.405 0 1.582 0 1.763z"></path></g></svg></PlayerControlBtn>
                                <PlayerControlBtn index="3" onClick= {!isBtnClicked ? () => playSong() : (e) => pauseSong(e)}>
                                    {!isBtnClicked && <Svg width="13px" height="14px" viewBox="0 0 13 14" class=" jss989 jss992 relative w-5 h-5 md:w-6 md:h-6"><title>Combined Shape</title><desc>Created with Sketch.</desc><g id="UI-Designs-2019" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Music---Featured-coure" transform="translate(-316.000000, -413.000000)" fill="#fff"><g id="Group-14" transform="translate(17.000000, 252.000000)"><g id="Group-6"><g id="Group-6-Copy-2"><g id="Group-6-Copy-12"><g id="Group-2" transform="translate(15.000000, 161.000000)"><g id="Group-19-Copy" transform="translate(284.000000, 0.000000)"><path d="M0.428571429,1.37789015 L0.428571429,12.6221099 C0.428571429,13.1743946 0.876286679,13.6221099 1.42857143,13.6221099 C1.59216296,13.6221099 1.7532564,13.5819754 1.89772665,13.5052256 L12.4805217,7.88311572 C12.968253,7.62400844 13.1535894,7.01857612 12.8944822,6.53084477 C12.80088,6.35465244 12.656714,6.21048646 12.4805217,6.11688428 L1.89772665,0.494774428 C1.40999531,0.235667151 0.804562986,0.421003577 0.545455709,0.908734922 C0.468705885,1.05320518 0.428571429,1.21429861 0.428571429,1.37789015 Z" id="Combined-Shape"></path></g></g></g></g></g></g></g></g></Svg>}
                                    {isBtnClicked && <Svg width="20" height="20" viewBox="0 0 20 20" class=" jss994 w-5 h-5 md:w-6 md:h-6"><path fill="#fff" fill-rule="nonzero" d="M3.5 3.5a2 2 0 1 1 4 0v12.705a2 2 0 1 1-4 0V3.5zm9.21 0a2 2 0 1 1 4 0v12.705a2 2 0 1 1-4 0V3.5z"></path></Svg>}
                                </PlayerControlBtn>
                                <PlayerControlBtn index="4"><svg width="21" height="24" viewBox="0 0 21 24" class="w-4 sm:w-6"><g fill="#FFF" fill-rule="evenodd"><rect width="4" height="20" x="17" y="1.953" rx="2"></rect><path d="M0 1.763v20.416c0 .553.448 1 1 1 .181 0 .359-.049.514-.142L20 11.953 1.513.904C1.039.621.425.776.142 1.25.049 1.405 0 1.582 0 1.763z"></path></g></svg></PlayerControlBtn>
                                <PlayerControlBtn index="5"><svg width="20" height="20" viewBox="0 0 20 20" class="text-white"><path fill="#FFF" fill-rule="nonzero" d="M9.59 3.55a7.59 7.59 0 1 0 0 15.18c3.358 0 6.29-2.201 7.258-5.363a.75.75 0 0 0-1.435-.44A6.092 6.092 0 0 1 3.5 11.14 6.09 6.09 0 0 1 9.59 5.05h6.104l-1.27 1.27a.75.75 0 0 0 1.06 1.06l2.55-2.55a.75.75 0 0 0 0-1.06l-2.55-2.55a.75.75 0 0 0-1.06 1.06l1.27 1.27H9.59z"></path></svg></PlayerControlBtn>
                            </PlayerControlKit>
                            <PlaylistControlKit>
                                <BtnWrapper>
                                    <PlaylistControlBtn><svg width="36" height="24" viewBox="0 0 36 24"><g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" opacity="0.298"><path d="M0 14.545L0 20 11.294 20" transform="translate(2 2)"></path><g><path d="M0 0L0 5.455 11.294 5.455" transform="translate(2 2) rotate(180 16 2.727)"></path><path d="M20.706 0L20.706 5.455 32 5.455" transform="translate(2 2) rotate(180 16 2.727) matrix(-1 0 0 1 52.706 0)"></path></g><path d="M20.706 14.545L20.706 20 32 20" transform="translate(2 2) matrix(-1 0 0 1 52.706 0)"></path></g></svg></PlaylistControlBtn>
                                    <PlaylistControlBtn><svg width="27" height="24" viewBox="0 0 27 24" class="opacity-25 sm:opacity-100 h-4 sm:h-6"><g fill="none" fill-rule="evenodd"><g stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><path d="M0 11.191L7.443 11.191M0 1.562L7.443 1.562M0 20.82L20.555 20.82" transform="translate(2 1) translate(0 .692)"></path></g><path fill="#FFF" d="M14.4 1.137v10.618c0 .663.537 1.2 1.2 1.2.252 0 .498-.08.703-.227l7.35-5.31c.538-.387.659-1.137.27-1.674-.074-.104-.165-.196-.27-.27l-7.35-5.31c-.538-.388-1.288-.267-1.676.27-.148.205-.227.45-.227.703z" transform="translate(2 1)"></path></g></svg></PlaylistControlBtn>
                                </BtnWrapper>
                            </PlaylistControlKit>
                            <BluredBg />
                        </MusicInfoBox>
                    </PlayerControl>
            </PlayerWrapper>
    )
}

const PlayerWrapper = styled.div`
    padding: 0 3rem;
    height: 100vh;
    width: 100vw;
    background: rgb(136, 136, 136, 0.4);
`;

const GridWrapper = styled.div`
    width: 100%;
    flex-basis: 62.5%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    height: 780px;
`;

const AlbumCont = styled.div`
    padding: 0;
    flex-basis: 62.5%;
    overflow: hidden;
    flex: 1;
    width: 100%;
`;

const TabNav = styled.div`
    padding-top: 2rem;
    left: 0;
    top: 0;
    right: 0;
    height: 72px;
`;

const CloseBtn = styled.button`
    width:34px;
    height:34px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    padding: 0 auto;
    display: flex;
    justify-content: center;
    border: 0;
`;

const CloseSvg = styled.svg`
    width: .75rem;
    height: .75rem;
`;

const AlbumCoversWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    height: 584px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
`;

const CapitalImg = styled.div`
    margin: 2rem 0;
    position: absolute;
    left: ${props => props.leftVal};
    right: ${props=>props.rightVal};
    
    ${props => {
    if(props.ZPositionId === "3") {
        return `width: 210px;
                height: 210px;
                z-index: 1;
        `;
    } else if(props.ZPositionId === "2"){
        return `width: 280px;
                height: 280px;
                z-index: 2;
        `;
    } else {
        return `width: 420px;
                height: 420px;
                z-index: 3;
        `;
    }
    }}
    transition-property: transform;
    transition-duration: 0ms;
    background-image: ${props => `url(${props.array[props.index].imgUrl})`};
    background-size: cover;
    background-position: 50%;
    border-radius: 20px;
    overflow: hidden;

    &:hover {

    transform: ${props => props.ZPositionId === "1" ? 'translateY(-20px)' : ''};
    transition: transform 0.35s ease-in-out;
    box-shadow: ${props => props.ZPositionId === "1" ? `0 10px 40px -10px rgba(24,24,24,0.5);` : ''};
    }
`;

const DescBoxGradient = styled.div`
    position:absolute;
    bottom:0;
    height: 30%;
    width: inherit;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3) 56%);

`;

const DescBox = styled.div`
    position: absolute;
    bottom: 0;
    left:0;
    right: 0;
    padding: 1.25rem;
`;

const H3 = styled.h3`
    font-size: 1.125rem;
    color: #fff;
    font-family: ProximaNovaSemiBold;
`;

const TeacherBtn = styled.button`
    border: 0;
    border-style: none;
    transition: all 0.2s ease 0s;
    background: transparent;
    color: #fff;
    opacity: 0.4;
    padding: 0;
    margin-top: 4px;
`;

const Span = styled.span`
    width: 100%;
    display:inherit;
    align-items: inherit;
    justify-content: inherit;
`;

const PlayerControlBtn = styled.button`
    width: 96px;
    height: 64px;
    background: transparent;
    border:0;
    border-style: none;
    padding: ${props => {
        if((props.index === "1") || (props.index=== "5")){
            return `12px`;
        }else{
            return `0`;
        }
    }   
    };
`;

const PlayCoverWrapper = styled.div`
`;

const Svg = styled.svg`
    width: 21.57px; 
    height: 22.7px;
    fill: #fff;
`;

const TotalPlayTime = styled.div`
    margin-top: 39px;
    flex: 1;
    width: 100%;
    height: 57px;
    //flex-basis: 37.5%;
    padding-top: 0;
    top: -4px;
    font-size: 2.5rem;
    color: #fff;
    text-align: center;
    margin-bottom: -4rem;
    font-family: ProximaNovaLight;
`;

const PlayerControl = styled.div`
   width: 100%;
   height: 130px;
   flex-basis: ${100-62.5}%;
`;

const ControlBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    position: relative;
`;

const StageBar = styled.div`
    height: 4px;
    background: #fff;
    width: inherit;
    opacity: 0.3;
    margin: 6px 0px;
    position: relative;
`;

const StageBtn = styled.span`
        opacity: 1;
        width: 15px;
        height: 15px;
        top: 7px;
        left: -15px;
        right: -15px;
        bottom: -15px;
        content: "";
        position: absolute;
        border-radius: 50%;
        background-color: #fff;
`;

const Playtime = styled.div`
    color: #fff;
    font-family: ProximaNovaRegular;
    margin-left: 30px;
    letter-spacing: 0.01071em;
`;

const MusicInfoBox = styled.div`
    width: inherit;
    height: 68px;
    display: flex;
    align-items: center;
`;

const MusicTitleCont = styled.div`
    flex: 1;
    flex-basis: 33.33333%;
    font-family: ProximaNovaSemiBold;
    color: #fff;
    display: flex;
`;

const MusicTitle = styled.span`
    padding-left: ${props => props.isSubTitle ? "8px" : 0};
    opacity: ${props => props.isSubTitle ? 0.5 : 1};
`;

const PlayerControlKit = styled.div`
    flex-basis: 33.33333%;
    flex: 1;
    height: 64px;
    display: flex;
`;

const PlaylistControlKit = styled.div`
    flex: 1;
    flex-basis: 33.33333%;
    height: 64px;
    display: flex;
`;

const BtnWrapper = styled.div`
    margin-left: auto;
`;

const PlaylistControlBtn = styled.button`
    margin-left: auto;
    width: 64px;
    height: 64px;
    border: 0;
    border-style: none;
    background: transparent;
`;

const BluredBg = styled.div`
    background-size: cover;
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
    z-index: -4444;
    filter: blur(35px);
    transform: scale(1.3);
    background-image: url(https://libraryitems.insighttimer.com/k8f0q2v0t5b9r7m2f4r7x1d3h1k5w5v2c8j9z4s3%2Fpictures%2Frectangle_xlarge.jpeg?alt=media);
    background-position: center center;
`;



export default withRouter(Player);
