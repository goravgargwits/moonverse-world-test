import styled from 'styled-components'
import apebackground from 'assets/images/moonversewrapper.png'
import apesbackground from 'assets/images/moonversemobilewrapper.png'
import problembackground from 'assets/images/problemsbackground.png'
import problemnewbackground from 'assets/images/problemmobilewrapper.png'
import pointerbackground from 'assets/images/cube.png'
import partnermobile from 'assets/images/partnersmobilebackground.png'
import roadmapbackground from 'assets/images/mobileroadmapwrapper.png'

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #120a1d 40%, #1f0a3c 50%);
  overflow-x: hidden;
  @media screen and (max-width: 740px) {
    background: #120a1d;
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
  padding-left: 70px;
  max-width: 475px;
  @media screen and (max-width: 740px) {
    padding-left: 30px;
    max-width: 250px;
  }
`
export const Title = styled.div`
  text-align: left;
  font-size: 52px;
  font-family: Outfit;
  font-weight: 200;
  letter-spacing: 0px;
  opacity: 1;
  z-index: 2;
  color: #a884f5;
  text-shadow: #a884f5 5px 0 15px;
  @media screen and (max-width: 740px) {
    font-size: 25px;
  }
`
export const Text = styled.div`
  text-align: left;
  font-family: Outfit;
  font-size: 25px;
  font-weight: 200;
  color: #ffffff;
  opacity: 1;
  width: 100%;
  max-width: 472px;
  @media screen and (max-width: 740px) {
    font-size: 12px;
  }
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
    font-size: 15px;
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

export const MoonverseInfo = styled.div`
  padding-top: 50px;
  height: 900px;
  background-image: url(${apebackground});
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
  display: flex;
  height: 832px;
  background-image: url(${problembackground});
  padding-right: 50px;
  background-repeat: no-repeat;
  padding-top: 20px;

  @media screen and (max-width: 1050px) {
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
  }
  @media screen and (max-width: 700px) {
    padding-top: 20px;

    height: 500px;
  }
`

export const ProblemsTitle = styled.div`
  padding-left: 74px;
  text-align: left;
  font-size: 52px;
  font-family: Outfit;
  font-weight: 200;
  letter-spacing: 0px;
  opacity: 1;
  z-index: 3;
  color: #a884f5;
  width: 100%;
  max-width: 582px;
  @media screen and (max-width: 740px) {
    font-size: 25px;
    padding-left: 24px;
  }
`
export const ParticipateContainer = styled.div`
  width: 100%;
  height: 800px;

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
    background: #262166 0% 0% no-repeat padding-box;
    box-shadow: inset 0px 17px 6px #00000029, 0px 3px 6px #5a5a5a29;
    border-radius: 79px;
    opacity: 0.58;
    color: #ffffff;
    height: 59px;
    width: 100%;
    max-width: 135px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    text-transform: capitalize;
    opacity: 1;
    :hover {
      background: #262166 0% 0% no-repeat padding-box;
      box-shadow: inset 0px 17px 6px #00000029, 0px 3px 6px #5a5a5a29;
      transform: scale(1.1);
      transition: 0.2s;
    }
  }
`
export const PartcipateText = styled.div`
  text-align: left;
  font-family: Outfit;
  font-size: 25px;
  font-weight: 300;
  color: #ffffff;
  opacity: 1;
  max-width: 1310px;
  z-index: 2;
  @media screen and (max-width: 720px) {
    font-size: 11px;
    max-width: 260px;
  }
`
export const TextWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  padding-left: 70px;
  align-self: flex-start;
  z-index: 2;
  grid-column: 1;
  padding-right: 50px;
  @media screen and (max-width: 720px) {
    padding-left: 25px;
  }
`

export const Pointers = styled.div`
  display: grid;
  width: 100%;
  background-image: url(${pointerbackground});
  background-position-x: center;
  background-position-y: center;
  background-size: 795px 795px;
  background-repeat: no-repeat;
  @media screen and (max-width: 1450px) {
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
  }
`
export const Discover = styled.div`
  width: 100%;
  max-width: 303px;
  background: #262166 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 17px 6px #00000029, 0px 3px 6px #00000029;
  border-radius: 12px;
  opacity: 1;
  padding: 15px;
  display: grid;
  grid-gap: 5px;
  align-self: center;

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
  width: 100%;
  max-width: 243px;
  background: #262166 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 17px 6px #00000029, 0px 3px 6px #00000029;
  border-radius: 12px;
  opacity: 1;
  padding: 15px;
  display: grid;
  grid-gap: 5px;

  justify-self: flex-end;
  align-self: center;
  @media screen and (max-width: 720px) {
    max-width: 173px;
    justify-self: flex-start;
  }
`
export const Monetization = styled.div`
  width: 100%;
  max-width: 434px;
  background: #262166 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 17px 6px #00000029, 0px 3px 6px #00000029;
  border-radius: 12px;
  opacity: 1;
  padding: 15px;
  display: grid;
  grid-gap: 5px;

  justify-self: center;
  align-self: center;
  @media screen and (max-width: 1120px) {
    align-self: end;
  }
  @media screen and (max-width: 720px) {
    max-width: 193px;
  }
`
export const InternalTitle = styled.div`
  text-align: left;
  font-family: Outfit;
  font-size: 23px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media screen and (max-width: 720px) {
    font-size: 12px;
  }
`
export const InternalText = styled.div`
  text-align: left;
  font-family: Outfit;
  font-size: 17px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media screen and (max-width: 720px) {
    font-size: 8px;
  }
`
export const TokenContainer = styled.div``
export const TokenTextWrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  display: grid;
  padding-left: 74px;
  grid-gap: 20px;
  @media screen and (max-width: 720px) {
    padding-left: 30px;
    max-width: 250px;
  }
`
export const TokenText = styled.div`
  text-align: left;
  font-family: Outfit;
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
  display: grid;
  justify-content: center;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(500px, 3fr));
  padding: 0px 70px 70px 70px;
  align-items: center;
  justify-items: center;
  @media screen and (max-width: 720px) {
    grid-gap: 10px;
  }
`
export const UtilitiesWrapper = styled.div`
  justify-content: center;
  .utilities_type {
    @media screen and (max-width: 740px) {
      width: 290px;
    }
  }
  .nft_type {
    @media screen and (max-width: 740px) {
      width: 310px;
    }
  }

  :hover {
    transform: scale(0.95);
    transition: 0.3s;
    transition-timing-function: ease-out;
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
  font-family: Outfit;
  font-weight: 200;
  letter-spacing: 0px;
  opacity: 1;
  z-index: 2;
  color: #a884f5;
  margin-top: 20px;
  fill-opacity: 100%;
  max-width: 1446px;
  text-shadow: #a884f5 5px 0 15px;
  @media screen and (max-width: 740px) {
    font-size: 25px;
  }
`
export const RoadmapHeading = styled.div`
  text-align: center;
  font-size: 52px;
  font-family: Outfit;
  font-weight: 200;
  letter-spacing: 0px;
  opacity: 1;
  z-index: 2;
  color: #a884f5;
  margin-top: 20px;
  margin-bottom: 0px;
  text-shadow: #a884f5 5px 0 15px;
  @media screen and (max-width: 740px) {
    font-size: 25px;
    margin-top: 70px;
    margin-bottom: 30px;
  }
`
export const Roadmap = styled.div`
  margin-top: 20px;
`
export const RoadmapImagewapper = styled.div`
  display: flex;
`
export const RoadmapContent = styled.div`
  .mobile_roadmap {
    display: none;
    @media screen and (max-width: 740px) {
      display: block;
      background: url(${roadmapbackground});
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
  background: linear-gradient(145deg, #0a0c34 27%, #240e44 50%);
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
  font-family: Outfit;
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
  font-family: Outfit;
  font-size: 25px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 10px;
  @media screen and (max-width: 740px) {
    font-size: 15px;
  }
`
export const ChannelsWrapper = styled.div`
  align-self: flex-end;
  text-align: left;
  font-family: Outfit;
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
