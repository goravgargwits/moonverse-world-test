import { Container, PartnersContent, PartnersAndInvestors } from 'styles/pages/home'
import partnerimagecontainer from 'assets/images/partnerscontainer.png'
import MoonverseInfoWrapper from 'components/home/InfoContainer'
import ProblemsWrapper from 'components/home/problemContainer'
import ParticipateWrapper from 'components/home/participateContainer'
import TokenUtilitiesWrapper from 'components/home/tokenContainer'
import PartnerWrapper from 'components/home/partnersContainer'
import InvestorWrapper from 'components/home/invsetorContainer'
import RoadmapWrapper from 'components/home/roadmapContainer'
import FooterWrapper from 'components/home/footer'
import VideoWrapper from 'components/home/videoContainer'

const Home = () => {
  return (
    <Container>
      <VideoWrapper />
      <MoonverseInfoWrapper />
      <ProblemsWrapper />
      <ParticipateWrapper />
      <TokenUtilitiesWrapper />
      <PartnersAndInvestors>
        <img src={partnerimagecontainer} />
        <PartnersContent>
          <PartnerWrapper />
          <InvestorWrapper />
        </PartnersContent>
      </PartnersAndInvestors>
      <RoadmapWrapper />
      <FooterWrapper />
    </Container>
  )
}

export default Home
