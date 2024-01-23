import React from 'react'
import Image from 'next/image'

function ProductBanner({product}) {
  return (
      <div>
          <Image
              src={product?.attributes?.image?.data?.attributes?.url}
              alt='product-details-image'
              width={400}
              height={400}
              className='rounded-lg'
          />
    </div>
  )
}

export default ProductBanner