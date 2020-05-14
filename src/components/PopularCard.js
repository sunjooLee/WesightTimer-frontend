import React from 'react';
import styled from 'styled-components';

const PopularCard = () => {
    return (
        <div class="PopularCard">
            <PopularCoursesArea>
                <PopularBox>
                    <Content>
                        <ImgBox>
                            <AvatarImg src="https://users.insighttimer.com/m7K4F2Q5S7X3a1j6U8a6X8B0a1e7R1g8E3z4b5k1C8L0Q8B3J6J0k8X5x2J1V6n2u9j3P1u6W0c3L2v3c8f3W7z6H7t4E1t6t0B0%2Fpictures%2Fsquare_small.jpeg?alt=media" />
                        </ImgBox>
                        <CourseDescription>
                            <Score viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </Score>
                            4.8
                            <DotIcon />
                            <CourseDay>
                                7 day course
                            </CourseDay>
                        </CourseDescription>
                        <CourseTitle>Learn How To Meditate In Seven Days</CourseTitle>
                        <LinkArea>
                            <CourseLink>Insight Timer</CourseLink>
                        </LinkArea>
                    </Content>
                </PopularBox>
            </PopularCoursesArea>
        </div>
    );
}

export default PopularCard;

// styled-components

const PopularCoursesArea = styled.section`
    overflow: hidden;
    padding-top: 2rem!important;
`;

const PopularBox = styled.div`
    width: 540px;
    height: 380px;
    /* padding: 40px; */
    background: url("https://libraryitems.insighttimer.com/4263e814-9c46-4924-a131-f56d96478e08%2Fpictures%2Frectangle_large.jpeg?alt=media");
    margin-right: 30px;    
    position: relative;
    border-radius: .5rem!important;    
    cursor: pointer;  

    &:hover {
        transform: translateY(-6px);
        transition: transform 0.4s ease-in-out;        
        /* transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        box-shadow: 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        border: 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition-property: background-color;
        box-shadow: border;
        transition-duration: 250ms, 250ms, 250ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1);
        transition-delay: 0ms, 0ms, 0ms;  */
    }
`;

const Content = styled.div`
    margin: auto;
    padding-top: 148px;
    width: 460px;
    height: 192px;
    color: #FFFFFF;
    letter-spacing: 0.02857em;
    
`;

const ImgBox = styled.div`
    width: 64px;
    height: 72px;
`;

const AvatarImg = styled.img`
    width: 100%;
    height: 64px;
    border-radius: 9999px!important;
`;

const CourseDescription = styled.div`
    width: 100%;
    height: 28px;
    font-size: 16px;
    font-family: ProximaNovaSemiBold;   
    display: flex;
    align-items: center!important;
`;

const Score = styled.svg`
    width: 15px;
    height: 15px;
    margin-bottom: 1px;
    margin-right: 1px;
    fill: #FFFFFF;
`;

const DotIcon = styled.div`
    width: 4px;
    height: 4px;
    margin: 0 8px;
    border-radius: 9999px!important;
    background-color: hsla(0,0%,100%,.5)!important;
`;

const CourseDay = styled.div``;

const CourseTitle = styled.h3`
    width: 400px;
    height: 60px;
    font-size: 24px;
    line-height: 1.25;
    font-family: ProximaNovaBold;
`;

const LinkArea = styled.div`
    width: 400px;
    height: 32px;
    display: flex;
    align-items: center;
`;

const CourseLink = styled.span`   
    font-size: 14px;
    margin-top: 4px;
    font-family: ProximaNovaSemiBold;
`;