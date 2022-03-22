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
              <p>Land purchase and development</p>
            </UtilitiesWrapper>
            <UtilitiesWrapper>
              <img src={tokentwo} className="utilities_type" />
              <p>Daily quests and staking</p>
            </UtilitiesWrapper>
            <UtilitiesWrapper>
              <img src={tokenThree} className="utilities_type" />
              <p>NFT assest crafting</p>
            </UtilitiesWrapper>
            <UtilitiesWrapper>
              <img src={tokenFour} className="utilities_type" />
              <p>3D avatar creation</p>
            </UtilitiesWrapper>
            <UtilitiesWrapper>
              <img src={tokenFive} className="utilities_type" />
              <p>3D avatar creation</p>
            </UtilitiesWrapper>
          </Utilities>
        </TokenContainerWrapper>
      </TokenContainer>
    </ScrollContainer>
  )
}

export default TokenUtilitiesWrapper
