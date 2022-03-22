import styled from 'styled-components'
import apebackground from 'assets/images/moonversewrapper.png'
import apesbackground from 'assets/images/moonversemobilewrapper.png'
import partnermobile from 'assets/images/partnersmobilebackground.png'
import roadmapbackground from 'assets/images/mobileroadmapwrapper.png'

export const CanvasWrapper = styled.div`
  position: static;
  /* height: 100vh;
  min-width: 100vw;
  
  position: sticky;
  z-index: -1;
  top: 0; */

  .model-container {
    height: 100vh !important;
    width: 100vw !important;
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
    position: static !important;
    height: 100vh !important;
    width: 100vw !important;
    position: sticky !important;
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
    @media screen and (max-width: 740px) {
      display: none;
    }
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
  padding-left: min(7.6vw, 140px);
  max-width: min(37vw, 823px);
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  /* @media screen and (max-width: 740px) {
    padding-left: 30px;
    max-width: 250px;
  } */
`
export const Title = styled.div`
  font-size: min(4.5vw, 65px);
  text-align: left;
  font-family: 'neue_machinaultrabold';
  line-height: 1.2;
  z-index: 2;
  text-transform: uppercase;
  color: #fff;
  /* @media screen and (max-width: 740px) {
    font-size: 25px;
  } */
`

export const TokenTitle = styled.div`
  max-width: min(39vw, 513px);
  font-size: min(4.5vw, 65px);
  text-align: center;
  font-family: 'neue_machinaultrabold';
  font-weight: 200;
  line-height: 1.2;
  z-index: 2;
  text-transform: uppercase;
  color: #fff;
`

export const Text = styled.div`
  text-align: left;
  font-family: 'neue_machinaregular';
  font-size: min(1.5vw, 29px);
  font-weight: 100;
  color: #c1c0c0;
  opacity: 1;
  width: 100%;
  line-height: 1.5;
  max-width: 39vw;
`
export const Logo = styled.div`
  position: absolute;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  padding-top: 75px;
  right: 0;
  left: 0;
  top: 0;
  width: calc(100% - 152px);
  margin: 0 auto;

  .header_logo {
    width: 100%;
    max-width: 248px;
    height: 100%;
  }
  .marketplace {
    font-family: 'neue_machinaregular';
    width: 100%;
    max-width: 160px;
    height: 50px;
    background: #a3a0c5 0% 0% no-repeat padding-box;
    box-shadow: inset 0px 17px 6px #00000029, 0px 3px 6px #5a5a5a29;
    border-radius: 79px;
    opacity: 0.96;
    text-align: left;
    font-size: min(1.3vw, 24px);
    letter-spacing: 0.5px;
    color: #ffffff;
    text-transform: capitalize;
    opacity: 1;
    :hover {
      background: #a3a0c5 0% 0% no-repeat padding-box;
      box-shadow: inset 0px 17px 6px #00000029, 0px 3px 6px #5a5a5a29;
    }
    @media screen and (max-width: 740px) {
      margin-right: 10px;
      margin-top: 20px;
    }
  }
  @media screen and (max-width: 740px) {
    padding-top: 15px;
    width: calc(100% - 30px);
  }
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
    height: fit-content !important;

    @media screen and (max-width: 1440px) {
      height: 750px;
    }
    @media screen and (max-width: 1040px) {
      height: 550px;
    }
    @media screen and (max-width: 740px) {
      height: 800px;
    }
  }
`

export const ScrollContainer = styled.section`
  min-height: 150vh;
  position: relative;
  padding-bottom: 100px;
`

export const MoonverseInfo = styled.div`
  height: 1200px;
  position: sticky;
  top: 0;

  /* background-image: url(${apebackground}); */
  background-size: 100%;
  background-repeat: no-repeat;

  @media screen and (max-width: 1440px) {
    height: 800px;
    background-size: 100vw 800px;
  }
  @media screen and (max-width: 1000px) {
    height: 400px;
    background-size: 100vw;
  }
  @media screen and (max-width: 720px) {
    background-image: url(${apesbackground});
    background-size: 100% 375px;
    height: 340px;
  }
`

export const Problems = styled.div`
  height: 1200px;
  position: sticky;
  top: 0;
  display: flex;
  background-repeat: no-repeat;
  padding-top: 0px;

  @media screen and (max-width: 700px) {
    padding-top: 20px;

    height: 500px;
  }
`

export const ProblemsTitle = styled.div`
  text-align: left;
  font-size: min(4.5vw, 65px);
  font-family: 'neue_machinaultrabold';
  font-weight: 200;
  z-index: 3;
  color: #fff;
  width: 100%;
  text-transform: uppercase;
  margin-bottom: min(3.2vw, 60px);
  padding-left: min(2.7vw, 50px);
  @media screen and (max-width: 740px) {
    font-size: 25px;
    padding-left: 24px;
  }
`
export const ParticipateContainer = styled.div`
  height: 1200px;
  position: sticky;
  top: 0;

  background-repeat: no-repeat;
  background-size: 100vw 900px;
  @media screen and (max-width: 1000px) {
    background-size: 100vw 800px;
  }
  @media screen and (max-width: 720px) {
    background-size: 100vw 400px;
    height: 400px;
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
    border-radius: min(1.6vw, 79px);
    height: min(3.2vw, 59px);
    width: min(7.4vw, 135px);
    font-size: min(1vw, 20px);
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
  font-size: min(1.3vw, 24px);
  font-weight: 300;
  color: #b0b0b0;
  opacity: 1;
  /* max-width: 510px; */
  line-height: 1.7;
  z-index: 2;
  @media screen and (max-width: 720px) {
    font-size: 11px;
    max-width: 260px;
  }
`
export const TextWrapper = styled.div`
  z-index: 2;
  grid-column: 1;
  padding-left: min(7.6vw, 140px);
  max-width: min(39vw, 712px);
  grid-gap: min(1.8vw, 20px);
  display: flex;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`

export const Pointers = styled.div`
  position: relative;
  max-width: min(46.2vw, 871px);
  padding-right: min(7.6vw, 140px);
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
  /* @media screen and (max-width: 1450px) {
    background-size: 655px 655px;
  }
  @media screen and (max-width: 1120px) {
    background-size: 575px 575px;
    width: 100%;
    max-width: 659px;
    margin: 0 auto;
    height: 637px;
  }
  @media screen and (max-width: 720px) {
    background-size: 301px 301px;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    height: 337px;
    padding-left: 5px;
    justify-content: center;
  } */
`
export const DiscoverDiv = styled.div`
  position: relative;
  /* padding-top: 35px; */
`

export const Discover = styled.div`
  position: relative;
  width: 100%;
  /* border-radius: 12px; */
  font-family: 'neue_machinaregular';
  opacity: 1;
  display: flex;
  align-items: flex-start;
  padding: min(0.8vw, 15px);
  gap: min(2.7vw, 50px);
  margin-bottom: min(2.1vw, 40px);
  > div {
    padding-top: min(0.5vw, 9px);
  }
  span {
    position: relative;
    border-radius: 50%;

    height: min(4.8vw, 87px);
    min-width: min(4.8vw, 87px);
    z-index: 0;
    /* opacity: 0.78; */
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
      /* box-shadow: 0px 0px 50px #ed960f; */
      filter: blur(30px);
      z-index: 0;
    }
    img {
      max-width: min(2.8vw, 50px);
      opacity: 0.6;
    }
  }

  justify-self: center;
  @media screen and (max-width: 1120px) {
    align-self: center;
  }
  @media screen and (max-width: 720px) {
    max-width: 103px;
    align-self: flex-start;
    justify-self: flex-start;
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
      /* box-shadow: 0px 0px 50px #ed960f; */
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
      /* box-shadow: 0px 0px 50px #ed960f; */
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
  font-size: min(1.3vw, 24px);
  color: #ed960f;
  margin-bottom: 8px;
  opacity: 1;
  @media screen and (max-width: 720px) {
    font-size: 12px;
  }
`
export const InternalText = styled.div`
  font-family: 'neue_machinaregular';
  font-size: min(1.3vw, 24px);
  color: #b0b0b0;
  font-weight: 100;
  opacity: 1;
  @media screen and (max-width: 720px) {
    font-size: 8px;
  }
`
export const TokenContainer = styled.div`
  height: 1200px;
  position: sticky;
  top: 0;
`
export const TokenContainerWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TokenTextWrapper = styled.div`
  justify-content: center;
  display: flex;
  @media screen and (max-width: 720px) {
    padding-left: 30px;
    max-width: 250px;
  }
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
  width: calc(100% - 28vw);
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px min(3.9vw, 68px);
`
export const UtilitiesWrapperDiv = styled.div`
  display: flex;
  margin: 0 auto;
  width: fit-content;
  gap: 110px;
`

export const UtilitiesWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: #fff;
    margin: 0;
    position: absolute;
    text-align: center;
    font-family: 'neue_machinaregular';
    font-size: min(1.11vw, 20px);
    top: 8.3vw;
    max-width: min(15.5vw, 286px);
  }
  img {
    width: 100%;
    max-width: min(21.2vw, 390px);
    height: auto;
  }
  .utilities_type {
    @media screen and (max-width: 740px) {
      height: 220px;
    }
  }
  .nft_type {
    @media screen and (max-width: 740px) {
      width: 150px;
    }
  }

  :hover {
    transform: rotateY(20deg);
    transition: transform 0.4s;
    transform-style: preserve-3d;
    /* transform: scale(0.95);
    transition: 0.3s;
    transition-timing-function: ease-out; */
  }
  :nth-child(2) {
    @media screen and (max-width: 1440px) {
      grid-row: 1;
      grid-column: 1;
    }
  }
`
export const Partners = styled.div`
  /* display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 740px) {
    /* grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); */
  }
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
  font-size: min(4.5vw, 65px);
  font-family: 'neue_machinaultrabold';
  font-weight: 200;
  z-index: 3;
  width: 100%;
  text-transform: uppercase;
  margin-bottom: min(2.1vw, 38px);
  padding-left: min(2.7vw, 50px);
  color: #ed960f;
  > span {
    color: #ffffff;
  }
  @media screen and (max-width: 740px) {
    font-size: 25px;
    margin-top: 70px;
    margin-bottom: 30px;
  }
`
export const Roadmap = styled.div`
  padding-left: min(7.6vw, 140px);
  max-width: min(43.4vw, 804px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
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
  padding: min(0.9vw, 15px);
  gap: min(2.7vw, 50px);
  margin-bottom: min(0.9vw, 15px);
  justify-self: center;

  > img {
    width: 100px;
    height: 125px;
  }

  .imageWrapper {
    position: relative;
    border-radius: 50%;
    height: min(4.8vw, 87px);
    min-width: min(4.8vw, 87px);
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
      max-width: min(2.8vw, 50px);
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
      /* box-shadow: 0px 0px 50px #ed960f; */
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

  /* .fire-gif {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  } */
  .text-wrapper {
    padding-top: min(0.5vw, 9px);
    > h5 {
      font-family: 'neue_machinaregular';
      color: #ffffff;
      font-weight: bold;
      margin-bottom: 8px;
      opacity: 1;
      margin-top: 0;
      font-size: min(1.77vw, 33px);
      > span {
        color: #ed960f;
        font-size: min(1.3vw, 24px);
      }
    }
    > p {
      font-family: 'neue_machinaregular';
      font-size: min(1.3vw, 21px);
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
      // background: url(${roadmapbackground});
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
  /* display: flex;
  justify-content: space-between; */
  padding: 45px;
`
export const LogoImagewrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  .footer_logo {
    max-width: 100%;
  }
`
export const RightSection = styled.div`
  /* margin-bottom: 103px; */
  .sub-text {
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 33px;
    color: #fff;
  }
`
export const LinkWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 20px;
    font-family: 'neue_machinaregular';
    color: #fff;
  }
  @media screen and (max-width: 740px) {
    grid-gap: 50px;
  }
`
export const QuickWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  align-items: center;
  input {
    height: 55px;
    width: 100%;
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    color: #fff;
    font-size: 20px;
    font-family: 'neue_machinaregular';
    padding: 0 15px;
    :focus-visible {
      outline: none;
    }
    ::-webkit-input-placeholder {
      /* Edge */
      color: #c7c7c7;
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
    font-size: 20px;
    width: 180px;
    height: 56px;
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
  }
`
export const Links = styled.div`
  text-align: left;
  font-family: 'conthraxsb';
  font-size: 20px;
  letter-spacing: 0px;
  color: #6d6c87;
  opacity: 1;
  cursor: pointer;
  @media screen and (max-width: 740px) {
    font-size: 12px;
  }
`
export const QuicklinkTitle = styled.div`
  text-align: left;
  font-family: 'conthraxsb';
  font-size: 25px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 10px;
  @media screen and (max-width: 740px) {
    font-size: min(1.3vw, 24px);
  }
`
export const ChannelsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`
export const PartnerContainer = styled.div`
  @media screen and (max-width: 740px) {
    background-image: url(${partnermobile});
    background-size: 100% 500px;
    background-repeat: no-repeat;
  }
`
