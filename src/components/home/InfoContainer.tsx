import { MoonverseInfo, Title, Text, TextContainer, ScrollContainer } from 'styles/pages/home'

const MoonverseInfoWrapper = () => {
  return (
    <ScrollContainer>
      <MoonverseInfo id="moonverse">
        <TextContainer>
          <Title>What is Moonverse</Title>
          <Text>Collectibles Social Metaverse that provides all NFT holders utility in a 3D world</Text>
        </TextContainer>
      </MoonverseInfo>
    </ScrollContainer>
  )
}

export default MoonverseInfoWrapper
