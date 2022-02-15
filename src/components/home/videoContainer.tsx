import { VideoContainer, Logo, Scroll, Player } from 'styles/pages/home'
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
        <video className="video" autoPlay loop muted>
          <source src={homevideo} type="video/mp4"></source>
        </video>
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
