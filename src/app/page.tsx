// import Image from 'next/image'
import styles from './styles/page.module.css'
import Header from './components/Header.jsx'
import Copywriting from './components/Copywriting.jsx'

export default function Home () {
  return (
    <>

      <Header />
      <main className={styles.main}>
        <Copywriting />
        <h1>hoola</h1>
      </main>
    </>
  )
}
