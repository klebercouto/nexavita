import { getLocationOrigin } from 'next/dist/shared/lib/utils'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/logo.jpg'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NexaVita</title>
        <meta name="description" content="NexaVita website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1>
        <Image src={logo} alt="NexaVita" width='400' height='220'/>
        </h1>
        
       
        
      </main>

    </div>
  )
}
