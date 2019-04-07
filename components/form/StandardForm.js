import { useState } from "react";
import { useSpring, animated, interpolate } from "react-spring";
import StandardInput from "../input/StandardInput";
import theme from "../../theme";

const defaultFormData = {
  name: {
    value: ""
  },
  phone: {
    value: ""
  }
};

const defaultSchemaFields = [{ name: "name" }, { name: "phone" }];

const StandardForm = ({
  formData = defaultFormData,
  schemaFields = defaultSchemaFields
}) => {
  const [currentFormData, setCurrentFormData] = useState(formData);
  const [isFocus, setIsFocus] = useState(false);
  const { color } = useSpring({
    from: { color: theme.palette.shade[20] },
    color: isFocus ? theme.palette.shade[30] : theme.palette.shade[20]
  });

  const formStyle = {
    display: "inline-block",
    border: `0.6px solid ${theme.palette.shade[30]}`,
    borderRadius: `${theme.spacing / 4}px`,
    padding: `${theme.spacing * 3}px ${theme.spacing * 5}px`
  };

  const handleSetFormData = (fieldName, value) => {
    const updatedFormData = {
      ...currentFormData,
      [fieldName]: {
        value
      }
    };
    setCurrentFormData(updatedFormData);
  };
  return (
    <>
      <animated.form
        style={formStyle}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      >
        {schemaFields.map(field => (
          <StandardInput
            key={field.name}
            name={field.name}
            title={field.name}
            placeholder={field.name}
            value={currentFormData[field.name].value}
            onChangeInput={value => handleSetFormData(field.name, value)}
          />
        ))}
      </animated.form>
      <style jsx>{`
        form {
        }
      `}</style>
    </>
  );
};

export default StandardForm;
