import theme from '../../theme'

const IconCard = ({
  imgUrl,
  title,
  description,
  padding,
  flexDirection = 'row',
  justifyContent = 'flex-start',
  backgroundImageUrl,
  style
}) => (
  <>
    <div className="icon-card">
      <img src={imgUrl} />
      <span>{title}</span>
      <p>{description}</p>
    </div>
    <style jsx>{`
      .icon-card {
        display: flex;
        flex-direction: ${flexDirection};
        justify-content: ${justifyContent};
        align-items: center;
        padding: ${padding}
          ${backgroundImageUrl
            ? `background-image: url('${backgroundImageUrl}'); background-repeat: no-repeat; background-position: center; background-size: cover`
            : ''};
      }
      .icon-card span {
        font-size: ${theme.font.size.normal};
        text-transform: capitalize;
        font-weight: 600;
      }
    `}</style>
  </>
)

export default IconCard
