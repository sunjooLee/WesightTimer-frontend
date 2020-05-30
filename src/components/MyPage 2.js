import React from 'react';
import styled from 'styled-components';

const MyPage = (props) => {

    const clicked = props.isClicked;
    const onClickModal = props.handleModal;

    const logoutHandler = () => {
        localStorage.removeItem('token');
        console.log("로그아웃");
    }

    console.log("aaaaaa", clicked);

    return (
        <>
            <Overlay onClick={() => onClickModal(false)} />
            <Container isClicked={clicked}>
                <TopArea>
                    <Icon />
                    <MyInfo>
                        <Name>chodanbi</Name>
                        <Email>danbiicho@gmail.com</Email>
                    </MyInfo>
                </TopArea>
                <MyLists>
                    <List>My Courses</List>
                    <List>My Bookmarks</List>
                    <List>My Playlists</List>
                    <List>My Profile</List>
                    <List>My Subscription</List>
                    <Logout onClick={() => logoutHandler()}>Logout</Logout>
                </MyLists>
            </Container>
        </>
    )
}

const Overlay = styled.div`               
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    position: fixed;
    top: 74px;
    left: 0;
    right: 0;
    bottom: 0;
    visibility: ${props => props.isClicked ? "hidden" : "visible"};
`;

const Container = styled.div`
    width: 302px;
    height: 466px;
    border-radius: 10px;
    background-color: #FFFFFF;
    box-shadow: 0 9px 20px -2px rgba(0, 0, 0, 0.15);
    position: absolute;
    top: 20px;
    right: 15px;
    visibility: ${props => props.isClicked ? "visible" : "hidden"};
`;

const TopArea = styled.div`  
    width: 100%; 
    height: 120px;
    padding: 34px 32px;    
    display: flex;        
    border-bottom: 1px solid #EBEBEB;
`;

const Icon = styled.div`
  width: 64px;
  height: 64px;
  padding: 10px;
  margin: 0 20px 0 10px;
  background-image: url("https://insighttimer.com/static/media/default-user.feb92f46.svg");  
  background-size: cover;
  box-sizing: border-box;
  align-items: center;
`;

const MyInfo = styled.div`
    width: 136px;
    height: 39px;
    padding: 10px;  
`;

const Name = styled.div`
    width: 100%;
    height: 18px;
    margin-top: 4px;
    font-size: 15px;
    font-family: ProximaNovaSemiBold;
    color: rgba(0, 0, 0, 0.87);
`;

const Email = styled.div`
    width: 100%;
    height: 17px;
    margin-top: 4px;
    font-size: 12px;
    font-family: ProximaNovaRegular;
    color: rgba(0, 0, 0, 0.87);
`;

const MyLists = styled.div`  
    font-size: 16px;
    font-family: ProximaNovaSemiBold;
    color: #6E6E71;
    list-style: none;
    margin: 30px 40px;
    padding-top: 10px;
`;

const List = styled.li`
    height: 50px;
    cursor: pointer;
`;

const Logout = styled.li`
    cursor: pointer;
`;

export default MyPage;