import { Roadmap, RoadmapImagewapper, RoadmapHeading, RoadmapContent } from 'styles/pages/home'
import roadmapwrapper from 'assets/images/roadmap.png'

const RoadmapWrapper = () => {
  return (
    <Roadmap>
      <RoadmapHeading>Roadmap</RoadmapHeading>
      <RoadmapImagewapper>
        <RoadmapContent>
          <img src={roadmapwrapper} width="100%" />
        </RoadmapContent>
      </RoadmapImagewapper>
    </Roadmap>
  )
}

export default RoadmapWrapper
