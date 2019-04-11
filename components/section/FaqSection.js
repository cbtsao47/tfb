import { landingPageStrings } from '../../localization/landingPageStrings'
import ExpansionPanel from '../../library/panel/ExpansionPanel'

export const FaqSection = () => (
  <>
    <h2>{landingPageStrings.frequentlyAskedQuestions}</h2>
    <ExpansionPanel
      items={[
        {
          title: 'first question',
          description: 'first answer'
        }
      ]}
    />
  </>
)
