import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const NavWrapper = ({ onClickFromMain }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <Nav>
      <MuitoolWrapper>
        <FloatLeft>
          <Img src="https://insighttimer.com/static/media/appIcon.9ffac779.png" />
          <LogoSvg>
            <path
              d="M11399.43,13550.661l-1.266-.347a.269.269,0,0,1-.19-.133.258.258,0,0,1-.017-.23l.6-1.919a.247.247,0,0,1,.129-.173.26.26,0,0,1,.214-.011l1.007.289a9.482,9.482,0,0,0,2.231.279c1.792,0,3.428-.7,3.9-2.778.074-1.143.1-1.064.125-1.608,0-.181-.125-.31-.363-.079a4.764,4.764,0,0,1-3.581,1.507c-3.429,0-5.5-2.544-5.5-6.516,0-4.18,2.258-6.622,6.043-6.622a8.506,8.506,0,0,1,3.194.6l2.313.959a.3.3,0,0,1,.23.31v10.876c0,3.843-2.261,5.945-6.233,5.945h-.041A11.335,11.335,0,0,1,11399.43,13550.661Zm3.306-15.742c-2,0-3.17,1.455-3.17,3.948,0,2.363,1.067,3.969,2.986,3.969,1.972,0,3.063-1.428,3.063-3.921v-3.187l-.778-.367a4.929,4.929,0,0,0-2.034-.443Zm66.779,3.992c0-4.05,2.234-6.566,6.025-6.566,3.108,0,5.007,1.551,5.007,4.125,0,2-1.222,3.143-3.816,3.53l-4.077.626a2.745,2.745,0,0,0,2.959,2.23,7.058,7.058,0,0,0,2.051-.259l1.143-.285a.263.263,0,0,1,.23.017.266.266,0,0,1,.133.19l.518,1.945a.263.263,0,0,1-.018.231.267.267,0,0,1-.19.133l-1.187.3a10.866,10.866,0,0,1-2.649.347C11471.722,13545.472,11469.515,13542.928,11469.515,13538.911Zm2.88-.533,3.9-.626c.908-.153,1.4-.571,1.4-1.245,0-1.037-.8-1.585-2.207-1.585C11473.772,13534.922,11472.605,13535.99,11472.395,13538.378Zm-91.163,6.543-1.01-.286a.259.259,0,0,1-.19-.132.274.274,0,0,1-.021-.231l.6-1.945a.253.253,0,0,1,.129-.17.244.244,0,0,1,.218-.011l.936.259a13.382,13.382,0,0,0,3.322.442c1.271,0,2-.493,2-1.3,0-.622-.364-1.013-1.222-1.271l-2.632-.681c-2.152-.544-3.166-1.659-3.166-3.529,0-2.333,1.737-3.738,4.751-3.738a13.081,13.081,0,0,1,3.221.415l1.143.289a.271.271,0,0,1,.19.13.267.267,0,0,1,.017.234l-.547,1.945a.27.27,0,0,1-.364.207l-1.143-.31a9.969,9.969,0,0,0-2.521-.312c-1.193,0-1.9.442-1.9,1.146,0,.595.364.959,1.17,1.193l2.588.673c2.262.571,3.282,1.741,3.282,3.608,0,2.442-1.819,3.922-4.881,3.922A14.638,14.638,0,0,1,11381.231,13544.921Zm43.208-3.455v-6.309h-1.272a.266.266,0,0,1-.211-.075.269.269,0,0,1-.074-.211v-2a.267.267,0,0,1,.074-.211.255.255,0,0,1,.211-.072h1.272v-2.989a.3.3,0,0,1,.234-.31l2.3-.785c.218-.055.347.027.347.234v3.833h.319c.238.014,1.194-.014,1.819-1.432.031-.071.065-.136.1-.2l2,1.8a4.413,4.413,0,0,1-3.836,2.438c-.112,0-.225-.007-.333-.018h-.072v6.3c0,.888.392,1.381,1.018,1.381a1.977,1.977,0,0,0,.673-.1c.184-.078.313-.055.392.13l.829,1.765a.28.28,0,0,1-.129.391,3.9,3.9,0,0,1-1.765.442C11425.867,13545.465,11424.439,13543.985,11424.439,13541.466Zm43.388,3.721h-2.336a.27.27,0,0,1-.211-.075.254.254,0,0,1-.071-.211v-7.359c0-1.636-.677-2.622-2.055-2.622-1.973,0-2.856,1.534-2.856,3.921v6.044a.249.249,0,0,1-.075.211.255.255,0,0,1-.211.071h-2.336a.26.26,0,0,1-.211-.071.275.275,0,0,1-.075-.211v-7.363c0-1.608-.724-2.592-2.05-2.592-2,0-2.857,1.534-2.857,3.922v6.043a.254.254,0,0,1-.071.211.27.27,0,0,1-.211.075h-2.315a.26.26,0,0,1-.208-.075.247.247,0,0,1-.074-.211v-12.012a.244.244,0,0,1,.074-.211.26.26,0,0,1,.208-.075h1.3a.285.285,0,0,1,.214.062.294.294,0,0,1,.1.2l.235,1.007c.152.31.313.31.622.023a4.3,4.3,0,0,1,3.374-1.554,4.066,4.066,0,0,1,3.377,1.741c.343.363.571.285.881,0a4.358,4.358,0,0,1,3.557-1.741c2.908,0,4.571,1.843,4.571,4.91v7.659a.27.27,0,0,1-.075.211.266.266,0,0,1-.187.076Zm-46.53,0h-2.312a.239.239,0,0,1-.208-.075.253.253,0,0,1-.078-.207v-7.35c0-1.663-.856-2.622-2.258-2.622-2.105,0-3.013,1.663-3.037,3.922v6.043a.266.266,0,0,1-.074.208.248.248,0,0,1-.211.074h-2.312a.241.241,0,0,1-.208-.074.245.245,0,0,1-.075-.208v-17.6a.252.252,0,0,1,.075-.211.266.266,0,0,1,.208-.074h2.313a.261.261,0,0,1,.285.3v6.475a4.487,4.487,0,0,1,3.428-1.455c2.959,0,4.751,1.843,4.748,4.911v7.665a.239.239,0,0,1-.075.207.243.243,0,0,1-.176.077A.168.168,0,0,1,11421.3,13545.183Zm-43.153,0h-2.312a.252.252,0,0,1-.208-.072.245.245,0,0,1-.074-.21v-7.356c0-1.636-.864-2.622-2.262-2.622-1.922,0-3.037,1.4-3.037,3.921v6.044a.271.271,0,0,1-.075.211.255.255,0,0,1-.211.071h-2.312a.261.261,0,0,1-.211-.071.274.274,0,0,1-.074-.211v-12a.26.26,0,0,1,.285-.286h1.3a.281.281,0,0,1,.211.062.275.275,0,0,1,.1.2l.234,1.03c.156.313.313.289.6.027a4.667,4.667,0,0,1,3.581-1.585c2.959,0,4.751,1.847,4.751,4.908v7.662a.258.258,0,0,1-.071.21.267.267,0,0,1-.18.074Zm106.563,0h-2.312a.265.265,0,0,1-.286-.286v-12.016a.268.268,0,0,1,.075-.21.253.253,0,0,1,.211-.072h1.3a.315.315,0,0,1,.344.231l.419,1.479c.152.286.282.347.517.078a4.821,4.821,0,0,1,4.1-2.051.266.266,0,0,1,.211.075.269.269,0,0,1,.074.211v2.023l-.01-.007a.257.257,0,0,1-.071.211.279.279,0,0,1-.215.074c-2.826.13-4.074,2.105-4.074,6.881v3.091a.25.25,0,0,1-.074.208.257.257,0,0,1-.187.079Zm-40.854-1.438v-9.972a1.442,1.442,0,1,1,2.884,0v9.972a1.442,1.442,0,0,1-2.884,0Zm-51.584,0v-9.972a1.442,1.442,0,1,1,2.884,0v9.972a1.442,1.442,0,0,1-2.884,0Zm-27.626,1.435h-2.363a.247.247,0,0,1-.211-.074.266.266,0,0,1-.074-.211v-17.576a.266.266,0,0,1,.074-.211.269.269,0,0,1,.211-.074h2.363a.268.268,0,0,1,.211.074.248.248,0,0,1,.075.211v17.576a.248.248,0,0,1-.075.211.243.243,0,0,1-.178.076A.189.189,0,0,1,11364.642,13545.176Zm75.421,0h-2.387a.26.26,0,0,1-.286-.285v-15.239h-.851v-.011a5.734,5.734,0,0,0-4.091,1.653l-1.938-1.741a8.564,8.564,0,0,1,6.029-2.51v-.014h9.8a.271.271,0,0,1,.211.074.266.266,0,0,1,.075.211v2.051a.261.261,0,0,1-.286.286h-5.988v15.239a.257.257,0,0,1-.071.211.281.281,0,0,1-.19.075Z"
              transform="translate(-11361.992 -13527.008)"
            ></path>
          </LogoSvg>
        </FloatLeft>
        <CentermuiGrid>
          <MuiGrid>
            <Span2>Free library</Span2>
          </MuiGrid>
          <MuiGridPlus>
            <Span>Member</Span>
            <IconSvg2>
              <path d="m20.888538,0.498562c2.28014,0.22863 4.45664,0.80019 6.24295,2.31672c2.94468,2.49962 3.46898,6.59656 1.15836,9.67841c-1.35955,1.8107 -3.12452,3.13976 -4.99314,4.36366c-1.67505,1.09739 -3.47965,1.94635 -5.36503,2.55601c-1.74821,0.56547 -3.57111,0.90383 -5.36961,1.30773c-0.3658,0.08231 -0.53955,0.20271 -0.64015,0.57918c-0.73769,2.79378 -1.54245,5.56927 -2.24356,8.37068c-0.1768,0.70263 -0.23624,1.4388 -0.28806,2.17192c-0.02896,0.41457 -0.03811,0.83067 -0.03658,1.24524c0.00304,0.81999 -0.1509,2.3472 -1.4129,1.46319c-0.59442,-0.41457 -0.9023,-1.01814 -1.09739,-1.69029c-0.34141,-1.17665 -0.21948,-2.36549 -0.05182,-3.54977a41.94025,41.94025 0 0 1 1.88233,-7.74577c0.17985,-0.52278 -0.46487,-1.05929 -0.64929,-1.53939c-0.15546,-0.40238 -0.3658,-0.85658 0.09755,-1.0974c0.09907,-0.05182 1.36259,-0.17985 1.4007,-0.29111c1.37631,-4.1762 2.40817,-7.68023 3.77534,-11.85948c0.04572,-0.13564 0.0823,-0.36275 0.0884,-0.50449c0.02591,-0.60966 0.18137,-0.77427 0.78951,-0.81847c0.90535,-0.06707 1.63542,0.53345 1.74516,1.48757c0.04115,0.3658 0.03963,0.76208 -0.05792,1.11416c-0.72397,2.60936 -1.13397,4.53742 -1.8869,7.13763c-0.26825,0.92364 -0.57309,1.83509 -0.89926,2.86695c0.78342,-0.20729 1.49216,-0.35971 2.17498,-0.58376c3.31961,-1.08825 6.40451,-2.62764 9.11751,-4.85292c1.10654,-0.90687 2.10791,-1.92043 2.7511,-3.22054c1.23152,-2.4859 0.43744,-4.31642 -1.98902,-5.426c-1.40528,-0.64015 -2.91267,-0.8642 -4.43835,-0.9084c-4.29203,-0.12194 -8.39049,0.69806 -12.1765,2.89742c-1.12787,0.65539 -2.17497,1.4449 -3.11385,2.35025c-0.85201,0.82 -1.54855,1.7223 -1.25896,3.03308c0.04268,0.19509 -0.22862,0.58375 -0.442,0.6752a1.18122,1.18122 0 0 1 -0.90383,-0.03963c-0.65996,-0.34751 -1.02423,-1.30773 -0.90382,-2.07895c0.3597,-2.30605 1.66133,-4.01158 3.45831,-5.38485c2.14144,-1.63542 4.6121,-2.56058 7.1864,-3.24188c2.73892,-0.72398 5.51746,-1.06539 8.34934,-0.7819zm10.81238,4.7127s0.46639,-1.56074 1.3946,-0.55327c0.34598,0.37494 0.5487,0.8581 0.62491,1.3626c0.06858,0.46487 0.11126,0.93583 -0.00153,1.35497c-0.76208,2.80141 -1.55464,5.59976 -2.46609,8.35544c-1.0349,3.13062 -2.23441,6.21094 -2.95381,9.43453c0,0 -0.97546,4.21125 -0.32008,4.54199c1.69944,-0.92059 4.97485,-5.79789 4.97485,-5.79789a60.06706,60.06706 0 0 0 2.65204,-3.76924c0.54717,-0.82915 0.94955,-1.75279 1.49367,-2.58345a15.69883,15.69883 0 0 1 1.54702,-1.95702c0.57004,-0.62338 1.87015,-0.70873 2.57583,-0.25149c0.32007,0.20729 0.17985,0.44201 0.06249,0.67978l-0.48773,0.97546c-0.49078,0.97241 -0.98613,1.94482 -1.43271,2.93857c-0.86877,1.94178 -1.58969,3.9369 -1.82594,6.07377a1.5394,1.5394 0 0 0 -0.00914,0.16156l0.00609,0.32465l0.16766,0.05487c0.32617,-0.45877 0.6752,-0.90383 0.97546,-1.37936c1.53635,-2.45085 3.04679,-4.91694 4.59534,-7.35864c0.41,-0.64472 0.89773,-1.24676 1.39613,-1.82899c0.51211,-0.59899 1.52263,-0.65996 1.96311,-0.02591c0.24692,0.35361 0.57918,0.80933 0.36275,1.41442c-1.24371,3.44917 -2.1704,6.98217 -2.69319,10.61576c-0.03048,0.20881 -0.00457,0.42676 -0.00457,0.64015l0.1448,0.06553c0.28806,-0.25605 0.61881,-0.47706 0.85657,-0.77274a370.9282,370.9282 0 0 0 4.42921,-5.61805c0.70721,-0.91907 1.34583,-1.88996 2.00427,-2.8456c0.09602,-0.14023 0.18594,-0.3277 0.17832,-0.48773c-0.11736,-2.54535 1.26505,-4.19753 3.26018,-5.4763a6.61942,6.61942 0 0 1 2.79225,-0.99833s2.11096,-0.04115 2.78007,1.28944c0.83066,1.35193 0.8017,2.41884 -0.15547,3.50557c-0.24996,0.28501 -0.60966,0.56698 -0.96327,0.64319c-0.32617,0.07011 -0.72702,-0.10364 -1.06081,-0.24539c-0.08535,-0.03658 -0.09602,-0.37494 -0.05487,-0.55479c0.15242,-0.68435 0.36428,-1.35498 0.51059,-2.04085c0.11584,-0.5426 -0.0381,-0.68739 -0.5807,-0.64014c-1.93568,0.16765 -3.52081,1.63694 -3.65036,3.42783c-0.07011,0.98917 0.30788,1.89605 0.67216,2.78616c0.33988,0.82914 0.73921,1.63389 1.11111,2.4478c1.38241,-0.5487 5.17756,-2.62765 6.99283,-4.13504c0.14785,-0.12346 0.3658,0.02133 0.31245,0.20728a4.97333,4.97333 0 0 1 -2.24051,2.86847l-4.29812,2.53619c0.09145,0.88402 0.2652,1.72535 0.24996,2.56059c-0.05639,2.95991 -3.07118,5.46258 -6.00518,5.04191c-1.75583,-0.25301 -2.49657,-1.82899 -1.51654,-3.30742c1.40985,-2.12468 3.88508,-4.00244 3.88508,-4.00244l-1.62323,-3.68236c-0.32465,0.51059 -0.63557,1.02271 -0.96632,1.52111c-1.30772,1.95854 -2.6185,3.91708 -4.30574,5.58146a11.34431,11.34431 0 0 1 -1.45405,1.23457c-1.39155,0.97241 -3.04527,0.4542 -3.69761,-1.12483c-0.45419,-1.10044 -0.24081,-2.21917 -0.07468,-3.33333c0.06706,-0.44658 0.16156,-0.88858 0.23777,-1.3123c-0.67063,0.97089 -1.30925,1.97683 -2.03932,2.91114c-0.45725,0.58528 -1.02881,1.09282 -1.60037,1.57598c-0.53803,0.45572 -1.29249,0.5807 -1.93568,0.28959c-0.19357,-0.0884 -0.39628,-0.15699 -0.58985,-0.24996c-1.15379,-0.5548 -1.6278,-1.4952 -1.55007,-2.74806c0.0122,-0.19204 0.00153,-0.38409 0.00153,-0.72397c0,0 -3.51319,5.9625 -6.38318,6.66514c-0.56851,0.1387 -1.52111,-0.24539 -1.95854,-0.9145c-1.83661,-2.20393 -0.38104,-7.51867 -0.38104,-7.51867c1.0913,-3.45374 2.27862,-6.87852 3.4446,-10.3094c0.8581,-2.51944 1.74821,-5.02668 2.6246,-7.54001zm22.84255,21.3626c-0.59137,0.2652 -1.96159,1.69791 -2.54992,2.48285c-0.28501,0.37799 -0.442,0.67825 -0.5304,0.88858a0.39323,0.39323 0 0 0 0.30026,0.54108a1.16598,1.16598 0 0 0 0.23319,0.01524c1.73754,-0.07621 3.1352,-2.22222 2.54535,-3.92775l0.00152,0z"></path>
            </IconSvg2>
          </MuiGridPlus>
          <MuiGridteams>
            <Span>Teams</Span>
          </MuiGridteams>
          <MuiGridteachers>
            <Span>Teachers</Span>
          </MuiGridteachers>
        </CentermuiGrid>
        <FloatRight >
          <MuiSvgIcondiv >
            <IconSvg>
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </IconSvg>
            <Button onClick={() => onClickFromMain()}>
              <Span1>Sign In</Span1>
            </Button>
          </MuiSvgIcondiv>
        </FloatRight>
      </MuitoolWrapper>
    </Nav >
  );
};



const Nav = styled.div`
/* z-index: 1004; */
  box-sizing: border-box;
  border: 1px solid white;
  max-width: 0 auto;
  width: 100%;
`;

const MuitoolWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border: 1px solid white;
  width: 100%;
  margin-top: 25px;
  padding-left: 40px;
  padding-right: 40px;
`;

const FloatLeft = styled.div`
  border: 1px solid white;
  width: 180px;
  display: flex;
  justify-content: space-between;
`;

const MuiSvgIcondiv = styled.div`
  display: flex;
  width: 165px;
`;

const MuiSvgIcon = styled.div`
  width: 100%;
`;

const Button = styled.button`
  min-width: 120px;
  cursor: pointer;
  color: white;
  background-color: black;
  height: 40px;
  border-radius: 6px;
  transition: 1s;
  letter-spacing: 0.22px;
  font-weight: 600;
`;

const Img = styled.img`
  width: 40px;
  height: 25px;
`;

const LogoSvg = styled.svg`
  height: 24px;
  width: 128px;
  padding-left: 10px;
  fill: #181818;
`;

const IconSvg2 = styled.svg`
  width: 70px;
  height: 50px;
  padding-bottom: 10px;
  fill: #6e6e70;
`;

const IconSvg = styled.svg`
  width: 70px;
  height: 50px;
  margin-top: 7px;
`;

const Span = styled.span`
  font-family: ProximaNovaBold;
  font-size: 20px;
  margin-top: 10px;
  opacity: 0.5;
`;

const Span1 = styled.span`
  font-size: 17px;
  cursor: pointer;
`;

const Span2 = styled.span`
  font-family: ProximaNovaBold;
  font-size: 20px;
`;
const CentermuiGrid = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid white;
  width: 650px;
`;

const MuiGrid = styled.div`
  margin-top: 10px;
`;

const MuiGridPlus = styled.div`
  display: flex;
`;

const MuiGridteams = styled.div`
  margin-top: 10px;
`;
const MuiGridteachers = styled.div`
  margin-top: 10px;
`;
const FloatRight = styled.div`
  display: flex;
`;

export default NavWrapper;

