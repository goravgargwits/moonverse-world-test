import { Partners, PartnersLogo, Heading } from 'styles/pages/home'
import babylons from 'assets/images/babyolns.png'
import zokyologo from 'assets/images/zokyo.png'
import anzulogo from 'assets/images/anzu.png'
import polygonlogo from 'assets/images/polygon.png'
import venly from 'assets/images/venly.png'

const InvestorWrapper = () => {
  return (
    <>
      <Heading>Investors</Heading>
      <Partners>
        <PartnersLogo>
          <img src={babylons} className="partners" />
        </PartnersLogo>
        <PartnersLogo>
          <img src={zokyologo} className="partners" />
        </PartnersLogo>
        <PartnersLogo>
          <img src={anzulogo} className="partners" />
        </PartnersLogo>
        <PartnersLogo>
          <img src={polygonlogo} className="partners" />
        </PartnersLogo>
        <PartnersLogo>
          <img src={venly} className="partners" />
        </PartnersLogo>
      </Partners>
    </>
  )
}

export default InvestorWrapper
