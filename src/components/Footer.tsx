import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full mx-auto mt-32 max-w-container">
        <div className="py-10 border-t border-zinc-100/20">
            <div className="flex flex-row w-auto h-5 mx-auto -ml-5 text-slate-900 place-content-center">
                <Image src="/altera.png" alt="altera-logo" width={1000} height={1000} className='w-12 h-12 -mt-2'/>
                <h2 className="pl-2 text-2xl text-white font-warp">Altera SMS</h2>
            </div>
            <p className="mt-12 text-sm leading-6 text-center text-zinc-600 dark:text-zinc-400 font-neon">© 2023 Altera SMS. All rights reserved.</p>
            <div className="flex items-center justify-center mt-16 space-x-4 text-sm font-semibold leading-6 text-zinc-400 font-neon">
                <Link href="/privacy-policy" className="hover:text-zinc-100">Privacy policy</Link>
                <div className="w-px h-4 bg-zinc-100/40"></div>
                <Link href="/tos" className="hover:text-zinc-100">Terms of Service</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer