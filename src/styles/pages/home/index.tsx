import styled from 'styled-components'
// import homevideo from 'assets/video/homevideo.mp4'

export const CanvasWrapper = styled.div`
  position: static;

  .model-container {
    height: 100vh !important;
    width: 100% !important;
    position: fixed !important;
    z-index: -1;
    top: 0;
  }

  .model-container > canvas {
    height: 100vh;
    left: 0;
    top: 0;
    width: 100vw;
  }
`
export const Container = styled.div`
  width: 100%;
  z-index: 0;
  background: linear-gradient(180deg, #120a1d 40%, #a76703 50%);
  @media screen and (max-width: 740px) {
    background: #120a1d;
  }

  .canvas-container {
    position: relative;
  }

  .model-container {
    height: 100vh !important;
    width: 100% !important;
    position: fixed !important;
    z-index: -1;
    top: 0;
  }

  .model-container > canvas {
    position: sticky;
    height: 100vh;
    left: 0;
    top: 0;
    width: 100vw;
  }

  .model-loader {
    height: 20vh !important;
    width: 20vw !important;
    position: sticky !important;
    z-index: 1;
    top: 0;
  }
`
export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  background-repeat: no-repeat;
  .video {
    width: 100%;
    /* @media screen and (max-width: 740px) {
      display: none;
    } */
  }
  .mobile_video {
    display: none;
    @media screen and (max-width: 740px) {
      display: block;
      width: 100%;
      height: 820px;
    }
  }
`
export const TextContainer = styled.div`
  display: flex;
  gap: 10px;
  /* padding-left: min(7.6vw, 140px); */
  padding-left: 7.6vw;
  max-width: 46vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 740px) {
    padding: 0 15px;
    max-width: 100%;
    margin: 0 auto;
  }
`
export const Title = styled.div`
  /* font-size: clamp(32px, 4.5vw, 65px); */
  font-size: max(32px, 4.5vw);

  text-align: left;
  font-family: 'neue_machinaultrabold';
  line-height: 1.2;
  z-index: 2;
  text-transform: uppercase;
  color: #fff;
`

export const TokenTitle = styled.div`
  max-width: max(250px, 39vw);
  /* font-size: clamp(32px, 4.5vw, 65px); */
  font-size: max(32px, 4.5vw);
  text-align: center;
  font-family: 'neue_machinaultrabold';
  font-weight: 200;
  line-height: 1.2;
  z-index: 2;
  text-transform: uppercase;
  color: #fff;
  /* @media only screen and (max-width: 740px) {
    max-width: 250px;
  } */
`

export const Text = styled.div`
  text-align: left;
  font-family: 'neue_machinaregular';
  /* font-size: clamp(20px, 1.5vw, 29px); */
  font-size: max(20px, 1.5vw);

  font-weight: 100;
  color: #c1c0c0;
  opacity: 1;
  width: 100%;
  line-height: 1.5;
  max-width: 39vw;
  @media screen and (max-width: 740px) {
    max-width: 100%;
  }
`
export const Logo = styled.div`
  position: absolute;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  padding-top: 3.9vw;
  right: 0;
  left: 0;
  top: 0;
  padding-top: 3.9vw;
  padding-left: 7.6vw;
  padding-right: 7.6vw;
  margin: 0 auto;

  .header_logo {
    width: 100%;
    max-width: max(180px, 13vw);
    height: auto;
  }
  /* @media only screen and (max-width: 768px) {
    .header_logo {
      width: 100%;
      max-width: 180px;
      height: 100%;
    }
  } */

  .marketplace {
    font-family: 'neue_machinaregular';
    height: max(40px, 2.61vw);
    background: #c49956f5 0% 0% no-repeat padding-box;
    box-shadow: inset 0px 17px 6px #00000029, 0px 3px 6px #5a5a5a29;
    border-radius: 79px;
    backdrop-filter: blur(21px);
    -webkit-backdrop-filter: blur(21px);
    text-align: left;
    font-size: max(14px, 1.3vw);
    color: #ffffff;
    text-transform: capitalize;
    padding: 0 max(10px, 1vw);
    :hover {
      background: #a3a0c5 0% 0% no-repeat padding-box;
      box-shadow: inset 0px 17px 6px #00000029, 0px 3px 6px #5a5a5a29;
    }
  }
  /* @media screen and (max-width: 740px) {
    padding-top: 15px;
    width: 90%;
    align-items: center;
    justify-content: space-between;
  } */
`
export const Scroll = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  bottom: 0;
  z-index: 3;
  .scrollbar {
    width: 100%;
    margin: 0 auto;
    display: flex;
    cursor: pointer;
  }
`
export const Player = styled.div`
  z-index: 1;

  > video {
    height: fit-content;
  }
  @media (max-width: 1023px) {
    position: relative;
    height: 100vh;
    > video {
      top: 0;
      object-fit: cover;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  }
`

export const ScrollContainer = styled.section`
  position: relative;
  /* padding-bottom: 100px; */
`

export const MoonverseInfo = styled.div`
  min-height: 10vh;
  position: sticky;
  top: 0;

  background-size: 100%;
  background-repeat: no-repeat;

  /* @media screen and (max-width: 1440px) {
    height: 100vh;
  } */
`

export const Problems = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  background-repeat: no-repeat;
  padding-top: 0px;
`

export const ProblemsTitle = styled.div`
  text-align: left;
  /* font-size: clamp(32px, 4.5vw, 65px); */
  font-size: max(32px, 4.5vw);
  font-family: 'neue_machinaultrabold';
  font-weight: 200;
  z-index: 3;
  color: #fff;
  width: 100%;
  text-transform: uppercase;
  margin-bottom: min(3.2vw, 60px);
  padding-left: min(2.7vw, 50px);
  /* @media screen and (max-width: 740px) {
    padding: 0 15px;
  } */
`
export const ParticipateContainer = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  background-repeat: no-repeat;
  background-size: 100vw 900px;
  @media screen and (max-width: 1440px) {
    height: 100vh;
  }

  .playButton {
    background: #ed960f 0% 0% no-repeat padding-box;
    box-shadow: inset 0px 17px 6px #00000029, 0px 3px 6px #5a5a5a29;
    opacity: 0.58;
    color: #ffffff;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    font-weight: 500;
    color: #ffffff;
    text-transform: capitalize;
    opacity: 1;
    border-radius: max(60px, 1.6vw);
    height: max(40px, 3.2vw);
    width: max(124px, 7.4vw);
    font-size: max(13px, 1vw);
    :hover {
      background: #ed960f 0% 0% no-repeat padding-box;
      box-shadow: inset 0px 17px 6px #00000029, 0px 3px 6px #5a5a5a29;
      transform: scale(1.1);
      transition: 0.2s;
    }
  }
`
export const PartcipateText = styled.div`
  text-align: left;
  font-family: 'outfit';
  font-size: max(18px, 1.3vw);
  font-weight: 300;
  color: #b0b0b0;
  opacity: 1;
  line-height: 1.7;
  z-index: 2;
`

export const ParticipateSubText = styled.div`
  padding-top: 30px;
`
export const TextWrapper = styled.div`
  z-index: 2;
  grid-column: 1;
  padding-left: 7.6vw;
  max-width: 39vw;
  grid-gap: 1.8vw;
  display: flex;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    margin: 0 auto;
    max-width: 100%;
    padding: 0 20px;
  }
`

export const Pointers = styled.div`
  position: relative;
  max-width: 46.2vw;
  padding-right: 7.6vw;
  height: 100vh;
  display: flex;
  align-items: center;
  margin-left: auto;
  > img {
    position: absolute;
    left: -70px;
    top: -41px;
    width: 118vh;
    height: auto;
    opacity: 0;
  }

  @media screen and (max-width: 740px) {
    padding: 0px 20px;
    max-width: 100%;
  }
`
export const DiscoverDiv = styled.div`
  position: relative;
`

export const Discover = styled.div`
  position: relative;
  width: 100%;
  font-family: 'neue_machinaregular';
  opacity: 1;
  display: flex;
  align-items: flex-start;
  padding: 0.8vw;
  gap: 2.7vw;
  margin-bottom: 2.1vw;
  > div {
    padding-top: 0.5vw;
  }
  span {
    position: relative;
    border-radius: 50%;
    height: max(40px, 4.8vw);
    min-width: max(40px, 4.8vw);
    z-index: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    &:after {
      position: absolute;
      left: 0px;
      top: 0px;
      opacity: 0.78;
      content: '';
      background: #ed960f;
      height: 100%;
      border-radius: 50%;
      width: 100%;
      filter: blur(30px);
      z-index: 0;
    }
    img {
      max-width: max(21px, 2.8vw);
      opacity: 0.6;
    }
  }
`
export const Model = styled.div`
  position: relative;
  width: 100%;
  font-family: 'neue_machinaregular';
  border-radius: 12px;
  opacity: 1;
  padding: 15px;
  top: 0px;
  left: 0px;
  padding-left: 116px;
  margin-bottom: 40px;
  span {
    position: absolute;
    left: 0px;
    top: -5px;
    border-radius: 50%;
    height: 90px;
    width: 90px;
    line-height: 127px;
    text-align: center;
    z-index: 0;
    opacity: 0.78;
    &:after {
      position: absolute;
      left: 0px;
      top: 0px;
      opacity: 0.78;
      content: '';
      background: #ed960f;
      height: 100%;
      border-radius: 50%;
      width: 100%;
      filter: blur(10px);
      -webkit-filter: blur(10px);
      -moz-filter: blur(10px);
      -o-filter: blur(10px);
      -ms-filter: blur(10px);
      z-index: -1;
    }

    img {
      width: 50px;
    }
  }
  justify-self: flex-end;
  align-self: center;
  @media screen and (max-width: 720px) {
    max-width: 173px;
    justify-self: flex-start;
  }
`
export const Monetization = styled.div`
  position: relative;
  width: 100%;
  max-width: 434px;
  border-radius: 12px;
  opacity: 1;
  padding: 15px;
  right: 0;
  font-family: 'neue_machinaregular';
  justify-self: center;
  align-self: center;
  padding-left: 116px;
  margin-bottom: 40px;
  span {
    position: absolute;
    left: 0px;
    top: 5px;
    border-radius: 50%;
    height: 90px;
    width: 90px;
    line-height: 127px;
    text-align: center;
    z-index: 0;
    opacity: 0.78;
    &:after {
      position: absolute;
      left: 0px;
      top: 0px;
      opacity: 0.78;
      content: '';
      background: #ed960f;
      height: 100%;
      border-radius: 50%;
      width: 100%;
      filter: blur(10px);
      -webkit-filter: blur(10px);
      -moz-filter: blur(10px);
      -o-filter: blur(10px);
      -ms-filter: blur(10px);
      z-index: -1;
    }
    img {
      width: 50px;
    }
  }
  @media screen and (max-width: 1120px) {
    align-self: end;
  }
  @media screen and (max-width: 720px) {
    max-width: 193px;
  }
`
export const InternalTitle = styled.div`
  font-family: 'neue_machinaultrabold';
  font-size: max(25px, 1.3vw);
  color: #ed960f;
  margin-bottom: 8px;
  opacity: 1;
`
export const InternalText = styled.div`
  font-family: 'neue_machinaregular';
  font-size: 1.3vw;
  font-size: max(20px, 1.3vw);

  color: #b0b0b0;
  font-weight: 100;
  opacity: 1;
`
export const TokenContainer = styled.div`
  position: sticky;
  top: 0;
`
export const TokenContainerWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TokenTextWrapper = styled.div`
  justify-content: center;
  display: flex;
`
export const TokenText = styled.div`
  text-align: left;
  font-family: 'conthraxsb';
  font-size: 25px;
  font-weight: 300;
  color: #ffffff;
  opacity: 1;
  width: 100%;
  max-width: 439px;
  @media screen and (max-width: 720px) {
    font-size: 11px;
  }
`
export const Utilities = styled.div`
  width: 85vw;
  /* max-width: 1320px; */
  margin: 0 auto;
  margin-top: 2.6vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3.9vw;

  @media only screen and (max-width: 616px) {
    margin-top: 40px;
    gap: 35px;
  }
`
export const UtilitiesWrapperDiv = styled.div`
  display: flex;
  margin: 0 auto;
  width: fit-content;
  gap: 110px;
`

export const UtilitiesWrapper = styled.div`
  position: relative;
  display: grid;
  width: max(250px, 21.2vw);
  background: transparent linear-gradient(180deg, #654b2187 0%, #7b7b7b87 100%) 0% 0% no-repeat padding-box;
  border-radius: 12px;
  height: max(137px, 11.88vw);
  align-items: center;
  justify-content: center;
  p {
    color: #fff;
    margin: 0;
    text-align: center;
    font-family: 'neue_machinaregular';
    font-size: max(17px, 1.11vw);
    max-width: 90%;
    align-self: flex-start;
    margin: 0 auto;
  }

  img {
    max-width: max(40px, 3.5vw);
    height: auto;
    width: 100%;
    margin: 0 auto;
  }

  :hover {
    transform: rotateY(20deg);
    transition: transform 0.4s;
    transform-style: preserve-3d;
  }
`
export const Partners = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
export const PartnersLogo = styled.div`
  justify-content: center;

  .partners {
    width: 200px;
    @media screen and (max-width: 740px) {
      width: 110px;
    }
  }
`

export const PartnersAndInvestors = styled.div`
  display: flex;
  .partner_background {
    @media screen and (max-width: 740px) {
      display: none;
    }
  }
`
export const PartnersContent = styled.div`
  display: grid;
  width: 100%;
`

export const Heading = styled.div`
  text-align: center;
  font-size: 52px;
  font-family: 'conthraxsb';
  font-weight: 200;
  letter-spacing: 0px;
  opacity: 1;
  z-index: 2;
  color: #ed960f;
  margin-top: 20px;
  fill-opacity: 100%;
  max-width: 1446px;
  text-shadow: #ed960f 5px 0 15px;
  @media screen and (max-width: 740px) {
    font-size: 25px;
  }
`
export const RoadmapHeading = styled.div`
  text-align: left;
  /* font-size: clamp(32px, 4.5vw, 65px); */
  font-size: max(32px, 4.5vw);
  font-family: 'neue_machinaultrabold';
  font-weight: 200;
  z-index: 3;
  width: 100%;
  text-transform: uppercase;
  margin-bottom: 2.1vw;
  padding-left: 2.7vw;
  color: #ed960f;
  > span {
    color: #ffffff;
  }
`
export const Roadmap = styled.div`
  padding-left: 7.6vw;
  padding-top: 7.6vw;
  max-width: 58.4vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  @media only screen and (max-width: 740px) {
    max-width: 100%;
    padding: 0 20px;
  }
`
export const RoadmapConatinerWrapper = styled.div`
  position: sticky;
  top: 0;
`

export const RoadmapDivWrapper = styled.div`
  position: relative;
  width: 100%;
  font-family: 'neue_machinaregular';
  opacity: 1;
  display: flex;
  align-items: flex-start;
  padding: 0.9vw;
  gap: 2.7vw;
  margin-bottom: 0.9vw;
  justify-self: center;

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    max-width: 250px;
  }

  > img {
    width: 100px;
    height: 125px;
  }

  .imageWrapper {
    position: relative;
    border-radius: 50%;
    height: max(40px, 4.8vw);
    min-width: max(40px, 4.8vw);
    z-index: 0;
    opacity: 0.78;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    .bg {
      width: 60px;
      height: 60px;
      background: #ed960f 0% 0% no-repeat padding-box;
      filter: blur(28px);
    }
    img {
      max-width: max(30px, 2.8vw);
    }

    ::after {
      position: absolute;
      left: 0px;
      top: 0px;
      opacity: 0.78;
      content: '';
      background: #ed960f;
      height: 100%;
      border-radius: 50%;
      width: 100%;
      -webkit-filter: blur(10px);
      filter: blur(10px);
      z-index: -1;
    }
    ::before {
      border: 2px solid transparent;
      border-radius: 100%;
      position: absolute;
      left: 0px;
      width: calc(100% - 4px);
      height: calc(100% - 4px);
      top: 0px;
      content: '';
      border-top-color: #ed972d;
      border-right-color: #ed972d;
      border-bottom-color: #ed972d;
      transition: border-top-color 0.15s linear, border-right-color 0.15s linear 0.1s,
        border-bottom-color 0.15s linear 0.2s;
      -webkit-animation-name: rotating;
      -webkit-animation-duration: 1s;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-timing-function: linear;
      -moz-animation-name: rotating;
      -moz-animation-duration: 1s;
      -moz-animation-iteration-count: infinite;
      -moz-animation-timing-function: linear;
    }
    @-webkit-keyframes rotating /* Safari and Chrome */ {
      from {
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes rotating {
      from {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }

  .text-wrapper {
    padding-top: 0.5vw;
    > h5 {
      font-family: 'neue_machinaregular';
      color: #ffffff;
      font-weight: bold;
      margin-bottom: 8px;
      opacity: 1;
      margin-top: 0;
      font-size: max(26px, 1.77vw);
      > span {
        color: #ed960f;
        font-size: max(22px, 1.3vw);
      }
    }
    > p {
      font-family: 'neue_machinaregular';
      font-size: max(18px, 1.3vw);
      color: #b0b0b0;
      font-weight: 100;
      opacity: 1;
      margin: 0;
    }
  }
`
export const RoadmapImagewapper = styled.div`
  display: flex;
`
export const RoadmapContent = styled.div`
  .mobile_roadmap {
    display: none;
    @media screen and (max-width: 740px) {
      display: block;
      background-size: 100% 1500px;
      background-repeat: no-repeat;
    }
  }
  .web_roadmap {
    width: 100%;

    display: block;
    @media screen and (max-width: 740px) {
      display: none;
    }
  }
`

export const FooterContainer = styled.div`
  background: transparent linear-gradient(90deg, #2ebec080 0%, #ff9a0080 100%) 0% 0% no-repeat padding-box;
  padding: 4.6vw 7.6vw;
  display: grid;
  grid-gap: max(15px, 1vw);
`
export const LogoImagewrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.5vw;
  gap: 1vw;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`
export const RightSection = styled.div`
  .sub-text {
    margin-top: 0;
    margin-bottom: 1.3vw;
    font-size: max(20px, 1.7vw);
    color: #fff;
  }
  /* @media only screen and (max-width: 768px) {
    .sub-text {
      font-size: 20px;
    }
  } */
`
export const LinkWrapper = styled.div`
  display: flex;
  gap: 1.1vw;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: max(14px, 1.1vw);
    font-family: 'neue_machinaregular';
    color: #fff;
  }
  .footer_logo {
    max-width: 100%;
    width: max(100px, 11vw);
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`
export const QuickWrapper = styled.div`
  display: grid;
  align-items: center;
  form {
    display: flex;
    align-items: center;
    border-bottom: 0.1vw solid #fff;
  }

  input {
    height: max(35px, 2.81vw);
    width: 100%;
    border: none;
    background: transparent;
    color: #fff;
    font-size: max(14px, 1.1vw);
    font-family: 'neue_machinaregular';
    padding: 0 max(10px, 1vw);
    :focus-visible {
      outline: none;
    }
    ::-webkit-input-placeholder {
      /* Edge */
      color: #c7c7c7;
      font-size: 12px;
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #c7c7c7;
    }

    ::placeholder {
      color: #c7c7c7;
    }
  }

  button {
    font-size: max(14px, 1.1vw);
    width: fit-content;
    height: max(35px, 2.9vw);
    background-color: transparent;
    border: 0.1vw solid #fff;
    color: #fff;
    text-transform: uppercase;
    font-family: 'neue_machinaregular';
    border-bottom: 0;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
    max-width: 276px;
  }
`
export const Links = styled.div`
  text-align: left;
  font-family: 'conthraxsb';
  font-size: max(14px, 1.1vw);
  letter-spacing: 0px;
  color: #6d6c87;
  opacity: 1;
  cursor: pointer;
  /* @media screen and (max-width: 740px) {
    font-size: 12px;
  } */
`
export const QuicklinkTitle = styled.div`
  text-align: left;
  font-family: 'conthraxsb';
  font-size: 25px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 10px;
  /* @media screen and (max-width: 740px) {
    font-size: min(1.3vw, 24px);
  } */
`
export const ChannelsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: max(10px, 0.6vw);
  img {
    max-width: 100%;
    width: max(24px, 2vw);
  }
`
