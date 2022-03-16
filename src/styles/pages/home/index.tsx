import styled from 'styled-components'
import apebackground from 'assets/images/moonversewrapper.png'
import apesbackground from 'assets/images/moonversemobilewrapper.png'
import problembackground from 'assets/images/problemsbackground.png'
import problemnewbackground from 'assets/images/problemmobilewrapper.png'
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
  display: grid;
  grid-gap: 10px;
  padding-left: min(7.6vw, 140px);
  max-width: min(49vw, 903px);
  /* @media screen and (max-width: 740px) {
    padding-left: 30px;
    max-width: 250px;
  } */
`
export const Title = styled.div`
  font-size: min(4.5vw, 83px);
  text-align: left;
  font-family: 'conthraxsb';
  line-height: 1.2;
  z-index: 2;
  text-transform: uppercase;
  color: #fff;
  /* @media screen and (max-width: 740px) {
    font-size: 25px;
  } */
`

export const TokenTitle = styled.div`
  max-width: 400px;
  font-size: 43px;
  padding-bottom: 7px;
  text-align: center;
  font-family: 'conthraxsb';
  font-weight: 200;
  letter-spacing: 0px;
  opacity: 1;
  line-height: 1.2;
  z-index: 2;
  text-transform: uppercase;
  color: #fff;
`

export const Text = styled.div`
  text-align: left;
  font-family: Outfit;
  font-size: min(1.9vw, 35px);
  font-weight: 100;
  color: #c1c0c0;
  opacity: 1;
  width: 100%;
  line-height: 1.5;
`
export const Logo = styled.div`
  position: absolute;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  width: 100%;

  .header_logo {
    @media screen and (max-width: 740px) {
      width: 100px;
      height: 100px;
    }
  }
  .marketplace {
    margin-right: 50px;
    margin-top: 30px;
    width: 100%;
    max-width: 120px;
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
  min-height: 400vh;
  position: relative;
`

export const MoonverseInfo = styled.div`
  height: 1200px;
  position: sticky;
  top: calc(50% - 9vw);

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
  top: calc(50% - 20vw);
  display: flex;
  // background-image: url(${problembackground});
  /* padding-right: 50px; */
  background-repeat: no-repeat;
  padding-top: 0px;

  /* @media screen and (max-width: 1050px) {
    display: grid;
    padding-top: 20px;
    padding-right: 10px;
    background-image: url(${problemnewbackground});
  }
  @media screen and (max-width: 1050px) {
    display: grid;
    padding-top: 20px;
    padding-right: 10px;
    background-image: url(${problemnewbackground});
  } */
  @media screen and (max-width: 700px) {
    padding-top: 20px;

    height: 500px;
  }
`

export const ProblemsTitle = styled.div`
  text-align: left;
  font-size: min(4.5vw, 83px);
  font-family: 'conthraxsb';
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
  padding-top: 100px;
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
  display: grid;
  align-self: flex-start;
  z-index: 2;
  grid-column: 1;
  padding-left: min(7.6vw, 140px);
  max-width: min(40.1vw, 742px);
  grid-gap: min(1.8vw, 20px);
  padding-top: min(7.6vw, 140px);
  /* @media screen and (max-width: 720px) {
    padding-left: 25px;
  } */
`

export const Pointers = styled.div`
  /* width: 500px;
  margin-right: 50px;
  margin-top: 10px; */
  /* background-position-x: center;
  background-position-y: center;
  background-size: 795px 795px;
  background-repeat: no-repeat;
  overflow: visible; */
  position: relative;
  margin-left: auto;
  max-width: min(47.2vw, 871px);
  padding-right: min(7.6vw, 140px);
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
  font-family: Outfit;
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
    opacity: 0.78;
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
      box-shadow: 0px 0px 50px #ed960f;
      filter: blur(10px);
      -webkit-filter: blur(10px);
      -moz-filter: blur(10px);
      -o-filter: blur(10px);
      -ms-filter: blur(10px);
      z-index: -1;
    }
    img {
      max-width: min(2.8vw, 50px);
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
  font-family: Outfit;
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
      box-shadow: 0px 0px 50px #ed960f;
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
  font-family: Outfit;
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
      box-shadow: 0px 0px 50px #ed960f;
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
  font-family: Outfit;
  font-size: min(1.3vw, 24px);
  color: #ed960f;
  font-weight: bold;
  margin-bottom: 8px;
  opacity: 1;
  @media screen and (max-width: 720px) {
    font-size: 12px;
  }
`
export const InternalText = styled.div`
  font-family: Outfit;
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
  top: 100px;
`
export const TokenTextWrapper = styled.div`
  justify-content: center;
  display: flex;
  padding-left: 74px;
  grid-gap: 20px;
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
  width: calc(100% - 100px);
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: min(-3vw, -81px);
  justify-content: center;
  gap: 0 min(3.9vw, 68px);
`
export const UtilitiesWrapperDiv = styled.div`
  display: flex;
  margin: 0 auto;
  width: fit-content;
  gap: 110px;
`

export const UtilitiesWrapper = styled.div`
  justify-content: center;
  img {
    width: 100%;
    max-width: min(20.5vw, 390px);
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
  margin-bottom: 60px;
  font-size: 83px;
  font-family: 'conthraxsb';
  margin-left: 43px;
  font-weight: 200;
  letter-spacing: 0px;
  opacity: 1;
  z-index: 2;
  color: #ed960f;
  margin-top: 20px;
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
  width: calc(100% - 209px);
  margin: 0 auto;
  max-width: 1502px;
  padding-top: 100px;
  position: sticky;
  top: 0;
`

export const RoadmapDivWrapper = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 40px;

  > img {
    width: 100px;
    height: 125px;
  }

  .imageWrapper {
    position: relative;
    .bg {
      width: 60px;
      height: 60px;
      background: #ed960f 0% 0% no-repeat padding-box;
      filter: blur(28px);
    }
  }

  .fire-gif {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .text-wrapper {
    margin-left: 57px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* display: flex;
    flex-direction: column; */
    > h5 {
      color: #ffffff;
      margin: 0;
      > span {
        color: #ed960f;
      }
    }
    > p {
      line-height: 30px !important;
      margin: 0;
      max-width: 558px;
      width: 100%;
      height: 64px;
      text-align: left;
      font: normal normal 100 21px/42px Outfit;
      letter-spacing: 0px;
      color: #ffffff;
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
  margin: 50px;
  padding: 32px;
  background: linear-gradient(145deg, #c37a08 27%, #ed960f 50%);
  box-shadow: 0px 14px 24px rgb(0 0 0 / 65%);
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 740px) {
    background: linear-gradient(125deg, #0a0d5b 5%, #808080 90%);
    padding: 40px 8px 35px 8px;
    margin: 10px;
    border-radius: 15px;
  }
`
export const LogoImagewrapper = styled.div`
  .footer_logo {
    width: 140px;
    height: 120px;
    @media screen and (max-width: 740px) {
      width: 70px;
      height: 60px;
    }
  }
`
export const LinkWrapper = styled.div`
  display: flex;
  grid-gap: 120px;
  @media screen and (max-width: 740px) {
    grid-gap: 50px;
  }
`
export const QuickWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  align-items: center;
  @media screen and (max-width: 740px) {
    grid-gap: 20px;
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
  align-self: flex-end;
  text-align: left;
  font-family: 'conthraxsb';
  font-size: 20px;
  letter-spacing: 0px;
  color: #6d6c87;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 35px;
  cursor: pointer;
  @media screen and (max-width: 740px) {
    grid-gap: 15px;
  }
`
export const PartnerContainer = styled.div`
  @media screen and (max-width: 740px) {
    background-image: url(${partnermobile});
    background-size: 100% 500px;
    background-repeat: no-repeat;
  }
`
