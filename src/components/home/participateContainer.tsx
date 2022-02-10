import { Title, ParticipateContainer, TextWrapper, PartcipateText } from 'styles/pages/home'
import Button from '@mui/material/Button'

const ParticipateWrapper = () => {
  return (
    <ParticipateContainer>
      <TextWrapper>
        <Title>Participate to Earn</Title>
        <PartcipateText>
          Simply Participate to Earn, in a new P2E economy. NFT projects can create 3D avatars quickly by staking
          $MOONV. NFT holders can join the world and play to earn $MOONV
        </PartcipateText>
        <Button className="playButton">Play Now</Button>
      </TextWrapper>
    </ParticipateContainer>
  )
}

export default ParticipateWrapper
