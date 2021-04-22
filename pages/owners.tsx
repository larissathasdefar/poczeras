import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react';
import styles from '../styles/Home.module.css'
// import useSWR from 'swr'

export default function OwnersDogs({ data }) {
    let [dogs, setDogs] = React.useState([]);
    const router = useRouter()

    const fecthDogs = async () => {
        const res = await fetch(`http://localhost:3000/api/dogs`)
        const dogsJSON = await res.json()

        // window.history.pushState('', '', '/owners/dogs')
        router.push('/busca/?dogs=true', undefined, { shallow: true })
        setDogs(dogsJSON);
    }

    const gotToDogs = () => router.push('/dogs', undefined, { shallow: true })

    return (
        <div className={styles.container}>
            <Head>
                <title>Owners e Dogs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>

                {
                    dogs.length > 0 && <ul>
                        {dogs.map(({ raca, uuid }) => (<li key={uuid}>{raca}</li>))}
                    </ul>
                }

                <ul>
                    {data.map(({ name, uuid }) => (<li key={uuid}>{name}</li>))}
                </ul>
                <button onClick={fecthDogs}>Fetch Dgos</button>
            </main>

            <footer className={styles.footer}>
            <button onClick={gotToDogs}>dogs page</button>
            </footer>
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/owners`)
    const data = await res.json()
    console.log(1)
    return { props: { data } }
}