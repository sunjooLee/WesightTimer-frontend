import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { image, facebookLink } from '../config';

const SignupLogin = () => {

    const [emailInput, setEmailInput] = useState("");
    const [nameInput, setnameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [loginMessage, setLoginMessage] = useState("");

    const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    const signupHandleInput = () => {
        console.log("emailInput", emailInput);
        console.log("nameInput", nameInput);
        console.log("passwordInput", passwordInput);

        if (emailInput === "") {
            setLoginMessage("Email is required.");
        } else if (nameInput === "") {
            setLoginMessage("nameInput is required.");
        } else if (passwordInput === "") {
            setLoginMessage("Password is required.");
        }
        else {
            if (!(emailRule.test(emailInput))) {
                setLoginMessage("Email is invalid.");
            }
            if (passwordInput.length < 6) {
                setLoginMessage("Password minimum 6 chars.");
            }
        }
    }

    const handle = () => {
        fetch(`http://10.58.2.229:8000/user/signup`, {
            method: 'POST',
            body: JSON.stringify({
                email: emailInput,
                full_name: nameInput,
                password: passwordInput,
            }),
        })
            .then((response) => {
                console.log(response.message);
                if (response.message === 200) {
                    alert("회원가입 되셨습니다.");
                } else if (response.message === 400) {
                    alert("다시 확인해 주세요.")
                }
            });
    }
    // useEffect(() => {

    // }, [])

    return (
        <ModalArea>
            <Contents>
                <ImageIcon src={image} alt="iamge" />
                <WelcomeText>Create your free account</WelcomeText>
                <Link to={facebookLink} target="_blank">
                    <FacebookButton>
                        <FacebookIcon src="https://insighttimer.com/static/media/facebook-circular-logo.078994bf.svg" alt="facebookIcon" />
                        <FacebookText >Continue with Facebook</FacebookText>
                    </FacebookButton>
                </Link>
                <Or>
                    <Hr />
                    <OrText>or</OrText>
                    <Hr />
                </Or>
                <EmailText>Email address</EmailText>
                <InputEmail onChange={(e) => setEmailInput(e.target.value)} />
                <NameText>Full Name</NameText>
                <InputName onChange={(e) => setnameInput(e.target.value)} />
                <PasswordText>Create password</PasswordText>
                <InputPassword placeholder="Minimum of 6 characters" onChange={(e) => setPasswordInput(e.target.value)} />
                <Validation>{loginMessage}</Validation>
                <LoginButton onClick={handle}>Create account</LoginButton>
            </Contents>
        </ModalArea>

    );
}

export default SignupLogin;

// styled-components

const ModalArea = styled.section`
    width: 700px;
    height: 758px;    
    z-index: 2000;
    opacity: 1;
`;

const Contents = styled.div`
    width: 480px;
    height: 478px;
    padding: 0 40px;    
    margin: auto;
    position: relative;
`;

const ImageIcon = styled.img`
    width: 96px;
    height: 40px;
    margin: 8px 152px;
`;

const WelcomeText = styled.h3`
    width: 100%;
    height: 24px;
    margin-bottom: 32px;
    font-size: 24px;
    letter-spacing: 0.3px;
    text-align: center;
    font-family: ProximaNovaBold;
`;

const FacebookButton = styled.button`
    width: 400px;
    height: 54px;
    border: none;
    padding: 6px 8px;
    background-color: #f4f4f4;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const FacebookIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 12px;
`;

const FacebookText = styled.span`
    color: #181818;
    font-size: 16px;
    font-family: ProximaNovaSemiBold;
`;

const Or = styled.div`            
    height: 22px;
    color: #ebebeb;
    display: flex;
    align-items: center;
    margin: 12px 0 8px 0;
`;

const Hr = styled.hr`
    width: 100%;
    border: 0.2px solid #ebebeb;
`;

const OrText = styled.div`
    margin: 0 12px;
`;

const EmailText = styled.p`
    height: 21px;
    font-size: 15px;
    color: rgba(0,0,0,.5);
    font-family: ProximaNovaRegular;
    margin-bottom: 8px;
`;

const InputEmail = styled.input`
    width: 374px;
    height: 24px;
    border: 1px solid #ebebeb;
    font-size: 16px;
    padding: 12px;
    border-radius: 5px;
    margin-bottom: 24px;
    :focus {
        outline: none;
        border: 2px solid #000000;       
    }
`;

const NameText = styled.p`
    height: 21px;
    font-size: 15px;
    color: rgba(0,0,0,.5);
    font-family: ProximaNovaRegular;
    margin-bottom: 8px;
`;

const InputName = styled.input`
    width: 316px;
    height: 24px;
    border: 1px solid #ebebeb;    
    font-size: 16px;
    padding: 12px 70px 12px 12px; 
    border-radius: 5px;
    margin-bottom: 24px;     
    :focus {
        outline: none;
        border: 2px solid #000000;       
    }  
`;

const PasswordText = styled.p`
    height: 21px;
    font-size: 15px;
    color: rgba(0,0,0,.5);
    font-family: ProximaNovaRegular;
    margin-bottom: 8px;
`;

const InputPassword = styled.input`
    width: 316px;
    height: 24px;
    border: 1px solid #ebebeb;    
    font-size: 16px;
    padding: 12px 70px 12px 12px; 
    border-radius: 5px;
    margin-bottom: 32px;     
    :focus {
        outline: none;
        border: 2px solid #000000;       
    }  
    ::placeholder {
        font-size: 16px;
        color: #b6b6b6; 
    }
`;

const Validation = styled.p`
    padding: 16px 0;
    color: #fb2525;
    font-size: 14px;
`;

const LoginButton = styled.button`
    width: 400px;
    height: 56px;
    padding: 6px 8px;
    background-color: #000000;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 16px;
    cursor: pointer;
`;
