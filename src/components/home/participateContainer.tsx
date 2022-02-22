import { Title, ParticipateContainer, TextWrapper, PartcipateText } from 'styles/pages/home'
import Button from '@mui/material/Button'
import participateearn from 'assets/video/participatevideo.mp4'

const ParticipateWrapper = () => {
  return (
    <ParticipateContainer id="participate_container">
      <video className="participate_video" autoPlay loop muted>
        <source src={participateearn} type="video/mp4"></source>
      </video>
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
