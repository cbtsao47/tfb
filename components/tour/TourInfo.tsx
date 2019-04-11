import React, { useState } from 'react'

export interface IPrice {
  originalPrice: number
  discountPrice: number
  numberOfDay: number
  numberOfNight: number
}

type ICategory = '' | 'eco' | 'commercial' | 'volunteer'

export interface ITourInfo {
  name: string
  description: string
  category: ICategory
  reviewPoint: number
  reviewCount: number
  price: IPrice
}

const TourInfo: React.SFC<ITourInfo> = ({
  name,
  description,
  reviewPoint,
  reviewCount,
  price
}) => {
  return (
    <>
      <div className="tour-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <SimplePriceDisplay {...price} />
        <SimpleReviewDisplay reviewPoint={reviewPoint} />
        <div>{reviewCount} reviews</div>
      </div>
      <style jsx>{`
        .tour-info {
        }
      `}</style>
    </>
  )
}

export default TourInfo
