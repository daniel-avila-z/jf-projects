'use client'
import { useEffect, useState } from 'react'
import '../styles/ProductList.css'
// import FetchDataProducts from '../api/FetchDataProducts.jsx'

import Image from 'next/image'

export default function ProductList () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <>
      {/* <h2 className='title-section'>Products</h2> */}
      <div className='product-main-container'>
        {products.map((product) => (
          <div className='product-card-container' key={product.id}>
            <Image className='product-img' src={product.image} alt={product.title} width={200} height={200} />
            <p className='product-category'>{product.category}</p>
            <h3 className='product-title'>{product.title}</h3>
            <div className='product-pricerc-container'>
              <p className='product-price'>${product.price}</p>
              <div className='product-rc-container'>
                <p className='product-rate'>{product.rating.rate}⭐ / 5 </p>
                <p className='product-count'> ({product.rating.count})</p>
              </div>
            </div>
            <button className='product-button'>Buy Now</button>
          </div>
        ))}
      </div>
    </>
  )
}
