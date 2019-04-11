import React from 'react'

export interface IStyle {
  [key: string]: string
}

export interface ICard {
  children?: React.ReactNode
  padding?: string
  justifyContent: 'flex-start' | 'flex-end' | 'stretch' | 'center'
  backgroundImageUrl?: string
  style?: IStyle
}

const Card: React.SFC<ICard> = ({
  children,
  padding,
  justifyContent = 'flex-start',
  backgroundImageUrl,
  style
}) => (
  <>
    <div className="card" style={style}>
      {children}
    </div>
    <style jsx>{`
      .card {
        display: flex;
        flex-direction: row;
        justify-content: ${justifyContent};
        align-items: center;
        padding: ${padding}
          ${backgroundImageUrl
            ? `background-image: url('${backgroundImageUrl}'); background-repeat: no-repeat; background-position: center; background-size: cover`
            : ''};
      }
    `}</style>
  </>
)

export default Card
