import { VideoContainer, Logo, Scroll, Player } from 'styles/pages/home'
import Button from '@mui/material/Button'
import homevideo from 'assets/video/homevideo.mp4'
// import mobilevideo from 'assets/video/mobilevideo.mp4'
import logo from 'assets/images/chapter-x-logo.png'
import scroll from 'assets/images/scroll-bar.png'

const VideoWrapper = () => {
  return (
    <VideoContainer>
      <Logo>
        <img src={logo} className="header_logo" />
        <Button className="marketplace" onClick={() => window.open('https://www.chapterx.market')}>
          Marketplace
        </Button>
      </Logo>
      <Player>
        <video className="video" autoPlay loop muted playsInline>
          <source src={homevideo} type="video/mp4"></source>
        </video>
        {/* {window.innerWidth > 740 && (
          <video className="video" autoPlay loop muted playsInline>
            <source src={homevideo} type="video/mp4"></source>
          </video>
        )}
        {window.innerWidth <= 740 && (
          <video className="mobile_video" autoPlay loop muted playsInline>
            <source src={mobilevideo} type="video/mp4"></source>
          </video>
        )} */}
      </Player>

      <Scroll>
        <a href="#chapter-x-container">
          <img src={scroll} className="scrollbar" />
        </a>
      </Scroll>
    </VideoContainer>
  )
}

export default VideoWrapper
