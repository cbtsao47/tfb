import { useRef, useState } from 'react'
import { useSpring, animated, interpolate } from 'react-spring'
import theme from '../../theme'

const StandardInput = ({ placeholder, value, name, onChangeInput }) => {
  const [isFocus, setIsFocus] = useState(false)
  const { o, color, opacity } = useSpring({
    from: { o: 0.8, color: theme.palette.shade[30], opacity: 0 },
    o: isFocus || (!isFocus && value) ? 1 : 0.8,
    color:
      isFocus || (!isFocus && value)
        ? theme.palette.blue
        : theme.palette.shade[30],
    opacity: isFocus || (!isFocus && value) ? 1 : 0
  })
  const inputStyle = {
    border: interpolate([o, color], (o, c) => `${o * 1}px solid ${c}`),
    outline: 'none',
    borderRadius: `${theme.spacing / 4}px`,
    padding: `${theme.spacing}px ${theme.spacing * 1.5}px`,
    borderTopLeftRadius: 0,
    marginBottom: `${theme.spacing}px`
  }
  const titleStyle = {
    opacity: opacity,
    display: 'block',
    top: 0,
    fontSize: `${theme.font.size.small}px`,
    backgroundColor: theme.palette.blue,
    color: `${theme.palette.shade[0]}`,
    padding: `${theme.spacing * 0.2}px ${theme.spacing}px`,
    textTransform: 'capitalize'
  }
  return (
    <>
      <div className="standard-input">
        <animated.span style={titleStyle}>{placeholder}</animated.span>
        <animated.input
          type="text"
          value={value}
          name={name}
          placeholder={isFocus ? '' : placeholder}
          style={inputStyle}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={e => onChangeInput(e.target.value)}
        />
      </div>
      <style jsx>{`
        .standard-input {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      `}</style>
    </>
  )
}

export default StandardInput
