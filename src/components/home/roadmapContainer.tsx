import { useEffect } from 'react'
import { Roadmap, RoadmapHeading, ScrollContainer, RoadmapDivWrapper } from 'styles/pages/home'
import RoadmapPoints from 'assets/images/RoadmapPoints.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import fireGif from 'assets/gif/fire.gif'

const RoadmapWrapper = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
    })
  }, [])
  return (
    <ScrollContainer>
    <Roadmap data-aos={'fade-up'} data-aos-delay={1000}>
      <RoadmapHeading>ROAD<span>MAP</span></RoadmapHeading>
  <RoadmapDivWrapper>
    <img src={RoadmapPoints} alt="roadmap-points" />
    <img src={fireGif} alt="roadmap-points" className='fire-gif' />
    <div>
    <h5>
      Q1 <span>2022</span>
    </h5>
    <p>NFT marketplace Launch (done) Open World Alpha Exclusive NFT Drop Initial Partnership Projects Launch</p>
    </div>
  </RoadmapDivWrapper>
  <RoadmapDivWrapper>
    <img src={RoadmapPoints} alt="roadmap-points" />
    <img src={fireGif} alt="roadmap-points" className='fire-gif' />
    <div>
    <h5>
      Q2 <span>2022</span>
    </h5>
    <p>Metaverse land sale Pvp game beta</p>
    </div>
  </RoadmapDivWrapper>
  <RoadmapDivWrapper>
    <img src={RoadmapPoints} alt="roadmap-points" />
    <img src={fireGif} alt="roadmap-points" className='fire-gif' />
    <div>
    <h5>
      Q3 <span>2022</span>
    </h5>
    <p>Metaverse land sale Pvp game beta</p>
    </div>
  </RoadmapDivWrapper>
  <RoadmapDivWrapper>
    <img src={RoadmapPoints} alt="roadmap-points" />
    <img src={fireGif} alt="roadmap-points" className='fire-gif' />
    <div>
    <h5>
      Q1 <span>2023</span>
    </h5>
    <p>Official Launch</p>
    </div>
  </RoadmapDivWrapper>
    </Roadmap>
    </ScrollContainer>
  )
}

export default RoadmapWrapper
