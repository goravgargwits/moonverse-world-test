import { useEffect } from 'react'
import { Roadmap, RoadmapHeading, ScrollContainer, RoadmapDivWrapper } from 'styles/pages/home'
import fireGif from 'assets/gif/fire.gif'

const RoadmapWrapper = () => {
  return (
    <ScrollContainer>
      <Roadmap>
        <RoadmapHeading>
          ROAD<span>MAP</span>
        </RoadmapHeading>
        <RoadmapDivWrapper>
          <div className="imageWrapper">
            <div className="bg"></div>
            <img src={fireGif} alt="roadmap-points" className="fire-gif" />
          </div>
          <div className="text-wrapper">
            <h5>
              Q1 <span>2022</span>
            </h5>
            <p>NFT marketplace Launch (done) Open World Alpha Exclusive NFT Drop Initial Partnership Projects Launch</p>
          </div>
        </RoadmapDivWrapper>
        <RoadmapDivWrapper>
          <div className="imageWrapper">
            <div className="bg"></div>
            <img src={fireGif} alt="roadmap-points" className="fire-gif" />
          </div>
          <div className="text-wrapper">
            <h5>
              Q2 <span>2022</span>
            </h5>
            <p>Metaverse land sale Pvp game beta</p>
          </div>
        </RoadmapDivWrapper>
        <RoadmapDivWrapper>
          <div className="imageWrapper">
            <div className="bg"></div>
            <img src={fireGif} alt="roadmap-points" className="fire-gif" />
          </div>
          <div className="text-wrapper">
            <h5>
              Q3 <span>2022</span>
            </h5>
            <p>Metaverse land sale Pvp game beta</p>
          </div>
        </RoadmapDivWrapper>
        <RoadmapDivWrapper>
          <div className="imageWrapper">
            <div className="bg"></div>
            <img src={fireGif} alt="roadmap-points" className="fire-gif" />
          </div>
          <div className="text-wrapper">
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
