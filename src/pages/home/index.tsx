import { Container } from 'styles/pages/home'
// import { PartnersContent, PartnersAndInvestors } from 'styles/pages/home'
// import partnerimagecontainer from 'assets/images/partnerscontainer.png'
import MoonverseInfoWrapper from 'components/home/InfoContainer'
import ProblemsWrapper from 'components/home/problemContainer'
import ParticipateWrapper from 'components/home/participateContainer'
import TokenUtilitiesWrapper from 'components/home/tokenContainer'
// import PartnerWrapper from 'components/home/partnersContainer'
// import InvestorWrapper from 'components/home/invsetorContainer'
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
      </div>
      {/*<PartnersAndInvestors>*/}
      {/*  <img className="partner_background" src={partnerimagecontainer} />*/}
      {/*<PartnersContent>*/}
      {/*  <PartnerWrapper />*/}
      {/*<InvestorWrapper />*/}
      {/*</PartnersContent>*/}
      {/*</PartnersAndInvestors>*/}
     
      <FooterWrapper />
    </Container>
  )
}

export default Home
