import Head from 'next/head'
import styles from '../styles/DailyShuffle.module.css'

export default function Home() {

    const shuffle = (array: Array<string>) => {
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Daily Shuffle</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <ul className={styles.list}>
                    {shuffle(['Claudemir', 'Daniel', 'Gabriel', 'Julio', 'Larissa', 'Sergio', 'Victor']).map(name => <li key={`list-item-${name}`} className={styles.item}>{name}</li>)}
                </ul>
            </main>
        </div>
    )
}
