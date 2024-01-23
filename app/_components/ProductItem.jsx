import React from 'react'
import Image from 'next/image'
import {List} from 'lucide-react'

function ProductItem({product}) {
  return (
      <div className='p-1 rounded-lg hover:border hover:shadow-md hover:cursor-pointer'>
          <Image src={product?.attributes?.image?.data?.attributes?.url}
              alt='image-card'
              width={400}
              height={350}
              className='rounded-lg w-full h-[380px] object-cover'
          />
          <div className='flex justify-between p-3 items-center'>
              
          <div className=''>
              <h2 className='text-[14px] font-medium line-clamp-1'>
                  {product?.attributes?.title}
              </h2>
              <h2 className='text-[12px] text-gray-400 flex gap-1 items-center'>
                      <List className='w-4 h-4' />
                      {product?.attributes?.category}
                  
              </h2>
          </div>
          <h2 className='font-semibold text-gray-800'>${ product?.attributes?.price }</h2>
          </div>
      </div>
  )
}

export default ProductItem