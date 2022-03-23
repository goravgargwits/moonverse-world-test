import { useContext, useEffect } from 'react'
import { Container } from 'styles/pages/home'
import MoonverseInfoWrapper from 'components/home/infoContainer'
import ProblemsWrapper from 'components/home/problemContainer'
import ParticipateWrapper from 'components/home/participateContainer'
import TokenUtilitiesWrapper from 'components/home/tokenContainer'
import RoadmapWrapper from 'components/home/roadmapContainer'
import FooterWrapper from 'components/home/footer'
import VideoWrapper from 'components/home/videoContainer'
import AstroModel from 'components/home/astroModel'
import { LoaderContext } from 'context/LoaderContext'
import Loader from 'components/home/loader'

const Home = () => {
  const [loader]: any = useContext(LoaderContext)

  useEffect(() => {
    if (loader) {
      document.body.style.overflowY = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflowY = 'auto'
      document.body.style.touchAction = 'auto'
    }
  }, [loader])

  return (
    <>
      {loader && <Loader />}
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
