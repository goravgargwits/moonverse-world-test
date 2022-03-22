import { useContext, useEffect } from 'react'
import { Container, LoaderContainer } from 'styles/pages/home'
import MoonverseInfoWrapper from 'components/home/InfoContainer'
import ProblemsWrapper from 'components/home/problemContainer'
import ParticipateWrapper from 'components/home/participateContainer'
import TokenUtilitiesWrapper from 'components/home/tokenContainer'
import RoadmapWrapper from 'components/home/roadmapContainer'
import FooterWrapper from 'components/home/footer'
import VideoWrapper from 'components/home/videoContainer'
import AstroModel from 'components/home/astroModel'
import { LoaderContext } from 'Context/Context'
import Loader from 'assets/gif/loader.gif'

const Home = () => {
  const [loader]: any = useContext(LoaderContext)

  useEffect(() => {
    if (loader) {
      document.body.style.overflowY = 'none'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [loader])

  return (
    <>
      {loader && (
        <LoaderContainer>
          <img src={Loader} />
        </LoaderContainer>
      )}

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
    </>
  )
}

export default Home
