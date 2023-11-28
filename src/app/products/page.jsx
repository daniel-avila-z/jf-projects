import Image from 'next/image'
import '../styles/ProductList.css'
import { Suspense } from 'react'

const fetchProducts = async () => {
  // await new Promise(resolve => setTimeout(resolve, 3000))

  // incremental static regeneration
  // Lo que hace es que cada X tiempo sí ha recibido una request, revalidaria y haria un nuevo FETCH para regenerar el archivo
  return fetch('https://fakestoreapi.com/products', {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())

  // throw new Error(Error)
}

export default async function Products () {
  const products = await fetchProducts()
  return (
    <div className='product-main-container'>
      <Suspense>

        {products.map((product) => (
          <div className='product-card-container' key={product.id}>

            <Image placeholder='blur' loading='lazy' blurDataURL='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' className='product-img' src={product.image} alt={product.title} width={200} height={200} />

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
      </Suspense>
    </div>
  )
}

// import { Suspense } from 'react'
// import ProductList from '../components/ProductList.jsx'
// import Loading from './loading'

// export default function Products () {
//   return (
//     <>
//       <main>
//         <Suspense fallback={<Loading />}>
//           <ProductList />
//         </Suspense>

//       </main>
//     </>

//   )
// }

// 'use client'
// import { useEffect, useState } from 'react'
// import '../styles/ProductList.css'
// // import FetchDataProducts from '../api/FetchDataProducts.jsx'

// import Image from 'next/image'

// export default function Product () {
//   const [products, setProducts] = useState([])

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//   }, [])

//   return (
//     <>
//       {/* <h2 className='title-section'>Products</h2> */}
//       <div className='product-main-container'>
//         {products.map((product) => (
//           <div className='product-card-container' key={product.id}>

//             <Image placeholder='blur' loading='lazy' blurDataURL='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' className='product-img' src={product.image} alt={product.title} width={200} height={200} />

//             <p className='product-category'>{product.category}</p>
//             <h3 className='product-title'>{product.title}</h3>
//             <div className='product-pricerc-container'>
//               <p className='product-price'>${product.price}</p>
//               <div className='product-rc-container'>
//                 <p className='product-rate'>{product.rating.rate}⭐ / 5 </p>
//                 <p className='product-count'> ({product.rating.count})</p>
//               </div>
//             </div>
//             <button className='product-button'>Buy Now</button>
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }
