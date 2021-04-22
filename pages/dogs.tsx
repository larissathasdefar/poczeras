import Head from 'next/head'
import styles from '../styles/DailyShuffle.module.css'

export default function Dogs() {

    return (
        <div className={styles.container}>
            <Head>
                <title>Daily Shuffle</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>Dogs</h1>
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {

    console.log('getServerSideProps -- DOGS')

    return { props: {} }
}
