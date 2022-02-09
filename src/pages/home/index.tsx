import { Container, VideoContainer, MoonverseInfo } from 'styles/pages/home'
import ReactPlayer from 'react-player'

const homevideo = require('assets/video/homevideo.mp4')
const Home = () => (
  <Container>
    <VideoContainer>
      <ReactPlayer url={homevideo} controls playing width="100%" height="100vh" />
    </VideoContainer>
    <MoonverseInfo>What is Moonverse</MoonverseInfo>
  </Container>
)

export default Home
