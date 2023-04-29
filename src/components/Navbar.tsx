import React, { useState } from 'react'
import Image from 'next/image'
import { BsDiscord, BsGithub } from 'react-icons/bs'
import { ImHammer2 } from 'react-icons/im'
import Link from 'next/link'


const Navbar = () => {

    return (
        <nav className="sm:px-4 py-2.5 top-0 fixed w-full z-20 left-0 backdrop-saturate-[180%] backdrop-blur-[10px] shadow-[rgba(2,1,1,0.1)_0px_5px_20px_-5px]">
            <div className="flex flex-wrap items-center justify-between px-8">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <Image src="/altera.png" alt="" width={2000} height={2000} className="w-12 h-12"/>
                        <Image src="/altera_text.png" alt="" width={2000} height={2000} className="w-auto h-10"/>
                    </Link>
                </div>
                
                <div className="absolute items-center justify-center hidden w-screen left-1/2 right-1/2 lg:flex md:w-auto md:order-3">
                    <ul className="flex flex-col p-4 mt-4 select-none md:flex-row md:space-x-8 md:mt-0 md:text-md">
                        <li>
                            <Link href="/#features" className="block py-2 pl-3 pr-4 rounded md:p-0 text-zinc-300 hover:text-zinc-400">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link href="/#services" className="block py-2 pl-3 pr-4 rounded md:p-0 text-zinc-300 hover:text-zinc-400">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/#purchase" className="block py-2 pl-3 pr-4 rounded md:p-0 text-zinc-300 hover:text-zinc-400">
                                Purchase
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden sm:flex md:order-2">
                    <Link href="https://github.com/AlteraServices" target="_blank" className="text-[#6B7176] hover:text-[#3C3F43] text-xl pl-2 px-3 py-1 pt-2.5 text-center md:mr-0 duration-100">
                        <BsGithub />
                    </Link>
                    <Link href="https://discord.gg/alterasms" target="_blank" className="text-[#6B7176] hover:text-[#3C3F43] text-xl pl-2 px-3 py-1 pt-2.5 text-center md:mr-0 duration-100">
                        <BsDiscord />
                    </Link>
                    <Link href="/tos" className="bg-[#333333] text-[#12181C]
                    dark:text-[#ECEDEE] font-medium rounded-lg text-sm mx-5 px-3 py-2.5 text-center md:mr-0 mr-3 select-none flex gap-1.5">
                        <ImHammer2 className="w-5 h-5 text-yellow-500"/> 
                        Terms of Service
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar