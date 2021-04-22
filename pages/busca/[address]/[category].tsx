import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.css'
// import useSWR from 'swr'

export default function OwnersDogs({ data }) {
    const router = useRouter()
    const gotToDogs = () => router.push('/busca/umnovoendereco/asdfasf?doido=1', undefined, { shallow: true })

    return (
        <div className={styles.container}>
            <Head>
                <title>Busca</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>{data.category}</h1>
            </main>

            <footer className={styles.footer}>
                <button onClick={gotToDogs}>dogs page</button>
            </footer>
        </div>
    )
}

export async function getServerSideProps(context) {
    console.log(context.params)
    console.log(context.query)
    console.log(1)
    return { props: { data: context.params } }
}