import styled from 'styled-components'
import apebackground from 'assets/images/moonversewrapper.png'
import problembackground from 'assets/images/problemsbackground.png'
import participatebackground from 'assets/images/participateswrapper.png'

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #120a1d 40%, #1f0a3c 50%);
`
export const VideoContainer = styled.div`
  position: relative;
  height: 980px;
  @media screen and (max-width: 1440px) {
    height: 750px;
  }
  @media screen and (max-width: 1040px) {
    height: 550px;
  }
`
export const TextContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  padding-left: 70px;
  max-width: 475px;
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
`
export const Logo = styled.div`
  position: absolute;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  }
`
export const Scroll = styled.div`
  position: absolute;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  bottom: 0;
  z-index: 3;
  .scrollbar {
    max-width: 100px;
    margin: 0 auto;
    display: flex;
    cursor: pointer;
  }
`
export const Player = styled.div`
  z-index: 1;
  .player {
    width: 100% !important;
    height: 100vh !important;
    > video {
      height: fit-content !important;
    }
  }
`

export const MoonverseInfo = styled.div`
  padding-top: 50px;
  height: 950px;
  background-image: url(${apebackground});
  background-size: 100%;
  background-repeat: no-repeat;
  @media screen and (max-width: 1440px) {
    height: 702px;
  }
  @media screen and (max-width: 1000px) {
    height: 450px;
  }
`

export const Problems = styled.div`
  display: flex;
  height: 832px;
  background-image: url(${problembackground});
  padding-right: 50px;
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
`
export const ParticipateContainer = styled.div`
  width: 100%;
  height: 1000px;
  background-image: url(${participatebackground});

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
`
export const TextWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  padding-left: 70px;
  align-self: flex-start;
  z-index: 2;
  grid-column: 1;
  padding-right: 50px;
`

export const Pointers = styled.div`
  display: grid;
  width: 100%;
`
export const Discover = styled.div`
  width: 100%;
  max-width: 303px;
  height: 80px;
  background: #262166 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 17px 6px #00000029, 0px 3px 6px #00000029;
  border-radius: 12px;
  opacity: 1;
  padding: 15px;
  display: grid;
  align-self: flex-end;
`
export const Model = styled.div`
  width: 100%;
  max-width: 243px;
  height: 100px;
  background: #262166 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 17px 6px #00000029, 0px 3px 6px #00000029;
  border-radius: 12px;
  opacity: 1;
  padding: 15px;
  display: grid;
  justify-self: flex-end;
  align-self: center;
`
export const Monetization = styled.div`
  width: 100%;
  max-width: 243px;
  max-width: 434px;
  height: 110px;
  background: #262166 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 17px 6px #00000029, 0px 3px 6px #00000029;
  border-radius: 12px;
  opacity: 1;
  padding: 15px;
  display: grid;
  justify-self: center;
  align-self: center;
`
export const InternalTitle = styled.div`
  text-align: left;
  font-family: Outfit;
  font-size: 23px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`
export const InternalText = styled.div`
  text-align: left;
  font-family: Outfit;
  font-size: 18px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`
export const TokenContainer = styled.div``
export const TokenTextWrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  display: grid;
  padding-left: 74px;
  grid-gap: 20px;
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
`
export const Utilities = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 30px;
  /* grid-template-columns: auto auto auto; */
  grid-template-columns: repeat(auto-fit, minmax(500px, 3fr));
  padding: 0px 70px 70px 70px;
  align-items: center;
  justify-items: center;
`
export const UtilitiesWrapper = styled.div`
  justify-content: center;
  :hover {
    transform: scale(0.9);
  }
`
export const Partners = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  justify-content: center;
`
export const PartnersLogo = styled.div`
  justify-content: center;
`

export const PartnersAndInvestors = styled.div`
  display: flex;
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
  max-width: 1210px;
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
  fill-opacity: 100%;
`
export const Roadmap = styled.div`
  margin-top: 20px;
`
export const RoadmapImagewapper = styled.div`
  display: flex;
`
export const RoadmapContent = styled.div``

export const FooterContainer = styled.div`
  margin: 50px;
  padding: 32px;
  background: linear-gradient(145deg, #0a0e60 27%, #240e44 50%);
  box-shadow: 0px 14px 24px rgb(0 0 0 / 65%);

  border-radius: 50px;
  display: flex;
  justify-content: space-between;
`
export const LogoImagewrapper = styled.div``
export const LinkWrapper = styled.div`
  display: flex;
  grid-gap: 120px;
`
export const QuickWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  align-items: center;
`
export const Links = styled.div`
  text-align: left;
  font-family: Outfit;
  font-size: 20px;
  letter-spacing: 0px;
  color: #6d6c87;
  opacity: 1;
  cursor: pointer;
`
export const QuicklinkTitle = styled.div`
  text-align: left;
  font-family: Outfit;
  font-size: 25px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 10px;
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
`
