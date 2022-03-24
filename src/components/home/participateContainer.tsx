import {
  ScrollContainer,
  Title,
  ParticipateContainer,
  TextWrapper,
  PartcipateText,
  ParticipateSubText,
} from 'styles/pages/home'
import Button from '@mui/material/Button'

const ParticipateWrapper = () => {
  return (
    <ScrollContainer id="participate-container">
      <ParticipateContainer id="participate_container">
        <TextWrapper>
          <Title>Build Your Own Chapter</Title>
          <PartcipateText>
            As a Seeker, you are forever searching for new experiences to bank in your memory. The more experiences you
            have, memories you make, and interactions you share, the richer you become in this brave, new, evolving
            world. Be it 10 in Roman Numeral, interaction or unknown factor, “X” has its unique place in our world.
            <ParticipateSubText>Explore and unleash your potential in our ten Chapters.</ParticipateSubText>
          </PartcipateText>
          <Button className="playButton">Soon...</Button>
        </TextWrapper>
      </ParticipateContainer>
    </ScrollContainer>
  )
}

export default ParticipateWrapper
