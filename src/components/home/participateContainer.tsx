import { useEffect } from 'react'
import { ScrollContainer, Title, ParticipateContainer, TextWrapper, PartcipateText } from 'styles/pages/home'
import Button from '@mui/material/Button'

const ParticipateWrapper = () => {
  return (
    <ScrollContainer id="participate-container">
      <ParticipateContainer id="participate_container">
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
