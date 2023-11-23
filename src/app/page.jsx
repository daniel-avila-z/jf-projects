// import Image from 'next/image'
import styles from './styles/page.module.css'
import Header from './components/Header.jsx'
import Copywriting from './components/Copywriting.jsx'
import ProductList from './components/ProductList.jsx'

export default function Home () {
  return (
    <>

      <Header />
      <main className={styles.main}>
        <Copywriting />
        <ProductList />
      </main>
    </>
  )
}
