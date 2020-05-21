import React, { useState } from 'react';
import Login from '../components/Login';
import SignupLogin from '../components/SignupLogin';
import styled from 'styled-components';

const obj = {
    0: <SignupLogin />,
    1: <Login />
}

const LoginSelector = (props) => {

    const isVisible = props.isVisible;
    const setIsModalOpen = props.setIsModalOpen;
    const [activeTabId, setActiveTabId] = useState(1);

    return (
        <ViewArea isVisible={isVisible}>
            <Overlay onClick={() => setIsModalOpen(false)} />
            <ModalArea>
                <ButtonArea>
                    <CloseButton>
                        <ButtonLabel onClick={() => setIsModalOpen(false)} >Close</ButtonLabel>
                    </CloseButton>
                </ButtonArea>
                <SelectArea>
                    <Select isSelected={activeTabId === 0} onClick={() => setActiveTabId(0)}>Sign up free</Select>
                    <Select isSelected={activeTabId === 1} onClick={() => setActiveTabId(1)}>Log in</Select>
                </SelectArea>
                <ContentArea>
                    <Contents>
                        {obj[activeTabId]}
                    </Contents>
                </ContentArea>
            </ModalArea >
        </ViewArea>
    );
}

export default LoginSelector;

// styled-components

const ViewArea = styled.div`
    visibility: ${props => props.isVisible ? "visible" : "hidden"};
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.87);
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100; 
    position:fixed;    
    top: 0;
    left: 0;    
`;

const Overlay = styled.div`
    /* position:absolute; */
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 !important;
`;

const ModalArea = styled.section`
    width: 700px;   
    z-index: 3;
    opacity: 1;   
`;

const ButtonArea = styled.div`
    width: 100%;
    height: 44px;
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;
`;

const CloseButton = styled.button`
    width: 64px;
    height: 36px;
    padding: 6px 8px;
    background: none;
    border: 0;
    cursor: pointer;
`;

const ButtonLabel = styled.span`
    width: 100%;
    font-size: 14px;
    color: #FFFFFF;
    text-decoration: underline;
`;

const SelectArea = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`;

const Select = styled.div`
    width: 346px;
    height: 60px;
    display: inline-block;
    padding-right: 4px;     
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px 12px 0 0;
    font-size: 18px;
    font-family: ProximaNovaSemiBold;   
    color: ${props => props.isSelected ? '#181818' : '#FFFFFF'};
    background-color: ${props => props.isSelected ? '#FFFFFF' : 'rgba(242, 242, 242, 0.2)'};
`;

const ContentArea = styled.div`
    width: 100%;
    height: 741px;
    border-radius: 0 0 12px 12px;
    padding: 64px 0 96px 0;
    background-color: #FFFFFF;
`;

const Contents = styled.div`    
    margin: auto;
    position: relative;
`;
