import { TokenContainer, Title, TokenTextWrapper, TokenText, Utilities, UtilitiesWrapper } from 'styles/pages/home'
import tokenfirst from 'assets/images/tokenone.png'
import nfttoken from 'assets/images/nfttoken.png'
import tokenthird from 'assets/images/tokentthree.png'
import tokenfourth from 'assets/images/tokenfour.png'
import tokenfifth from 'assets/images/tokenfive.png'
import tokensixth from 'assets/images/tokensix.png'

const TokenUtilitiesWrapper = () => {
  return (
    <TokenContainer>
      <TokenTextWrapper>
        <Title>Token Utilities</Title>
        <TokenText>$MOONV will be the utility token for the Moonverse economy. Utilities include:</TokenText>
      </TokenTextWrapper>
      <Utilities>
        <UtilitiesWrapper>
          <img src={tokenfirst} />
        </UtilitiesWrapper>
        <UtilitiesWrapper>
          <img src={nfttoken} width="600" />
        </UtilitiesWrapper>
        <UtilitiesWrapper>
          <img src={tokenthird} />
        </UtilitiesWrapper>
        <UtilitiesWrapper>
          <img src={tokenfourth} />
        </UtilitiesWrapper>
        <UtilitiesWrapper>
          <img src={tokenfifth} />
        </UtilitiesWrapper>
        <UtilitiesWrapper>
          <img src={tokensixth} />
        </UtilitiesWrapper>
      </Utilities>
    </TokenContainer>
  )
}

export default TokenUtilitiesWrapper
