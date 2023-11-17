// import Image from 'next/image'
import styles from './styles/page.module.css'
import Header from './components/Header'

export default function Home () {
  return (
    <>

      <Header />
      <main className={styles.main}>
        <h1>hoola</h1>
      </main>
    </>
  )
}
