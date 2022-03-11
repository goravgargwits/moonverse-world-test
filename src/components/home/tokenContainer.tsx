import { ScrollContainer, TokenContainer, Title, TokenTextWrapper, TokenText, Utilities, UtilitiesWrapper } from 'styles/pages/home'
import tokenfirst from 'assets/images/tokenone.png'
import nfttoken from 'assets/images/nfttoken.png'
import tokenthird from 'assets/images/tokentthree.png'
import tokenfourth from 'assets/images/tokenfour.png'
import tokenfifth from 'assets/images/tokenfive.png'
import tokensixth from 'assets/images/tokensix.png'

const TokenUtilitiesWrapper = () => {
  return (
    <ScrollContainer>
    <TokenContainer>
      <TokenTextWrapper>
        <Title>Token Utilities</Title>
        <TokenText>$MOONV will be the utility token for the Moonverse economy. Utilities include:</TokenText>
      </TokenTextWrapper>
      <Utilities>
        <UtilitiesWrapper>
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
        </UtilitiesWrapper>
      </Utilities>
    </TokenContainer>
    </ScrollContainer>
  )
}

export default TokenUtilitiesWrapper
