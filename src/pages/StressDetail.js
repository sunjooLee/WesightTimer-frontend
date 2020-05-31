import React , {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Nav from '../components/Nav';
import AppImg from "../images/course_img.png"
import ReviewCard from './Review';

const StressDetail = () => {

    const [translateVal, setTranslateVal] = useState(0);
    const [currentNum, setcurrentNum] = useState(0);
    const [musicInfo, setMusicInfo] = useState({});
    const [categoryInfo, setCategoryInfo] = useState([]);
    const [teacherDetail, setTeacherDetail] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioFile, setaudioFile] = useState(`http://10.58.2.238:8005/content/playcontent/1`);
    const audio = useRef(new Audio(audioFile));
    const [playBtnPosition, setPlayBtnPosition] = useState(0);
    const [playingSpeed, setPlayingSpeed] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [runningTime, setRunnigTime] = useState("");

    const moveLeft = () => {

        if(currentNum > 0) {
            setcurrentNum(currentNum-1);
            setTranslateVal(492);   
        }
            
    }

    const moveRight = () => {
        if(currentNum >= reviews.length){
            setcurrentNum(0);
        }
        setcurrentNum(currentNum+1);
        setTranslateVal(-492);     
    }

    const toggleSong = (isPlaying) => {
        if(!isPlaying){
            setIsPlaying(!isPlaying);
            audio.current.play();
        } else {
            setIsPlaying(!isPlaying);
            audio.current.pause();
        }
    }

    //async await
  
    useEffect(()=>{

        fetch("http://13.124.151.251:8000/content/detail?content_id=1")
        .then((res)=> res.json())
        .then((res) => {
            setMusicInfo(res.musicInfo);
            setCategoryInfo(res.categoryInfo);

            let time = res.musicInfo.playtime.split(":");
            let timeFixer = 0;

            if(time[1].startsWith("0")){
                let slicedNum = time[1].slice(1);
                timeFixer = (Number(time[0]*60)+Number(slicedNum));
                setRunnigTime(`${time[0]}:${time[1]}`);
                setCurrentTime(timeFixer);
    
            } else {
                timeFixer = (Number((time[0]*60)+Number(time[1])));
                setRunnigTime(`${time[0]}:${time[1]}`);
                setCurrentTime(timeFixer);
            }
    
        });

        fetch("http://13.124.151.251:8000/user/teacher?teacher_id=1")
        .then((res)=> res.json())
        .then((res) => {
            setTeacherDetail(res.teacherDetail);
        });

        fetch("http://13.124.151.251:8000/content/stressreview?content_id=1")
        .then((res)=> res.json())
        .then((res) => {
            setReviews(res.reviews);
        });
    
    },[]);

    useEffect(() => {

        let timer;

        if(isPlaying) {

        timer = setInterval(() => {

            if(currentTime > 0) {

                setCurrentTime(currentTime => currentTime-=1);
                setPlayingSpeed(playingSpeed => playingSpeed + 1);
                setPlayBtnPosition(playBtnPosition => playBtnPosition +1);

                let min = parseInt(currentTime/60);
                let sec = (currentTime%60);

                if(min > 0){
                    if (sec >0 && sec<10) {
                        setRunnigTime(`${min}:0${sec}`);
                    } else {
                        if(sec <= 0){
                            sec=60;
                            setRunnigTime(`${min}:${sec}`);
                        }
                        setRunnigTime(`${min}:${sec}`);
                    }
                }
            }   
        }, 1000); 
        }
        return () => clearInterval(timer);
    }, [isPlaying, currentTime]);

    console.log(reviews);

    return (
        <div>
            <Nav />
            {musicInfo && 
            <ContentsWrapper>
                <FirstIntroPg>
                <Overlay />
                <PlayerContents>
                    <H2>{runningTime}</H2>
                    <PlayerControlKit>
                                <PlayerControlBtn index="1"><svg width="20" height="20" viewBox="0 0 20 20" class="text-white"><path fill="#FFF" fill-rule="nonzero" d="M10.664 3.55a7.59 7.59 0 1 1 0 15.18 7.592 7.592 0 0 1-7.257-5.363.75.75 0 0 1 1.435-.44 6.092 6.092 0 0 0 11.912-1.788 6.09 6.09 0 0 0-6.09-6.089H4.561l1.27 1.27a.75.75 0 0 1-1.06 1.06L2.22 4.83a.75.75 0 0 1 0-1.06l2.55-2.55a.75.75 0 0 1 1.06 1.06L4.56 3.55h6.103z"></path></svg></PlayerControlBtn>
                                <PlayerControlBtn index="2"><svg width="21" height="24" viewBox="0 0 21 24" class="w-4 sm:w-6"><g fill="#FFF" fill-rule="evenodd" transform="matrix(-1 0 0 1 21 0)"><rect width="4" height="20" x="17" y="1.953" rx="2"></rect><path d="M0 1.763v20.416c0 .553.448 1 1 1 .181 0 .359-.049.514-.142L20 11.953 1.513.904C1.039.621.425.776.142 1.25.049 1.405 0 1.582 0 1.763z"></path></g></svg></PlayerControlBtn>
                                <PlayerControlBtn index="3" onClick={()=>{toggleSong(isPlaying);}}>
                                    {!isPlaying && <Svg width="13px" height="14px" viewBox="0 0 13 14" class=" jss989 jss992 relative w-5 h-5 md:w-6 md:h-6"><title>Combined Shape</title><desc>Created with Sketch.</desc><g id="UI-Designs-2019" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Music---Featured-coure" transform="translate(-316.000000, -413.000000)" fill="#fff"><g id="Group-14" transform="translate(17.000000, 252.000000)"><g id="Group-6"><g id="Group-6-Copy-2"><g id="Group-6-Copy-12"><g id="Group-2" transform="translate(15.000000, 161.000000)"><g id="Group-19-Copy" transform="translate(284.000000, 0.000000)"><path d="M0.428571429,1.37789015 L0.428571429,12.6221099 C0.428571429,13.1743946 0.876286679,13.6221099 1.42857143,13.6221099 C1.59216296,13.6221099 1.7532564,13.5819754 1.89772665,13.5052256 L12.4805217,7.88311572 C12.968253,7.62400844 13.1535894,7.01857612 12.8944822,6.53084477 C12.80088,6.35465244 12.656714,6.21048646 12.4805217,6.11688428 L1.89772665,0.494774428 C1.40999531,0.235667151 0.804562986,0.421003577 0.545455709,0.908734922 C0.468705885,1.05320518 0.428571429,1.21429861 0.428571429,1.37789015 Z" id="Combined-Shape"></path></g></g></g></g></g></g></g></g></Svg>}
                                    {isPlaying && <Svg width="20" height="20" viewBox="0 0 20 20" class=" jss994 w-5 h-5 md:w-6 md:h-6"><path fill="#fff" fill-rule="nonzero" d="M3.5 3.5a2 2 0 1 1 4 0v12.705a2 2 0 1 1-4 0V3.5zm9.21 0a2 2 0 1 1 4 0v12.705a2 2 0 1 1-4 0V3.5z"></path></Svg>}
                                </PlayerControlBtn>
                                <PlayerControlBtn index="4"><svg width="21" height="24" viewBox="0 0 21 24" class="w-4 sm:w-6"><g fill="#FFF" fill-rule="evenodd"><rect width="4" height="20" x="17" y="1.953" rx="2"></rect><path d="M0 1.763v20.416c0 .553.448 1 1 1 .181 0 .359-.049.514-.142L20 11.953 1.513.904C1.039.621.425.776.142 1.25.049 1.405 0 1.582 0 1.763z"></path></g></svg></PlayerControlBtn>
                                <PlayerControlBtn index="5"><svg width="20" height="20" viewBox="0 0 20 20" class="text-white"><path fill="#FFF" fill-rule="nonzero" d="M9.59 3.55a7.59 7.59 0 1 0 0 15.18c3.358 0 6.29-2.201 7.258-5.363a.75.75 0 0 0-1.435-.44A6.092 6.092 0 0 1 3.5 11.14 6.09 6.09 0 0 1 9.59 5.05h6.104l-1.27 1.27a.75.75 0 0 0 1.06 1.06l2.55-2.55a.75.75 0 0 0 0-1.06l-2.55-2.55a.75.75 0 0 0-1.06 1.06l1.27 1.27H9.59z"></path></svg></PlayerControlBtn>
                            </PlayerControlKit>
                            <PlaylistControlKit>
                                <BtnWrapper>
                                    <PlaylistControlBtn><svg width="27" height="24" viewBox="0 0 27 24" class="opacity-25 sm:opacity-100 h-4 sm:h-6"><g fill="none" fill-rule="evenodd"><g stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><path d="M0 11.191L7.443 11.191M0 1.562L7.443 1.562M0 20.82L20.555 20.82" transform="translate(2 1) translate(0 .692)"></path></g><path fill="#FFF" d="M14.4 1.137v10.618c0 .663.537 1.2 1.2 1.2.252 0 .498-.08.703-.227l7.35-5.31c.538-.387.659-1.137.27-1.674-.074-.104-.165-.196-.27-.27l-7.35-5.31c-.538-.388-1.288-.267-1.676.27-.148.205-.227.45-.227.703z" transform="translate(2 1)"></path></g></svg></PlaylistControlBtn>
                                </BtnWrapper>
                            </PlaylistControlKit>
                            <ControlBar>
                        <ProgressBar isPlaying={playingSpeed}/>
                            <StageBtn isPlaying={playBtnPosition}/>
                            <StageBar><audio src={audioFile} enckey="241"></audio></StageBar>
                        </ControlBar>
                </PlayerContents>
                <AppIntro><img src={AppImg}/></AppIntro>
                </FirstIntroPg>
                <Contents>
                    <Intro>
                    <Title>{musicInfo.title}</Title>
                    <P>by {musicInfo.teacher}</P>
                    </Intro>
                    <LabelsCont>
                    <Labels RateLabel={true}>
                        <Div RateLabel={true}>Rated</Div>
                        <LabelP>{musicInfo.rate}<Svg class="MuiSvgIcon-root jss336 text-black75" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path><path fill="none" d="M0 0h24v24H0z"></path></Svg></LabelP>
                    </Labels>
                    <Labels RateLabel={false}>
                        <Div>Type</Div>
                <LabelP><Svg width="24" height="23" viewBox="0 0 24 23" class="h-5 w-5 mr-1 "><g fill="#181818" fill-rule="evenodd"><path d="M10.87 10.574c0-.495-.405-.9-.9-.9a.9.9 0 0 0-.9.9v3.429a.6.6 0 1 1-1.2 0v-3.429a2.1 2.1 0 0 1 1.233-1.908l1.552-5.125A3.066 3.066 0 0 0 9.06 0L3.44 9.702 2.632 15.8.483 16.964a.5.5 0 0 0-.177.718l2.968 4.429a.5.5 0 0 0 .686.142l4.705-3.037a4.8 4.8 0 0 0 2.205-4.038v-4.603zM20.7 9.702L15.08 0a3.067 3.067 0 0 0-1.596 3.54l1.551 5.127a2.098 2.098 0 0 1 1.234 1.908v3.428a.6.6 0 0 1-1.2 0v-3.428a.9.9 0 0 0-1.799 0v4.602c0 1.634.83 3.155 2.204 4.04l4.704 3.036a.5.5 0 0 0 .687-.142l2.968-4.43a.5.5 0 0 0-.178-.717L21.508 15.8l-.809-6.099z"></path></g></Svg>{musicInfo.type}</LabelP>
                    </Labels>
                    <Labels RateLabel={false}>
                        <Div>Activity</Div>
                    <LabelP>{musicInfo.activity}</LabelP>
                    </Labels>
                    <Labels RateLabel={false}>
                        <Div>Suitable for</Div>
                    <LabelP>{musicInfo.suitableTarget}</LabelP>
                    </Labels>
                    <Labels RateLabel={false}>
                        <Div>Plays</Div>
                        <LabelP>2million</LabelP>
                    </Labels>
                    </LabelsCont>
                    <DescCont>
                        {musicInfo.musicDescription}
                    </DescCont>
                    <BtnCont>
                    {categoryInfo.map(item => (<Btn><A>{item}</A></Btn>
                    ))}
                    </BtnCont>
                    
                    <HrWrapper paddingSide={false}>
                    <Hr />
                    </HrWrapper>
                    <TeacherInfo> 
                        <TeacherImg />
                        {teacherDetail && <TeacherDesc>
                            <TeacherTitle>
                            <TeacherWrapper>
                                <TeacherBio>
                                    <TeacherSvg width="199" height="89" viewBox="0 0 199 89" aria-labelledby="teachersID" role="img" class="w-24 h-12"><title id="teachersID">teachers</title><g fill="none" fill-rule="evenodd"><path fill="#000" d="M40.207 17.974c1.907-.342 3.862-.636 5.87-.895a81.191 81.191 0 0 1 5.883-.537l1.891-.099c.18-.068.259-.249.243-.55-.016-.3-.122-.64-.325-1.026a5.964 5.964 0 0 0-.734-1.086 4.375 4.375 0 0 0-.949-.854c-.342-.225-.634-.328-.87-.315a292.628 292.628 0 0 1-12.172 2.13c-3.945.596-7.861 1.206-11.738 1.828-3.886.63-7.822 1.285-11.82 1.98-4 .687-8.14 1.536-12.423 2.547-.886.348-1.514.712-1.884 1.091-.377.38-.55.72-.534 1.02.016.302.175.535.485.696.31.167.703.235 1.187.21.3-.016.54-.058.713-.126 3.586-.607 7.302-1.228 11.151-1.85 3.85-.62 7.518-1.025 11-1.208.351.946.708 2.566 1.071 4.87.364 2.296.74 4.99 1.144 8.07.404 3.081.583 2.423.952 6.108.378 3.685.763 7.4 1.172 11.142.41 3.742.807 7.411 1.21 11 .4 3.596.79 6.825 1.184 9.693.149.478.43.779.863.903.426.132.883.181 1.36.156a4.31 4.31 0 0 0 1.388-.3c.44-.17.655-.409.64-.71a420.727 420.727 0 0 1-2.263-14.694A614.662 614.662 0 0 1 32.18 43.21c-.513-4.582-.766-5.08-1.179-9.58-.42-4.491-.832-9.013-1.255-13.571 1.49-.32 3.126-.664 4.915-1.022 1.79-.366 3.632-.72 5.547-1.063M138.345 49.882c.37-1.644.892-3.178 1.568-4.603.683-1.418 1.458-2.605 2.342-3.556.884-.943 1.777-1.445 2.678-1.493.418-.021.796.047 1.143.213.34.166.52.516.548 1.051.079 1.503-.163 2.92-.726 4.243a15.898 15.898 0 0 1-2.197 3.68 20.884 20.884 0 0 1-2.915 2.998c-1.042.871-1.998 1.568-2.875 2.092-.076-1.437.072-2.982.434-4.625M77.07 51.418c-1.012 2.434-2.164 4.59-3.455 6.459-1.284 1.875-2.565 3.39-3.828 4.538-1.262 1.153-2.224 1.74-2.884 1.775l-.183.01c-.495-.334-.773-1.011-.827-2.03-.05-.96.128-2.19.527-3.688.407-1.492 1.045-3.062 1.922-4.703.877-1.641 1.982-3.28 3.308-4.922a24.524 24.524 0 0 1 4.695-4.4c.405-.264.763-.43 1.061-.504.298-.074.589-.126.897-.142l.63-.033a25.138 25.138 0 0 1-1.863 7.64m-30.822 3.965c.37-1.644.891-3.178 1.567-4.603.683-1.418 1.458-2.605 2.342-3.556.885-.943 1.777-1.445 2.679-1.493.418-.022.796.047 1.142.213.34.165.52.516.548 1.051.08 1.503-.163 2.92-.725 4.243a15.898 15.898 0 0 1-2.197 3.68 20.888 20.888 0 0 1-2.915 2.998c-1.042.871-1.998 1.568-2.875 2.092-.076-1.437.071-2.982.434-4.625m110.8-6.305c-.786 1.13-1.53 2.087-2.238 2.875-.715.794-1.672 1.756-2.876 2.907a57.266 57.266 0 0 1-1.893 1.768 32.944 32.944 0 0 1-2.383 1.933c-.842.618-1.719 1.141-2.63 1.586-.91.437-1.787.675-2.63.72a3.942 3.942 0 0 1-2.142-.47c-.651-.363-1.186-1.04-1.599-2.04a61.985 61.985 0 0 0 3.803-3.316 29.48 29.48 0 0 0 3.58-4.07 22.826 22.826 0 0 0 2.6-4.657c.665-1.63.95-3.343.856-5.147-.085-1.62-.633-2.665-1.649-3.118-1.024-.461-2.312-.651-3.874-.57-.535.029-1.13.17-1.78.41-.656.248-1.038.4-1.151.464-1.345.858-2.452 2.033-3.337 3.52a22.285 22.285 0 0 0-2.105 4.72 27.275 27.275 0 0 0-1.058 4.797c-.174 1.416-.24 2.574-.212 3.499-.898-.184-1.578-.559-2.284-1.111a10.86 10.86 0 0 1-2.891-3.414 21.857 21.857 0 0 1-1.764-4.333 66.863 66.863 0 0 0-1.346-4.223c-.463-1.27-.982-2.33-1.57-3.166-.58-.845-1.388-1.244-2.407-1.19-1.144.06-2.33.981-3.56 2.767-1.23 1.777-2.177 4.465-2.828 8.05l-.257-4.911-.475-9.055c-.182-3.482-.39-7.16-.622-11.03-.239-3.87-.457-7.475-.662-10.808a489.938 489.938 0 0 0-.571-8.366c-.177-2.255-.307-3.498-.379-3.73a1.713 1.713 0 0 1-.406-.03 2.149 2.149 0 0 0-.405-.022 3.957 3.957 0 0 0-1.782.505c-.529.3-.79.504-.783.629.434 3.645.835 7.513 1.195 11.589.369 4.075.688 8.212.967 12.41.28 4.204.539 8.33.788 12.381.238 3.989.45 7.755.637 11.312-.033.046-.066.087-.1.136-.96 1.344-2.574 3.215-4.859 5.629-.857.765-1.692 1.514-2.5 2.247a25.78 25.78 0 0 1-2.51 2.036 22.494 22.494 0 0 1-2.8 1.676c-1.004.508-2.158.915-3.466 1.225-.662-.024-1.18-.21-1.565-.55a3.417 3.417 0 0 1-.874-1.263 6.9 6.9 0 0 1-.442-1.557 11.543 11.543 0 0 1-.167-1.35 9.767 9.767 0 0 1 .496-3.593 67.72 67.72 0 0 1 1.458-4.009c.801-1.968 1.725-3.553 2.78-4.748 1.047-1.201 2.034-2.142 2.962-2.823.928-.68 1.676-1.255 2.312-1.614 1.685-.95-.068-1.305-.068-1.305-.332-.011-.647-.01-.949.006-.843.044-1.75.246-2.725.591-.973.36-1.95.948-2.928 1.786-.808.703-1.6 1.723-2.369 3.057-.775 1.334-1.47 2.834-2.073 4.49a35.634 35.634 0 0 0-1.444 5.133 21.2 21.2 0 0 0-.396 3.023c-1.011 1.293-1.948 2.361-2.806 3.195-1.175 1.15-2.334 1.755-3.47 1.814-1.086.057-1.854-.314-2.315-1.1-.468-.79-.746-2.172-.85-4.159a46.534 46.534 0 0 1 .016-4.875c.084-1.754.21-3.444.366-5.077.15-1.64.318-3.06.497-4.274.179-1.215.283-2.03.32-2.458a4.717 4.717 0 0 0-.907-.041l-.894.047c-3.365.176-6.376 1.643-9.032 4.407-2.657 2.756-5.02 6.172-7.093 10.258-.075.156-.142.32-.213.48a59.586 59.586 0 0 1-1.604 1.871c-.716.794-1.672 1.756-2.876 2.907a57.176 57.176 0 0 1-1.893 1.768 33.095 33.095 0 0 1-2.384 1.933c-.842.618-1.719 1.141-2.63 1.586-.909.437-1.787.675-2.63.72a3.944 3.944 0 0 1-2.141-.47c-.652-.363-1.187-1.04-1.6-2.04a61.985 61.985 0 0 0 3.803-3.316 29.48 29.48 0 0 0 3.58-4.07 22.83 22.83 0 0 0 2.602-4.657c.664-1.63.95-3.343.855-5.147-.085-1.62-.632-2.665-1.649-3.118-1.024-.461-2.313-.651-3.874-.57-.536.029-1.131.17-1.78.41-.656.248-1.038.4-1.152.464-1.345.858-2.452 2.033-3.337 3.52a22.25 22.25 0 0 0-2.104 4.72 27.339 27.339 0 0 0-1.058 4.796c-.19 1.548-.257 2.8-.207 3.761.013.238.034.467.057.697-.568.273-1.793.862-2.251 1.056-.605.257.688 3.86 3.236 2.706.274.588.71 1.197 1.316 1.828.607.637 1.422 1.175 2.439 1.636 1.016.462 2.305.644 3.866.562 1.804-.094 3.54-.766 5.223-2.03a28.756 28.756 0 0 0 4.48-4.168 36.96 36.96 0 0 0 2.435-3.12c-.216 1.217-.305 2.39-.247 3.507.088 1.679.482 2.878 1.182 3.599.699.713 1.502 1.046 2.397.999.96-.05 1.996-.48 3.1-1.288 1.098-.814 2.218-1.88 3.354-3.204 1.136-1.324 2.241-2.83 3.329-4.511a43.888 43.888 0 0 0 2.927-5.3c-.092.483-.186 1.362-.266 2.631a34.33 34.33 0 0 0-.02 3.979c.101 1.92.435 3.365 1 4.328.557.964 1.47 1.416 2.731 1.35 1.203-.064 2.372-.47 3.509-1.228a15.29 15.29 0 0 0 3.064-2.69c.637-.73 1.17-1.478 1.614-2.243.1 1.414.313 2.54.657 3.344.376.885.83 1.537 1.367 1.965.536.42 1.123.677 1.76.76l.02.004c1.142.162 2.312.03 3.412-.322a17.171 17.171 0 0 0 3.597-1.63 25.968 25.968 0 0 0 4.477-3.351 36.459 36.459 0 0 0 3.765-4.035 49.312 49.312 0 0 0 2.908-3.99c.138-.213.264-.414.392-.618l.717 13.687c.017.322.257.59.576.63.353.044.779.137 1.28.282.283.082.542.148.777.197a.666.666 0 0 0 .793-.743 34.079 34.079 0 0 1-.193-2.372 63.633 63.633 0 0 1-.062-4.693c.03-1.686.141-3.051.33-4.083.004.059.133-.55.396-1.83a78.361 78.361 0 0 1 1.04-4.296 42.338 42.338 0 0 1 1.445-4.412c.524-1.351 1.062-2.047 1.604-2.076.242-.013.46.1.65.333.064.114.242.568.527 1.37.277.8.63 1.76 1.048 2.877.426 1.125.908 2.32 1.452 3.585a20.646 20.646 0 0 0 1.948 3.515c.748 1.07 1.566 1.947 2.438 2.622.788.608 2.688 1.94 5.143 2.15.034.157.162.485.4.992.274.588.71 1.197 1.316 1.828.607.637 1.423 1.175 2.44 1.636 1.015.462 2.304.644 3.866.562 1.803-.094 3.54-.766 5.222-2.03a28.756 28.756 0 0 0 4.48-4.168c1.303-1.509 2.36-2.925 3.167-4.231.8-1.307 1.232-2.02 1.285-2.141l.205-1.275-.029-.543c-.01-.183-.043-.27-.102-.266-.066.003-.123.036-.178.097"></path><path fill="#181818" fill-rule="nonzero" d="M151.587 71.964l-1.98.108-1.954.116c-26.882 1.667-46.984 5.703-61.896 14.185a1.1 1.1 0 0 0 1.088 1.913c15.248-8.674 36.312-12.63 64.857-14.125a1.1 1.1 0 0 0-.115-2.197z"></path><path fill="#000" d="M188.9 60.992a9.935 9.935 0 0 1-1.61 1.98 12.067 12.067 0 0 1-2.133 1.649c-.755.459-1.463.708-2.123.743-.366.019-.73-.05-1.098-.214-.253-.17-.384-.429-.403-.795-.025-.476.158-1.06.541-1.741s.862-1.369 1.429-2.06a24.7 24.7 0 0 1 1.877-2.046 49.073 49.073 0 0 1 1.809-1.676c.5.283.997.646 1.506 1.097.502.46.768.923.794 1.407.022.418-.177.972-.59 1.656m9.364-13.503a.38.38 0 0 0-.266.11c-.88.465-1.638.88-2.28 1.244-.643.372-1.306.752-1.976 1.147a65.93 65.93 0 0 0-2.229 1.382c-.818.52-1.807 1.146-2.975 1.869-.936-.613-2.277-1.233-4.023-1.863a50.302 50.302 0 0 1-5.18-2.213c-1.7-.844-3.198-1.824-4.484-2.926-1.294-1.109-1.981-2.44-2.063-4.008-.038-.72.162-1.391.615-2.018.453-.626 1.057-1.15 1.813-1.586.758-.43 1.628-.778 2.615-1.035a14.775 14.775 0 0 1 6.529-.254c1.158.212 2.168.563 3.04 1.061.433.278.85.528 1.26.743.4.221.722.322.964.31.117-.007.173-.069.167-.185-.326-.469-.668-.958-1.026-1.483-.359-.525-.833-1.023-1.432-1.506-.599-.483-1.385-.905-2.368-1.28-.982-.368-2.26-.631-3.834-.791a4.317 4.317 0 0 0-.819-.046l-.813.043c-1.32.069-2.57.362-3.748.873a11.06 11.06 0 0 0-3.1 2.014c-.038.037-.07.075-.108.111-1.895.14-3.552.442-4.94.926-1.537.53-2.824 1.229-3.858 2.1a10.999 10.999 0 0 0-2.555 3.022 23.513 23.513 0 0 0-1.723 3.744 268.195 268.195 0 0 1-.453-3.314c-.103-.84-.174-.94-.27-1.663a38.787 38.787 0 0 0-.4-2.281c-.167-.807-.407-1.89-.729-3.263a40.203 40.203 0 0 0-1.411-.558c-.435-.153-.798-.223-1.099-.207-.242.013-.352.166-.336.466.47 3.224.983 6.125 1.606 10.034.624 3.914 1.08 8.514 1.356 13.8l.18 3.424c.015.3.165.483.448.557.284.08.608.107.982.088.49-.026.933-.137 1.327-.341.387-.204.579-.45.563-.75-.14-.294-.219-.68-.244-1.163l-.085-1.621a63.345 63.345 0 0 1-.065-4.738c.03-1.663.093-2.88.168-3.67a31.23 31.23 0 0 1 1.26-3.587 19.962 19.962 0 0 1 2.06-3.769 13.977 13.977 0 0 1 3.124-3.236c.967-.725 2.085-1.284 3.344-1.683-.07.13-.144.259-.207.393-.489 1.048-.698 2.11-.641 3.195.082 1.562.771 2.937 2.062 4.134 1.298 1.196 2.803 2.279 4.507 3.24 1.704.97 3.4 1.873 5.068 2.72 1.669.846 2.916 1.64 3.734 2.377-.632.577-1.333 1.217-2.112 1.92a25.77 25.77 0 0 0-2.225 2.284 14.475 14.475 0 0 0-1.767 2.482c-.47.84-.686 1.646-.645 2.43.06 1.144.561 2.007 1.496 2.59a5.08 5.08 0 0 0 3.019.79c1.202-.062 2.732-.746 4.59-2.048 1.858-1.303 3.452-3.137 4.77-5.492.268-.617.393-1.196.365-1.732a4.963 4.963 0 0 0-.861-2.535 9.853 9.853 0 0 0-1.912-2.112c1.91-1.424 3.418-2.54 4.522-3.355a421.963 421.963 0 0 1 2.52-1.845c.58-.42.94-.725 1.084-.916.138-.184.203-.341.197-.459-.003-.059-.035-.094-.093-.09"></path></g></TeacherSvg>
                                        <a><H3Tag>{musicInfo.teacher}</H3Tag></a>
                                         <Location>{teacherDetail.location}</Location>
                                </TeacherBio>
                                <FollowBtn>Follow</FollowBtn>
                                </TeacherWrapper>
                                <TeacherPara>
                       {teacherDetail.info}
                    </TeacherPara>
                            </TeacherTitle>
                        </TeacherDesc>}
                    </TeacherInfo>
                </Contents>
                <HrWrapper paddingSide={true}>
                    <Hr />
                </HrWrapper>
            </ContentsWrapper>}

            <ReviewCont>
                <TitleCont>
                <ReviewTitle>
                    Recent Reviews
                </ReviewTitle>
                <ReviewInfoCont>
                <ReviewInfo>
                <SvgBtn class="MuiSvgIcon-root jss1904 hidden sm:inline-block" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path><path fill="none" d="M0 0h24v24H0z"></path></SvgBtn>
                4.83
                </ReviewInfo>
                <ReviewInfo>
                5
                </ReviewInfo>
                </ReviewInfoCont>
                
                <ReviewBtn>
                    <LeftBtn onClick={()=>{moveLeft()}}><svg width="12px" height="10px" viewBox="0 0 6 10" class="absolute m-auto top-0 left-0 right-0 bottom-0"><title>Path 7</title><desc>Created with Sketch.</desc><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g id="Details---Course" transform="translate(-1970.000000, -1408.000000)" stroke="#181818" stroke-width="1.5"><g id="Group-14" transform="translate(1955.000000, 1394.000000)"><g id="Group-27-Copy-24" transform="translate(19.000000, 19.000000) scale(-1, 1) translate(-19.000000, -19.000000) "><polyline id="Path-7" transform="translate(20.000000, 19.000000) rotate(-90.000000) translate(-20.000000, -19.000000) " points="16 17 20 21 24 17"></polyline></g></g></g></g></svg></LeftBtn>
                    <RightBtn onClick={()=>{moveRight()}}><svg width="12px" height="10px" viewBox="0 0 6 10" class="absolute m-auto top-0 left-0 right-0 bottom-0"><title>Path 7</title><desc>Created with Sketch.</desc><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g id="Details---Course" transform="translate(-1970.000000, -1408.000000)" stroke="#181818" stroke-width="1.5"><g id="Group-14" transform="translate(1955.000000, 1394.000000)"><g id="Group-27-Copy-24" transform="translate(19.000000, 19.000000) scale(-1, 1) translate(-19.000000, -19.000000) "><polyline id="Path-7" transform="translate(20.000000, 19.000000) rotate(-90.000000) translate(-20.000000, -19.000000) " points="16 17 20 21 24 17"></polyline></g></g></g></g></svg></RightBtn>
                </ReviewBtn>

                </TitleCont>
                <ReviewWrapper>
                <ReviewSlider moveSlider={translateVal}>
                {reviews && reviews.map(item => (
                    <ReviewCard userName={item.username} writeDate={item.write_date.substring(0,10)} reviewContent={item.reviewContent}/>
                ))}
                </ReviewSlider>
                </ReviewWrapper>
            </ReviewCont>
            <LastDiv />
        </div>
    )
}

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
        left: ${props => `${props.isPlaying}%`};
        right: -15px;
        bottom: -15px;
        content: "";
        position: absolute;
        border-radius: 50%;
        background-color: #fff;
`;

const ControlBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    position: relative;
    position: absolute;
    bottom: 20%;
    width: 100%;

`;

const ProgressBar = styled.span`
    left:0;
    background: #fff;
    position: absolute;
    width: ${props => `${props.isPlaying}%`};
    height: 4px;
    border-radius: 2px;
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

const PlayerControlKit = styled.div`
    flex-basis: 33.33333%;
    flex: 1;
    height: 64px;
    display: flex;
    position: absolute;
    bottom: 20px;
    left: 30%;
`;

const PlaylistControlKit = styled.div`
    flex: 1;
    flex-basis: 33.33333%;
    height: 64px;
    display: flex;
`;

const BtnWrapper = styled.div`
    margin-left: auto;
    position: absolute;
    bottom: 20px;
    left: 90%;
`;

const PlaylistControlBtn = styled.button`
    margin-left: auto;
    width: 64px;
    height: 64px;
    border: 0;
    border-style: none;
    background: transparent;
`;

const ContentsWrapper = styled.div`
    width: 100vw;
    display:flex;
    flex-direction: column;
    position:relative;
`;

const FirstIntroPg = styled.div`
    display: flex;
    padding: 0 64px 48px;
`;

const PlayerContents = styled.div`
    width: 100%;
    border: none;
    box-shadow: 0 13px 40px -10px rgba(0, 0, 0, 0.4);
    background-color: rgb(200,200,200);
    border-radius: .75rem;
    height: 621.56px;
    background-image: url(https://libraryitems.insighttimer.com/b3n7n7d4r7n3r7w4g2a8g5g6d4p1m6l9t2s5m7b4%2Fpictures%2Frectangle_xlarge.jpeg?alt=media);
    background-size: cover;
    background-position-y: 25%;
    position:relative;    
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.05);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(24, 24, 24, 0.6) 100%);

`;

const H2 = styled.h2`
    position: absolute;
    left: 45%;
    top: 45%;
    font-family: ProximaNovaRegular;
    letter-spacing: .05em!important;
    color: #fff;
    font-size: 3rem;
`;

const AppIntro = styled.div`
    width: 460px;
    margin-left: 3rem;
    position: sticky;
    top:0;
`;

const Contents = styled.div`
    width: inherit;
    padding: 0 64px;
`;

const Intro = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 2rem;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.87);
    font-family: ProximaNovaBold;
    line-height: 1.43;
    letter-spacing: 0.01071em;
`;

const P = styled.p`
    color: #7d8084;
    font-size: 1rem;
    font-family: ProximaNovaRegular;
`;

const LabelsCont = styled.div`
    display:flex;
`;

const Labels = styled.div`
    font-family: ProximaNovaRegular;
    width:auto;
    padding: 20px;
    height:90px;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.RateLabel ? "center" : "flex-start"};
    align-items: ${props => props.RateLabel ? "center" : "flex-start"};
    background-image: ${props => props.RateLabel ? `url("https://i.pinimg.com/236x/de/49/38/de4938440bacec096eba2e4f1e8f6eb7--laurel-wreath-diy-wood.jpg")` : ""};
    background-size: 87%;
    background-repeat: no-repeat;
    background-position: center;
`;

const Div = styled.div`
    color: rgba(0,0,0,.5);
    width: 96px;
    line-height: 1.625;
    font-size: 0.875rem;
    text-align: ${props => props.RateLabel ? "center" : ""};
    font-family: ProximaNovaRegular;
`;

const LabelP = styled.p`
    display: flex;
    font-size: 1.25rem;
    font-family: ProximaNovaSemiBold;
    align-items: center;
    justify-content: center;
`;

const Svg = styled.svg`
    width: 16px;
    height: 16px;
`;

const DescCont = styled.div`
    padding: 20px;
    width: 1043.19px;
    font-size: 1.125rem;
    line-height: 1.625;
    letter-spacing: 0.025rem;
    font-family: ProximaNovaRegular;
`;

const BtnCont = styled.div`
    width: 60%;
    height: 87px;
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
`;

const Btn = styled.div`
    width: auto;
    margin-right: 20px;
    padding: 8px 24px;
    border-radius: 4px;
    background: #f4f4f4;
    height: 45px;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
`;

const A = styled.a`
    padding: 6px 8px;
    min-width: 64px;
    color: #181818;
    font-family: ProximaNovaSemiBold;
    font-size: 18px;
`;

const TeacherWrapper = styled.div`
    display:flex;
`;

const TeacherInfo = styled.div`
    width: 60%;
    color: rgba(0, 0, 0, 0.87);
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    display: flex;
    height: fit-content;
`;

const TeacherImg = styled.div`
    padding: 10px;
    margin-right: 20px;
    height: 240px;
    width: 180px;
    background-size: cover;
    border-radius: 4px;
    background-position: 50%;
    background-image: url(http://publicdata.insighttimer.com/publisher_data/pictures/000/003/166/large/J1F2K4G7p1r1N7a0J3n1e8r8N6A8A6L1r3f4s8p6z9X1f6v4u3G3v1w5j6a5U5r4W6M9C8k9Q1L2T8m5G3k3q8a1S6L9v7d3y8Y7-v3.jpg);
    `;

const TeacherDesc = styled.div`
    padding: 10px;
    width: 783.19px;
`;

const TeacherTitle = styled.div`
    display: flex;
    flex-direction: column;
`;

const TeacherBio = styled.div``;

const TeacherSvg = styled.svg`
    width: 96px;
    height: 48px;
`;

const H3Tag = styled.h3`
    font-size: 28px;
    color: rgb(0,0,0,0.87);
    font-family: ProximaNovaSemiBold;
`;

const Location = styled.p`
    color: #8d8d8d;
    font-size: 14px;
    font-family: ProximaNovaRegular;
`;

const FollowBtn = styled.div`
    width: 131px;
    height: 38px;
    margin-left: auto;
    border: 1px solid rgb(223, 223, 223);
    border-radius: 4px;
    font-size: 15px;
    font-family: ProximaNovaRegular;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const TeacherPara = styled.div`
    height: 148px;
    font-size: 1.125rem;
    letter-spacing: 0.025rem;
    padding-top: 2rem;
    color: rgb(0,0,0,0.87);
    font-family: ProximaNovaRegular;
`;

const HrWrapper = styled.div`
    padding: 4rem 64px;
    width: 100%;
    padding: ${props => !props.paddingSide ? "4rem 0" : "4rem 64px"};
`;

const Hr = styled.hr`
    width: 60%!important;
    border: .5px solid #ebebeb;
    margin: 0;
`;

const ReviewCont = styled.div`
    width: 60%;
    height: 268px;
    padding-left: 64px;
`;

const TitleCont = styled.div`
    display:flex;
    flex-direction: column;
    font-family: ProximaNovaSemibold;
`;

const ReviewTitle = styled.div`
    width: auto;
    font-size: 30px;
    color: rgb(0,0,0,0.87);
    height: 42px;
`;

const ReviewInfo = styled.div`
    color: #22292f;
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    font-size: 16px;
    margin-right: 12px;
    align-items: center;
    justify-content:center;
`;

const SvgBtn = styled.svg`
    width: 15px;
    height: 15px;
`;

const ReviewInfoCont = styled.div`
    display: flex;
`;

const ReviewBtn = styled.div`
    display: flex;
    margin-left: auto;
`;

const LeftBtn = styled.div`
    padding: 12px;
    right: 46px;
    left: unset;
    top: -46px;
    height: 38px;
    width: 38px;
    background: #f4f4f4;
    border-radius: 50%;
    margin-right: 7px;
`;

const RightBtn = styled.div`
    padding: 12px;
    transform: rotate(180deg);
    right: 0px;
    top: -46px;
    height: 38px;
    width: 38px;
    background: #f4f4f4;
    border-radius: 50%;
`;

const ReviewSlider = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    height: inherit;
    transform: translateX(${props => props.moveSlider}px);
    transition: transform 0.4s ease-out;
`;


const ReviewWrapper = styled.div`
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: inherit;
`;

const LastDiv = styled.div`
    margin-top: 6rem;
    margin-bottom: 6rem;
`;


export default StressDetail;

