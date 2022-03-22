import {
  ScrollContainer,
  Problems,
  ProblemsTitle,
  Pointers,
  Discover,
  InternalTitle,
  InternalText,
  DiscoverDiv,
} from 'styles/pages/home'
import problemsSolving from 'assets/svg/problem-1.svg'
import problemsSolving1 from 'assets/svg/problem-2.svg'
import problemsSolving2 from 'assets/svg/problem-3.svg'

const ProblemsWrapper = () => {
  return (
    <ScrollContainer id="problem-container">
      <Problems>
        {/* <ProblemsTitle></ProblemsTitle> */}
        <Pointers>
          <DiscoverDiv>
            <ProblemsTitle>Limitless Potential for Creativity</ProblemsTitle>
            <Discover>
              <span className="problem-loader">
                <img src={problemsSolving} />
              </span>
              <div>
                <InternalTitle>Discover</InternalTitle>
                <InternalText>Enter the magical worlds and be a part of the community like never before</InternalText>
              </div>
            </Discover>
            <Discover>
              <span className="problem-loader">
                <img src={problemsSolving1} />
              </span>
              <div>
                <InternalTitle>Create</InternalTitle>
                <InternalText>Create your full set of 3D avatars through a few clicks</InternalText>
              </div>
            </Discover>
            <Discover>
              <span className="problem-loader">
                <img src={problemsSolving2} />
              </span>
              <div>
                <InternalTitle>Earn</InternalTitle>
                <InternalText>
                  Have fun exploring while also receiving rewards from quests, events and games
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
