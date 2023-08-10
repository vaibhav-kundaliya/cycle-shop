import React from 'react'
import DisplayItems from '../components/bicycleShopComponents/DisplayItems'
export default function BicyclesShop() {
  return (
    <>
      <div className='bicycleshop'>
        <div className="items">
          <DisplayItems />
        </div>
        <div className="search"></div>
        <div className='price_filter'></div>
        <div className="catagory_filter"></div>
      </div>
    </>
  )
}
