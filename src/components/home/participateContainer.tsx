import { useEffect } from 'react'
import { ScrollContainer, Title, ParticipateContainer, TextWrapper, PartcipateText } from 'styles/pages/home'
import Button from '@mui/material/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ParticipateWrapper = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
    })
  }, [])
  return (
    <ScrollContainer>
      <ParticipateContainer data-aos={'fade-down-right'} data-aos-delay={1000} id="participate_container">
        <TextWrapper>
          <Title>Participate to Earn</Title>
          <PartcipateText>
            Simply Participate to Earn, in a new P2E economy. NFT projects can create 3D avatars quickly by staking
            $MOONV. NFT holders can join the world and play to earn $MOONV
          </PartcipateText>
          <Button className="playButton">Soon...</Button>
        </TextWrapper>
      </ParticipateContainer>
    </ScrollContainer>
  )
}

export default ParticipateWrapper
