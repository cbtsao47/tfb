import React from 'react'
import Card from '../card/Card'
import TourInfo from '../tour/TourInfo'

export const TourCard: React.SFC<> = () => (
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
