import {
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

const ProblemsWrapper = () => {
  return (
    <Problems>
      <ProblemsTitle>Problems We Are Solving</ProblemsTitle>

      <Pointers>
        <img src={pointerbackground} />
        <DiscoverDiv>
          <Discover>
            <InternalTitle>Discover</InternalTitle>
            <InternalText>Current NFT platforms are lacking discovery and social elements</InternalText>
          </Discover>
          <Model>
            <InternalTitle>3D Model Scalability</InternalTitle>
            <InternalText>Difficult to produce and integrate 3D models quickly</InternalText>
          </Model>
          <Monetization>
            <InternalTitle>Monetization</InternalTitle>
            <InternalText>
              Profile Picture and Gaming projects are unable to provide a comprehensive “Earn” mechanism after mint or
              during game development
            </InternalText>
          </Monetization>
        </DiscoverDiv>
      </Pointers>
    </Problems>
  )
}

export default ProblemsWrapper
