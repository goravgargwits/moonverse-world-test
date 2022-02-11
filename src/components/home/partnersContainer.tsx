import { Partners, PartnersLogo, Heading } from 'styles/pages/home'
import babylons from 'assets/images/babyolns.png'
import zokyologo from 'assets/images/zokyo.png'
import anzulogo from 'assets/images/anzu.png'
import polygonlogo from 'assets/images/polygon.png'
import venly from 'assets/images/venly.png'

const PartnerWrapper = () => {
  return (
    <>
      <Heading>Partners</Heading>
      <Partners>
        <PartnersLogo>
          <img src={babylons} width="200" />
        </PartnersLogo>
        <PartnersLogo>
          <img src={zokyologo} width="200" />
        </PartnersLogo>
        <PartnersLogo>
          <img src={anzulogo} width="200" />
        </PartnersLogo>
        <PartnersLogo>
          <img src={polygonlogo} width="200" />
        </PartnersLogo>
        <PartnersLogo>
          <img src={venly} width="200" />
        </PartnersLogo>
      </Partners>
    </>
  )
}

export default PartnerWrapper
