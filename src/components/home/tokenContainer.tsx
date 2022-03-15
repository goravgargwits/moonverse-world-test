import { useEffect } from 'react'
import {
  TokenContainer,
  TokenTextWrapper,
  Utilities,
  UtilitiesWrapper,
  ScrollContainer,
  TokenTitle,
} from 'styles/pages/home'
import tokenfirst from 'assets/images/tokenone.png'
import tokentwo from 'assets/images/tokentwo.png'
import tokenThree from 'assets/images/tokenThree.png'
import tokenFour from 'assets/images/tokenfour.png'
import tokenFive from 'assets/images/tokenfive.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const TokenUtilitiesWrapper = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
    })
  }, [])
  return (
    <ScrollContainer id="token-utilities">
      <TokenContainer
      // data-aos={'fade-up'} data-aos-delay={1000}
      >
        <TokenTextWrapper>
          <TokenTitle>Token Utilities</TokenTitle>
          {/* <TokenText>$MOONV will be the utility token for the Moonverse economy. Utilities include:</TokenText> */}
        </TokenTextWrapper>
        <Utilities>
          <UtilitiesWrapper>
            <img src={tokenfirst} className="utilities_type" />
          </UtilitiesWrapper>
          <UtilitiesWrapper>
            <img src={tokentwo} className="utilities_type" />
          </UtilitiesWrapper>
          <UtilitiesWrapper>
            <img src={tokenThree} className="utilities_type" />
          </UtilitiesWrapper>
          <UtilitiesWrapper>
            <img src={tokenFour} className="utilities_type" />
          </UtilitiesWrapper>
          <UtilitiesWrapper>
            <img src={tokenFive} className="utilities_type" />
          </UtilitiesWrapper>
          {/* <UtilitiesWrapper>
          <img src={tokenfirst} className="utilities_type" />
        </UtilitiesWrapper>
        <UtilitiesWrapper>
          <img src={nfttoken} className="nft_type" width="600" />
        </UtilitiesWrapper>
        <UtilitiesWrapper>
          <img src={tokenthird} className="utilities_type" />
        </UtilitiesWrapper>
        <UtilitiesWrapper>
          <img src={tokenfourth} className="utilities_type" />
        </UtilitiesWrapper>
        <UtilitiesWrapper>
          <img src={tokenfifth} className="utilities_type" />
        </UtilitiesWrapper>
        <UtilitiesWrapper>
          <img src={tokensixth} className="utilities_type" />
        </UtilitiesWrapper> */}
        </Utilities>
      </TokenContainer>
    </ScrollContainer>
  )
}

export default TokenUtilitiesWrapper
