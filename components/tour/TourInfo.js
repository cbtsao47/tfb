import React, { useState } from 'react'

const TourInfo = ({ name, description, reviewPoint, reviewCount, price }) => {
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
