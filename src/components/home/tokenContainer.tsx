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
  const data = [
    {
      img: tokenfirst,
      para: 'Each $SEEK represents a vote in the platform’s future',
    },
    {
      img: tokentwo,
      para: 'Craft your customised avatars',
    },
    {
      img: tokenThree,
      para: 'Complete your daily quests and campaigns',
    },
    {
      img: tokenFour,
      para: 'Create accessories that bring you further in your journey',
    },
    {
      img: tokenFive,
      para: 'Embark on a fun adventure in a myriad of games',
    },
  ]
  return (
    <ScrollContainer id="token-utilities">
      <TokenContainer>
        <TokenContainerWrapper>
          <TokenTextWrapper>
            <TokenTitle>Our Utility Token $SEEK</TokenTitle>
          </TokenTextWrapper>
          <Utilities>
            {data.map((res, index) => (
              <UtilitiesWrapper key={index}>
                <img src={res.img} className="utilities_type" />
                <p>{res.para}</p>
              </UtilitiesWrapper>
            ))}
          </Utilities>
        </TokenContainerWrapper>
      </TokenContainer>
    </ScrollContainer>
  )
}

export default TokenUtilitiesWrapper
