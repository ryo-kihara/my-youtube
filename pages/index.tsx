import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { red } from '@mui/material/colors';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My YouTube</title>
        <meta name="description" content="You can only watch videos from channels you have subscribed to." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <SubscriptionsIcon sx={{ color: red[500], fontSize: 52, mr: 2 }}></SubscriptionsIcon>
          Welcome to My YouTube!
        </h1>
        <p>You can only watch videos from channels you have subscribed to.</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home