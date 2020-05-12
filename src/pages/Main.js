import React from 'react'
import Nav from '../components/Nav';
import styled from 'styled-components';

const Main = () => {
    return (
        <>
        <Nav />
        <MainDiv>
            <UnloggedInSec>
                <LeftLoginBox />
                <ImgBox>
                    <ImgIns src="https://insighttimer.com/static/media/home_desktop_v1.41c5e3a2.jpg" alt="loginImg" />
                </ImgBox>
            </UnloggedInSec>
        </MainDiv>
        </>
    )
}

const LeftLoginBox = () => (
    <LeftLoginCont>
    <Title>
        #1 free app for sleep,<br/>
      anxiety and stress.
    </Title>
    <TitleDesc>
        Create an account. It’s free. Join 15 million <br/>
      people today.
    </TitleDesc>
    <BtnBox>
        <Button><Span>Sign up with email</Span></Button>
        <WhiteBtn>
            <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKqADAAQAAAABAAAAKgAAAADUGqULAAAFCklEQVRYCc2ZTWwbVRDHZ95u2ji2Ay2Hxk4aQvlogYL4OIBQkVqJA1xoDqEcKvEhqBBniuqEtHULiSPxceDKAaQiJApC0ANqJKogFQI9NBKIFiqCUmhip4gSiN0mtddvmNnGZu3sOrvOR/OkaN+bN/Ofn9/uPs9zEBbRNvZkt1oadgLBXYQQR6IYX1t5zBdIE2IGCdKAcNZU8MWF/uhP9aZjvWCtfX/2bqtAz2uCTo68NVg0/KYQPjcb8P0/Xo+eCRLrG7TttSutVtE6DIDPAZEKkmSeL6IGoA9Mwzww3tc0MW/exbAg6PYkmeeu5g6Chlf4joZcNOo2IeAMKHh789rIoa+TaNUSqgnalqT11kzuU/70O2qJLH4Oh8xQpGs8iX97aXmCxnqzd5JFx/jFuM0reEntCKNo4pOZN6I/u+m6ggokFGiYAG50C1ouG8P8Aw34iBvsvJeiPUHrZCVXGlI+vOSU3MJQvRgVK/rUUTK+GckdJ6LHqh3rGH+vEAf5ZfmFd4pLGtAErSOKoIWR2jVCF5N1uOki4lfbHog8/skuLJbmzVJHrt+O5PYvFpKTnEXD2JPuaxp2alf3Y4lsK+8iHdV2GQvDyZFcL3cPlebLt74jmWvRRHtLE/Vc+fYMN6+LPLwQpC9toleFqeRbBr06SwfZGC5NBL0iwtQaw+g6tw+zQWM9/MNzTPa0DdrWO3s7P8gvegT4MvPm/e7v/eGML2efTsIkbOJuP6OWZb3AD0bF8+pTq+ymoOHD8sCjc0tPbkNRm/Zdy0M+4uH2v5mZbDaAhA2HQDuZvv7GVdL4QOOol0BLd24vat09U9TrAfJebq52YeOJhNnaPXtHUee3uHr5NHJ551lYxLunO7XWb9a7ELwDbBFGRWQJ8SIbTnkKXCsHPaf9TAgj77/6Xj/OC/hw2ebeeCU3uM/4twojryjG/IfU4cllfh1RFSHCyAU3xCusq3AgjLyP0vKu6JJ8cIqZgNjIe6hvOb4FiTXQ8LEzAFVxxjl29hsNfJa0WXEy4B0b8wXrjP8TA67lfZQusvDNTvGafYS/zqdC52v6OCbH+iOiX9E2Ji/HqRDgWIP0J79MME+oQnUZBjqvNweR5fs9qfjMPRkkaCl8tYZAoJzzomLSH5YieSANCgYqjPxHg4GSLIkzBVtRZkQ5fpw8nb3E+W/ww8B72q98tKh4rhHpVHqg2bXojiem3+IN+yGnNr/t9/PYb+3776MPRm8y5VzSsi/Lq0q7nGJefX6wuT4ku0Ys+xBeLverOgy5lcG2VZkDDHFQGO3C2VTGOwEiV9S1xGaDjqeaTvHtPLGiBL6S4YlrbMCH2blmGNBX6q+Wq5OpDDrRHx3ic89HqwVSWISpxFMGFUM4FHmZL2Olyet4HZtjKSNUgI4mcdpQ5m4uVGr+BFiOXo4O5xYGYXHKV4DKxESq6TtDwfWBtSFhtzA4IaU/D1SM/Gwc5br8ad4JCjJemYYFySm53fK5gopjJhX9DJTq5G8izx9X3QTrsdk5OJed00PAE1T8J1PhL82QcQ9/0uMe8Ys2i7bkkFy1xBb8deRCMpxmgSdi3dN7QOMB/jpsqyXod463n3FQdDiTan7PT0zNFXUKiGB8U2QTKvUM7wo/OucC9TlWNETLL6ToL7iiTojTL9kv1xG2HWntyd3H/2vaTqR38CnhitPP2eciZoqL82OIakhpGJoYiNj1b8bp5KP/H4oxrAZt5wuHAAAAAElFTkSuQmCC"/>
            <Span>Sign up with Facebook</Span>
        </WhiteBtn>
        <Div>Already signed up?<Atag href="#">Log in</Atag></Div>
    </BtnBox>
    </LeftLoginCont>
);

const LeftLoginCont = styled.div`
    margin-top: calc(var(--vh, 1vh) * 15) !important;
    margin-right: 85px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: inherit;
    width: 30%;
`;

const ImgBox = styled.div`
    width: 60%;
    margin: 0;
    display: flex;
    justify-content: center;
    box-sizing: inherit;
`;

const ImgIns = styled.img`
    max-height: 700px;
    margin-top: 73px;
    width: 100%;
    height: auto;
    object-fit: contain;        
`;

const Title = styled.div`
    font-family: ProximaNovaBold;
    margin-bottom: 17px;
    color: $primary-dk-font-title;
    font-size: 38px;
    line-height: 43px;
    letter-spacing: 0.8px;
`;

const TitleDesc = styled.div`
    color: #3f414c;
    font-family: ProximaNovaLight;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 24px;
    letter-spacing: 0.2px;
`;

const BtnBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Button = styled.button`
    width: 360px;
    height: 50px;
    font-size: 17px;
    letter-spacing: 0.19px;
    border-radius: 4px;
    background: #181818;
    padding: 6px 8px;
    color: #fff;
    margin-bottom: 20px;
    font-family: ProximaNovaSemiBold;
`;

const Span = styled.span`
    width: 100%;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
`;

const WhiteBtn = styled.button`
    width: 360px;
    height: 50px;
    background: #fff;
    color: #181818;
    font-size: 17px;
    border-radius: 4px;
    border: solid 1px #ebebeb;
    font-family: ProximaNovaSemiBold;
    letter-spacing: 0.19px;
    padding: 6px 8px;
    position: relative;
`;

const Img = styled.img`
    left: 17px;
    width: 21px;
    height: 21px;
    position: absolute;
`;

const Div = styled.div`
    padding-right: 4px;
    font-size: 15px;
    font-family: ProximaNovaRegular;
    color: #373943;
`;

const Atag = styled.a`
    margin-left: 4px;
    font-family: ProximaNovaBold;
    color: #3f414c;
`;

const UnloggedInSec = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-sizing: inherit;
    min-width: 960px;
    padding: 0px 40px;
`;

const MainDiv = styled.div`
    padding: 0px 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    --vh: 9.16px;
    height: 100vh !important;
    align-self: center;

`;


export default Main;
