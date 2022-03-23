import {
  TokenContainer,
  TokenTextWrapper,
  Utilities,
  UtilitiesWrapper,
  ScrollContainer,
  TokenTitle,
  TokenContainerWrapper,
} from 'styles/pages/home'
import tokenfirst from 'assets/images/tokenone.png'
import tokentwo from 'assets/images/tokentwo.png'
import tokenThree from 'assets/images/tokenthree.png'
import tokenFour from 'assets/images/tokenfour.png'
import tokenFive from 'assets/images/tokenfive.png'

const TokenUtilitiesWrapper = () => {
  return (
    <ScrollContainer id="token-utilities">
      <TokenContainer>
        <TokenContainerWrapper>
          <TokenTextWrapper>
            <TokenTitle>Our Utility Token $SEEK</TokenTitle>
          </TokenTextWrapper>
          <Utilities>
            <UtilitiesWrapper>
              <img src={tokenfirst} className="utilities_type" />
              <p>Each $SEEK represents a vote in the platform’s future</p>
            </UtilitiesWrapper>
            <UtilitiesWrapper>
              <img src={tokentwo} className="utilities_type" />
              <p>Craft your customised avatars</p>
            </UtilitiesWrapper>
            <UtilitiesWrapper>
              <img src={tokenThree} className="utilities_type" />
              <p>Complete your daily quests and campaigns</p>
            </UtilitiesWrapper>
            <UtilitiesWrapper>
              <img src={tokenFour} className="utilities_type" />
              <p>Create accessories that bring you further in your journey</p>
            </UtilitiesWrapper>
            <UtilitiesWrapper>
              <img src={tokenFive} className="utilities_type" />
              <p>Embark on a fun adventure in a myriad of games</p>
            </UtilitiesWrapper>
          </Utilities>
        </TokenContainerWrapper>
      </TokenContainer>
    </ScrollContainer>
  )
}

export default TokenUtilitiesWrapper
