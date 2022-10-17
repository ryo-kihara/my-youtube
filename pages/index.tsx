import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { red } from '@mui/material/colors';
import { useEffect, useRef } from 'react';
import { Box } from '@mui/system';

const Home: NextPage = () => {
  const loadScript = (src: string): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) return resolve()
      const script = document.createElement('script')
      script.src = src
      script.onload = () => resolve()
      script.onerror = (err) => reject(err)
      document.body.appendChild(script)
    })
  }

  const handleCredentialResponse = (res: google.CredentialResponse): void => {
    console.log(res.credential);
  }

  const googleButton = useRef<HTMLDivElement|null>(null)

  useEffect(() => {
    const src = 'https://accounts.google.com/gsi/client'
    loadScript(src)
      .then(() => {
        if (window.google) {
          window.google.accounts.id.initialize({
            client_id: '659259089473-c6noq2r7nc7jf11ujcns3aa0pdntgq0g.apps.googleusercontent.com',
            callback: handleCredentialResponse
          })
          window.google.accounts.id.renderButton(
            (googleButton.current as unknown as HTMLElement),
            { theme: 'outline', size: 'large' }
          )
        }
      })
      .catch(console.error)
  }, [])


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
        <Box sx={{ mt: 3 }}>
          <div ref={googleButton}></div>
        </Box>
      </main>
    </div>
  )
}

export default Home
