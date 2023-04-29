import { Inter } from 'next/font/google'
import { Features, Purchase, Services } from '@/components'
import Header from '@/components/Header'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-black">
      <div>
        {/* <div className='header_gradient'></div> */}
          <Header/>
      </div>
      <section id="features" className='pt-5 -mt-5'>
        <Features />
      </section>
      <section id="services" className="pt-56 -mt-48">
        <Services />
      </section>
      <section id="purchase" className="">
        <Purchase />
      </section>
    </main>
  )
}
