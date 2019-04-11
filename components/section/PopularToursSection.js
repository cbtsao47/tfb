import { landingPageStrings } from '../../localization/landingPageStrings'
import Card from '../../library/card/IconCard'
import theme from '../../theme'

export const PopularToursSection = () => (
  <>
    <div className="popular-tours-section">
      <div className="popular-tours-section-headline">
        <span>{landingPageStrings.checkoutOurBestTours}</span>
        <span>{landingPageStrings.popularTours}</span>
      </div>
      <div>
        <Card padding="0px" justifyContent="flex-start" backgroundImageUrl="">
          Card content
        </Card>
      </div>
      <div className="our-services">
        <Card padding="0px" justifyContent="flex-start" backgroundImageUrl="">
          Card content
        </Card>
      </div>
    </div>
    <style jsx>{`
      .popular-tours-section {
        width: 100%;
      }
      .popular-tours-section-headline {
        text-align: center;
        display: flex;
        flex-direction: column;
      }
      .popular-tours-section-headline span:first-child {
        font-size: ${theme.font.size.small};
        text-transform: uppercase;
        color: ${theme.palette.blue[100]};
      }
      .popular-tours-section-headline span:last-child {
        font-family: ${theme.font.family.normal};
        font-size: ${theme.font.size.large};
        font-weight: 800;
        text-transform: capitalize;
        line-height: 0.9;
      }
    `}</style>
  </>
)
