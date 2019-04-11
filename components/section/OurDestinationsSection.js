import { landingPageStrings } from '../../localization/landingPageStrings'
import StandardButton from '../../library/button/StandardButton'
import theme from '../../theme'

export const OurDestinationsSection = () => (
  <>
    <div className="our-destinations-section">
      <div className="our-destinations-section-headline">
        <span>{landingPageStrings.discoverTheWorld}</span>
        <span>{landingPageStrings.ourDestinations}</span>
      </div>
      <div className="map">Map</div>
      <StandardButton name={landingPageStrings.checkAllDestination} />
    </div>
    <style jsx>{`
      .our-destinations-section {
        width: 100%;
      }
      .our-destinations-section-headline {
        text-align: center;
        display: flex;
        flex-direction: column;
      }
      .our-destinations-section-headline span:first-child {
        font-size: ${theme.font.size.small};
        text-transform: uppercase;
        color: ${theme.palette.blue[100]};
      }
      .our-destinations-section-headline span:last-child {
        font-family: ${theme.font.family.normal};
        font-size: ${theme.font.size.large};
        font-weight: 800;
        text-transform: capitalize;
        line-height: 0.9;
      }
    `}</style>
  </>
)
