import styled from 'styled-components'
import apebackground from 'assets/images/apesection.png'
import problembackground from 'assets/images/problemsbackground.png'
import participatebackground from 'assets/images/participateswrapper.png'

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #120a1d 50%, #33155e 100%);
`
export const VideoContainer = styled.div`
  position: relative;
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
  font-weight: 100;
  letter-spacing: 0px;
  opacity: 1;
  z-index: 2;
  color: #a884f5;
`
export const Text = styled.div`
  text-align: left;
  font-family: Outfit;
  font-size: 25px;
  font-weight: 100;
  color: #ffffff;
  opacity: 1;
  width: 100%;
  max-width: 472px;
`
export const Logo = styled.div`
  position: absolute;
  z-index: 3;
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
  }
`

export const MoonverseInfo = styled.div`
  padding-top: 50px;
  height: 950px;
  background-image: url(${apebackground});
  background-size: 100%;
  background-repeat: no-repeat;
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
