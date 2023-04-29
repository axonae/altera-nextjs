import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import { Footer, Navbar } from '@/components'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='selection:bg-[#CEE4FE] dark:selection:bg-blue-700 bg-white dark:bg-black'>
        <Head>
          <title>Altera SMS</title>
          <meta
            name='description'
            content='Generate non VoiP phone numbers for 2fa authentication from the comfort of our discord bot!'
          />
        </Head>
        <Navbar />
        <Component {...pageProps}/> 
        <Footer />
      </div>
      <Analytics />
    </>
  )
}
