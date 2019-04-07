import theme from "../theme";
import StandardForm from "../components/form/StandardForm";
import StandardButton from "../components/button/StandardButton";

const Index = () => (
  <>
    <div>
      <div>Form and Input</div>
      <StandardForm />
      <div>Button</div>
      <StandardButton
        value="submit"
        name="submit"
        isLoading={false}
        onClick={() => null}
      />
      <br />
      <StandardButton
        value="submit"
        name="submit"
        outline
        isLoading={false}
        onClick={() => null}
      />
      <br />
      <StandardButton
        value="submit"
        name="submit"
        disabled
        isLoading={false}
        onClick={() => null}
      />
      <br />
      <StandardButton
        value="submit"
        name="submit"
        disabled
        outline
        isLoading={false}
        onClick={() => null}
      />
    </div>
    <style jsx global>{`
      body,
      input,
      button {
        font-size: ${theme.font.size.normal}px;
        font-family: ${theme.font.family.normal};
        color: ${theme.palette.shade[80]};
      }
      ::placeholder {
        text-transform: capitalize;
      }
    `}</style>
  </>
);

export default Index;
