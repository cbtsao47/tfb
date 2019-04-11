import React from 'react'
import Card from '../../library/card/Card'
import TourInfo from './TourInfo'

export const TourCard = () => (
  <>
    <Card />
    <Card>
      <TourInfo
        name={name}
        description={description}
        reviewCount={reviewCount}
        reviewPoint={reviewPoint}
        price={price}
      />
    </Card>
  </>
)
