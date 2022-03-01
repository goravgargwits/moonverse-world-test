import { Roadmap, RoadmapImagewapper, RoadmapHeading, RoadmapContent } from 'styles/pages/home'
import roadmapwrapper from 'assets/images/roadmap.png'
import mobileroadmapwrapper from 'assets/images/mobileroadmap.png'

const RoadmapWrapper = () => {
  return (
    <Roadmap>
      <RoadmapHeading>Roadmap</RoadmapHeading>
      <RoadmapImagewapper>
        <RoadmapContent>
          <img src={roadmapwrapper} className="web_roadmap" />
          <img src={mobileroadmapwrapper} className="mobile_roadmap" />
        </RoadmapContent>
      </RoadmapImagewapper>
    </Roadmap>
  )
}

export default RoadmapWrapper
