import { useEffect } from 'react'
import { MoonverseInfo, Title, Text, TextContainer, ScrollContainer } from 'styles/pages/home'
import AOS from 'aos'
import 'aos/dist/aos.css'

const MoonverseInfoWrapper = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
    })
  }, [])
  return (
    <ScrollContainer id="moonverse-container">
      <MoonverseInfo data-aos={'fade-down-right'} data-aos-delay={1000} id="moonverse">
        <TextContainer>
          <Title>What is Moonverse?</Title>
          <Text>Collectibles Social Metaverse that provides all NFT holders utility in a 3D world</Text>
        </TextContainer>
      </MoonverseInfo>
    </ScrollContainer>
  )
}

export default MoonverseInfoWrapper
