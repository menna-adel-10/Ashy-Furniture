import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productList}) {
  return (
      <div className='grid grid-cols-2 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {productList.map(item => (
              // eslint-disable-next-line react/jsx-key
              <div><ProductItem product={ item } key={item.id} /></div>
          ))}
    </div>
  )
}

export default ProductList