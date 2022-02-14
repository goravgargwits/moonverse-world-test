import { VideoContainer, Logo, Scroll, Player } from 'styles/pages/home'
import ReactPlayer from 'react-player'
import Button from '@mui/material/Button'

import homevideo from 'assets/video/homevideo.mp4'
import logo from 'assets/images/logo.png'
import scroll from 'assets/images/scroll-bar.png'

const VideoWrapper = () => {
  return (
    <VideoContainer>
      <Logo>
        <img src={logo} />
        <Button className="marketplace">Marketplace</Button>
      </Logo>
      <Player>
        <ReactPlayer playing={true} loop={true} className="player" url={homevideo} autoPlay={true} />
      </Player>
      <Scroll>
        <a href="#participate_container">
          <img src={scroll} className="scrollbar" />
        </a>
      </Scroll>
    </VideoContainer>
  )
}

export default VideoWrapper
