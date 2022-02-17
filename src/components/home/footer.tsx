import {
  FooterContainer,
  LogoImagewrapper,
  LinkWrapper,
  QuickWrapper,
  QuicklinkTitle,
  Links,
  ChannelsWrapper,
} from 'styles/pages/home'
import logo from 'assets/images/logo.png'
import twitter from 'assets/images/twitter.png'
import discord from 'assets/images/discord.png'
// import instagram from 'assets/images/instagram.png'

const FooterWrapper = () => {
  return (
    <FooterContainer>
      <LogoImagewrapper>
        <img src={logo} className="footer_logo" />
      </LogoImagewrapper>
      <LinkWrapper>
        <QuickWrapper>
          <QuicklinkTitle>Quicklinks</QuicklinkTitle>
          {/*<Links>Home</Links>*/}
          <Links onClick={() => window.open('https://www.moonverse.market/')}> Marketplace</Links>
          {/*<Links>Community</Links>*/}
        </QuickWrapper>
        <ChannelsWrapper>
          <img src={twitter} width="20" height="20" onClick={() => window.open('https://twitter.com/Moonverse_sol')} />
          <img src={discord} width="20" height="20" onClick={() => window.open('https://discord.gg/px4HJJgfNe')} />
          {/*<img src={instagram} width="20" height="20" />*/}
        </ChannelsWrapper>
      </LinkWrapper>
    </FooterContainer>
  )
}

export default FooterWrapper
