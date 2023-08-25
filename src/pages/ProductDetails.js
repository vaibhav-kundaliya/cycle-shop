import React from 'react'
import ProductDescription from "../components/productDetailsComponents/ProductDescription"
export default function ProductDetails() {
  return (
    <div>
        {window.scrollTo({top:0})}
        <ProductDescription />
    </div>
  )
}
