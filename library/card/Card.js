import React from 'react'

const Card = ({
  children,
  padding,
  justifyContent = 'flex-start',
  backgroundImageUrl,
  style
}) => (
  <>
    <div className="card" style={style}>
      <div className="card-img" />
      <div className="card-content">{children}</div>
    </div>
    <style jsx>{`
      .card {
        display: flex;
        flex-direction: row;
        justify-content: ${justifyContent};
        align-items: center;
        padding: ${padding};
      }

      ${backgroundImageUrl
        ? `.card-img {
          background-image: url('${backgroundImageUrl}'); background-repeat: no-repeat; background-position: center; background-size: cover;
        }`
        : ''};
    `}</style>
  </>
)

export default Card
