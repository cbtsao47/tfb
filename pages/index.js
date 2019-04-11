import Head from 'next/head'
import theme from '../theme'
import { NavBar } from '../library/nav/NavBar'
import { Section } from '../library/section/Section'
import { LandingPageHero } from '../components/hero/LandingPageHero'
import { WelcomeSection } from '../components/section/WelcomeSection'
import { PopularToursSection } from '../components/section/PopularToursSection'
import { OurDestinationsSection } from '../components/section/OurDestinationsSection'
import { TfbVideoSection } from '../components/section/TfbVideoSection'
import { FaqSection } from '../components/section/FaqSection'
import { GetInspiredSection } from '../components/section/GetInspiredSection'
import { FooterSection } from '../components/section/FooterSection'

const Index = () => (
  <>
    <Head>
      <title>Tours For Books</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Gochi+Hand|Source+Sans+Pro:200,400,700,900"
        rel="stylesheet"
      />
    </Head>
    <div>
      <NavBar
        logoUrl="/static/logo.png"
        menuItems={['home', 'tours', 'about', 'contact']}
      />
      <Section
        height="100vh"
        padding="0px"
        backgroundColor="grey"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        backgroundImage="/static/hero14.jpg"
      >
        <LandingPageHero />
      </Section>
      <Section height="70vh" padding="10%" backgroundColor="white">
        <WelcomeSection />
      </Section>
      <Section height="70vh" padding="0px" backgroundColor="white">
        <PopularToursSection />
      </Section>
      <Section height="70vh" padding="0px" backgroundColor="white">
        <OurDestinationsSection />
      </Section>
      <Section height="70vh" padding="0px" backgroundColor="white">
        <TfbVideoSection />
      </Section>
      <Section height="70vh" padding="0px" backgroundColor="white">
        <FaqSection />
      </Section>
      <Section height="70vh" padding="0px" backgroundColor="white">
        <GetInspiredSection />
      </Section>
      <Section height="70vh" padding="0px" backgroundColor="white">
        <FooterSection />
      </Section>
    </div>
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
      }
      body,
      input,
      textarea,
      button {
        font-size: ${theme.font.size.normal};
        font-family: ${theme.font.family.normal};
        color: ${theme.palette.shade[80]};
      }
      p {
        margin: 0;
      }
      a {
        cursor: pointer;
      }
      a:hover {
        color: ${theme.palette.orange};
      }
      button {
        font-size: ${theme.font.size.small};
      }
      ::placeholder {
        text-transform: capitalize;
      }
    `}</style>
  </>
)

export default Index
