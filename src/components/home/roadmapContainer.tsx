import { Roadmap, RoadmapHeading, ScrollContainer, RoadmapDivWrapper, RoadmapConatinerWrapper } from 'styles/pages/home'
import fireGif from 'assets/gif/fire.gif'

const RoadmapWrapper = () => {
  return (
    <ScrollContainer>
      <RoadmapConatinerWrapper>
        <Roadmap>
          <RoadmapHeading>
            Peek Into&nbsp;<span>The Future</span>
          </RoadmapHeading>
          <RoadmapDivWrapper>
            <span className="imageWrapper">
              <img src={fireGif} alt="roadmap-points" className="fire-gif" />
            </span>
            <div className="text-wrapper">
              <h5>
                Q2 <span>2022</span>
              </h5>
              <p>Closed Alpha</p>
              <p>World Editor Beta</p>
              <p>Re-skin System Beta</p>
            </div>
          </RoadmapDivWrapper>
          <RoadmapDivWrapper>
            <span className="imageWrapper">
              <img src={fireGif} alt="roadmap-points" className="fire-gif" />
            </span>
            <div className="text-wrapper">
              <h5>
                Q3 <span>2022</span>
              </h5>
              <p>Alpha</p>
              <p>Token Launch</p>
              <p>Genesis NFT</p>
            </div>
          </RoadmapDivWrapper>
          <RoadmapDivWrapper>
            <span className="imageWrapper">
              <img src={fireGif} alt="roadmap-points" className="fire-gif" />
            </span>
            <div className="text-wrapper">
              <h5>
                Q4 <span>2022</span>
              </h5>
              <p>Land Sales</p>
              <p>Beta</p>
            </div>
          </RoadmapDivWrapper>
          <RoadmapDivWrapper>
            <span className="imageWrapper">
              <img src={fireGif} alt="roadmap-points" className="fire-gif" />
            </span>
            <div className="text-wrapper">
              <h5>
                Q1 <span>2023</span>
              </h5>
              <p>Official Launch</p>
            </div>
          </RoadmapDivWrapper>
        </Roadmap>
      </RoadmapConatinerWrapper>
    </ScrollContainer>
  )
}

export default RoadmapWrapper
