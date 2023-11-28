// import Image from 'next/image'
import './styles/globals.css'
import styles from './styles/page.module.css'
import Header from './components/Header.jsx'
import Copywriting from './components/Copywriting.jsx'
import ProductList from './components/ProductList.jsx'
import Category from './components/Category'
// import { Suspense } from 'react'
// import Loading from './loading'

export default function Home () {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Copywriting />
        <div className='ctg-prodlist-container'>
          <Category />
          <ProductList />
        </div>
      </main>
    </>
  )
}
