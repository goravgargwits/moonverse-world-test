import { Roadmap, RoadmapImagewapper, RoadmapHeading, RoadmapContent, ScrollContainer, RoadmapDivWrapper } from 'styles/pages/home'
import roadmapwrapper from 'assets/images/roadmap.png'
import RoadmapPoints from 'assets/images/RoadmapPoints.png'

const RoadmapWrapper = () => {
  return (
    <ScrollContainer>
    <Roadmap>
      <RoadmapHeading>ROAD<span>MAP</span></RoadmapHeading>
  <RoadmapDivWrapper>
    <img src={RoadmapPoints} alt="roadmap-points" />
    <div>
    <h5>
      Q1 <span>2022</span>
    </h5>
    <p>NFT marketplace Launch (done) Open World Alpha Exclusive NFT Drop Initial Partnership Projects Launch</p>
    </div>
  </RoadmapDivWrapper>
  <RoadmapDivWrapper>
    <img src={RoadmapPoints} alt="roadmap-points" />
    <div>
    <h5>
      Q2 <span>2022</span>
    </h5>
    <p>Metaverse land sale Pvp game beta</p>
    </div>
  </RoadmapDivWrapper>
  <RoadmapDivWrapper>
    <img src={RoadmapPoints} alt="roadmap-points" />
    <div>
    <h5>
      Q3 <span>2022</span>
    </h5>
    <p>Metaverse land sale Pvp game beta</p>
    </div>
  </RoadmapDivWrapper>
  <RoadmapDivWrapper>
    <img src={RoadmapPoints} alt="roadmap-points" />
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
