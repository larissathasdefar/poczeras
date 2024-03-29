import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Poczeras</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Poczeras</h1>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
