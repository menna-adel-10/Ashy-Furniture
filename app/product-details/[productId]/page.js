'use client'
import BreadCrumb from '@/app/_components/BreadCrumb';
import ProductAxios from '@/app/_utils/ProductAxios'
import React, { useEffect, useState } from 'react'
import ProductBanner from '../_components/ProductBanner';
import ProductInfo from '../_components/ProductInfo';

function ProductDetails({ params }) {
    const [ProductDetails, setProductDetails] = useState({})
    useEffect(() => {
        getProductById_();
    }, [params?.productId])
    
    const getProductById_ = () => {
        ProductAxios.getProductById(params?.productId).then(res => {
            console.log('product item', res.data.data);
            setProductDetails(res.data.data)
        })
    }
  return (
      <div className='px-10 py-8 md:px-28'>
          <BreadCrumb />
          <div className='grid justify-around grid-cols-1 gap-5 mt-10 sm:gap-10 lg:grid-cols-2  lg:gap-10'>
              <ProductBanner product={ ProductDetails } />
              <ProductInfo product={ ProductDetails } />
          </div>
    </div>
  )
}

export default ProductDetails