import { Container, VideoContainer, Logo, Scroll, Player } from 'styles/pages/home'
import ReactPlayer from 'react-player'

import homevideo from 'assets/video/homevideo.mp4'
import logo from 'assets/images/logo.png'
import scroll from 'assets/images/scroll-bar.png'
import MoonverseInfoWrapper from 'components/home/InfoContainer'
import ProblemsWrapper from 'components/home/problemContainer'
import ParticipateWrapper from 'components/home/participateContainer'

const Home = () => {
  return (
    <Container>
      <VideoContainer>
        <Logo>
          <img src={logo} />
        </Logo>
        <Player>
          <ReactPlayer playing loop className="player" url={homevideo} />
        </Player>
        <Scroll>
          <img src={scroll} className="scrollbar" />
        </Scroll>
      </VideoContainer>
      <MoonverseInfoWrapper />
      <ProblemsWrapper />
      <ParticipateWrapper />
    </Container>
  )
}

export default Home
