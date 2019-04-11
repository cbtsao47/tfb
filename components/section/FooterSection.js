import { landingPageStrings } from '../../localization/landingPageStrings'
import IconCard from '../../library/card/IconCard'
export const FooterSection = () => (
  <>
    <div>
      <div>
        <IconCard
          imgUrl=""
          title={landingPageStrings.textUs}
          description={landingPageStrings.phoneContact}
        />
        <IconCard
          imgUrl=""
          title={landingPageStrings.emailSupport}
          description={landingPageStrings.emailContact}
        />
        <IconCard
          imgUrl=""
          title={landingPageStrings.twitter}
          description={landingPageStrings.twitterHandle}
        />
        <IconCard
          imgUrl=""
          title={landingPageStrings.facebook}
          description={landingPageStrings.facebookHandle}
        />
      </div>
      <div className="logo">Logo</div>
      <div className="icon">Icon</div>
      <p>{landingPageStrings.copyright}</p>
    </div>
  </>
)
