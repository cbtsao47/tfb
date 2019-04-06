import theme from '../theme'
import StandardForm from '../components/form/StandardForm'

const Index = () => (
  <>
    <div>
      <div>New style here</div>
      <StandardForm />
    </div>
    <style jsx global>{`
      body,
      input {
        font-size: ${theme.font.size.normal}px;
        font-family: ${theme.font.family.normal};
      }
      ::placeholder {
        text-transform: capitalize;
      }
    `}</style>
  </>
)

export default Index
