import { landingPageStrings } from '../../localization/landingPageStrings'
import StandardButton from '../../library/button/StandardButton'
import theme from '../../theme'

export const LandingPageHero = () => (
  <>
    <div className="landing-page-hero">
      <div className="landing-page-hero-headline">
        <span>{landingPageStrings.startYourAdventure}</span>
        <span>{landingPageStrings.discoverVietnam}</span>
      </div>
      <StandardButton
        name={landingPageStrings.exploreNow}
        value={landingPageStrings.exploreNow}
        outline={false}
        onClick={() => null}
      />
    </div>
    <style jsx>{`
      .landing-page-hero {
        height: 35%;
      }
      .landing-page-hero,
      .landing-page-hero-headline {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: ${theme.palette.shade[0]};
      }
      .landing-page-hero-headline span:first-child {
        font-size: ${theme.font.size.superLarge};
        font-family: ${theme.font.family.title};
        text-transform: uppercase;
        line-height: 0.7;
      }
      .landing-page-hero-headline span ~ span {
        font-size: ${theme.font.size.normal};
        text-transform: uppercase;
      }
    `}</style>
  </>
)
