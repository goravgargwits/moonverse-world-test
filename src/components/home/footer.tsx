import {
  FooterContainer,
  LogoImagewrapper,
  LinkWrapper,
  QuickWrapper,
  ChannelsWrapper,
  RightSection,
} from 'styles/pages/home'
import logo from 'assets/images/chapter-x-logo.png'
import twitter from 'assets/images/twitter.png'
import discord from 'assets/images/discord.png'

const FooterWrapper = () => {
  return (
    <FooterContainer>
      <LogoImagewrapper>
        <RightSection>
          <p className="sub-text">Subscribe and follow</p>
          <ChannelsWrapper>
            <img src={twitter} onClick={() => window.open('https://twitter.com/ChapterX_world')} />
            <img src={discord} onClick={() => window.open('https://discord.gg/px4HJJgfNe')} />
          </ChannelsWrapper>
        </RightSection>
        <QuickWrapper>
          <form>
            <input placeholder="Enter your email" /> <button>Subscribe</button>
          </form>
        </QuickWrapper>
      </LogoImagewrapper>
      <LinkWrapper>
        <img src={logo} className="footer_logo" />
        <p>© 2021 Chapter X. All rights reserved.</p>
      </LinkWrapper>
    </FooterContainer>
  )
}

export default FooterWrapper
