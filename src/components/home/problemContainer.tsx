import { useEffect } from 'react'
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
        {/* <ProblemsTitle></ProblemsTitle> */}
        <Pointers>
          <img src={pointerbackground} />
          <DiscoverDiv>
            <ProblemsTitle>Problems We Are Solving</ProblemsTitle>
            <Discover>
              <span className="problem-loader">
                <img src={problemsSolving} />
              </span>
              <div>
                <InternalTitle>Discover</InternalTitle>
                <InternalText>Difficult to produce and integrate 3D models quickly</InternalText>
              </div>
            </Discover>
            <Discover>
              <span className="problem-loader">
                <img src={problemsSolving1} />
              </span>
              <div>
                <InternalTitle>3D Model Scalability</InternalTitle>
                <InternalText>Difficult to produce and integrate 3D models quickly</InternalText>
              </div>
            </Discover>
            <Discover>
              <span className="problem-loader">
                <img src={problemsSolving2} />
              </span>
              <div>
                <InternalTitle>Monetization</InternalTitle>
                <InternalText>
                  Profile Picture and Gaming projects are unable to provide a comprehensive “Earn” mechanism after mint
                  or during game development
                </InternalText>
              </div>
            </Discover>
          </DiscoverDiv>
        </Pointers>
      </Problems>
    </ScrollContainer>
  )
}

export default ProblemsWrapper
