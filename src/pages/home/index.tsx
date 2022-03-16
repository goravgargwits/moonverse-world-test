import { Container } from 'styles/pages/home'
import MoonverseInfoWrapper from 'components/home/InfoContainer'
import ProblemsWrapper from 'components/home/problemContainer'
import ParticipateWrapper from 'components/home/participateContainer'
import TokenUtilitiesWrapper from 'components/home/tokenContainer'
import RoadmapWrapper from 'components/home/roadmapContainer'
import FooterWrapper from 'components/home/footer'
import VideoWrapper from 'components/home/videoContainer'
import AstroModel from 'components/home/astroModel'

const Home = () => {
  return (
    <Container>
      <VideoWrapper />
      <div className="canvas-container">
        <AstroModel />
        <MoonverseInfoWrapper />
        <ProblemsWrapper />
        <ParticipateWrapper />
        <TokenUtilitiesWrapper />
        <RoadmapWrapper />
        <FooterWrapper />
      </div>
    </Container>
  )
}

export default Home
