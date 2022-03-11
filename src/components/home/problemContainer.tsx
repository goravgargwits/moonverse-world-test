import {
  ScrollContainer,
  Problems,
  ProblemsTitle,
  Pointers,
  Discover,
  Model,
  Monetization,
  InternalTitle,
  InternalText,
  DiscoverDiv,
} from 'styles/pages/home'
import pointerbackground from 'assets/images/bubble_transparent.png'
import problemsSolving from 'assets/svg/problem-1.svg'
import problemsSolving1 from 'assets/svg/problem-2.svg'
import problemsSolving2 from 'assets/svg/problem-3.svg'

const ProblemsWrapper = () => {
  return (
    <ScrollContainer id="problem-container">
      <Problems>
        <ProblemsTitle></ProblemsTitle>
        <Pointers>
          <img src={pointerbackground} />
          <DiscoverDiv>
            <ProblemsTitle>Problems We Are Solving</ProblemsTitle>
            <Discover>
              <span>
                <img src={problemsSolving} />
              </span>
              <InternalTitle>Discover</InternalTitle>
              <InternalText>Current NFT platforms are lacking discovery and social elements</InternalText>
            </Discover>
            <Model>
              <span>
                <img src={problemsSolving1} />
              </span>
              <InternalTitle>3D Model Scalability</InternalTitle>
              <InternalText>Difficult to produce and integrate 3D models quickly</InternalText>
            </Model>
            <Monetization>
              <span>
                <img src={problemsSolving2} />
              </span>
              <InternalTitle>Monetization</InternalTitle>
              <InternalText>
                Profile Picture and Gaming projects are unable to provide a comprehensive “Earn” mechanism after mint or
                during game development
              </InternalText>
            </Monetization>
          </DiscoverDiv>
        </Pointers>
      </Problems>
    </ScrollContainer>
  )
}

export default ProblemsWrapper
