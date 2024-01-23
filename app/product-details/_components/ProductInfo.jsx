import React from 'react'
import {ShoppingCart} from 'lucide-react'

function ProductInfo({product}) {
  return (
      <div>
          <h2 className='text-[20px]'>
              {product?.attributes?.title}
          </h2>
          <h2 className='text-[15px] text-gray-400'>
              {product?.attributes?.category}
          </h2>
          <h2 className='text-[15px] mt-5'>
              {product?.attributes?.description}
          </h2>
          <h2 className='text-[26px] text-primaryColor mt-3'>${ product?.attributes?.price }</h2>
          
          <button className='flex gap-2 bg-primaryColor text-white p-3 rounded-lg mt-3 hover:bg-black cursor-pointer hover:transition-all'><ShoppingCart/> Add to cart</button>
    </div>
  )
}

export default ProductInfo