'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Cards from './Cards'
import styles from '@/styles/Features.module.css'
import Link from 'next/link'

const Features = () => {
  return (
    <div className="md:h-full md:py-32" id="features">
        <motion.h1 initial={{ opacity: 0, y: 200, scale: 0.5 }} viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5 }}
        className="mb-12 text-5xl font-bold text-center text-white uppercase font-warp">
            An SMS platform built on your satisfaction
        </motion.h1>
        <div className="w-full md:py-10 md:px-[10%] box-border ">
            <div className="clear-both p-0 m-0 zoom-1 after:clear-both after:content-[''] after:table before:content-[''] before:table">
                <motion.div initial={{ opacity: 0, x: -200,  y: 200, scale: 0.5 }} viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} transition={{ duration: 0.5 }}
                className={`block box-border float-left my-[1%] mx-0 lg:my-[1%] lg:mr-0 lg:ml-[1.6%] first:ml-0 ${styles.span_1_of_2}`}>
                    <div className="text-3xl font-extrabold text-white">
                        Satisfied Customers
                    </div>
                    <div className="text-lg opacity-90 mt-2.5 font-light text-white ">
                        Our staff, devs and owners are experienced in customer support and guarantee your satisfaction. We&apos;ve managed to gain our reputation by keeping customers happy with our services.
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 200, y: 200, scale: 0.5 }} viewport={{ once: true }} 
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} transition={{ duration: 0.5 }}
                className={`block box-border float-left my-[1%] mx-0 lg:my-[1%] lg:mr-0 lg:ml-[1.6%] first:ml-0 ${styles.span_1_of_2}`}>
                    <div className="relative z-10 select-none">
                        <div className="w-full h-auto duration-200 box-border hover:scale-[1.02] mt-30 mb-0 mx-auto">
                            <div className="shadow-bg w-[200px] sm:w-[250px] h-auto p-2.5 rounded inline-block bg-zinc-800 text-left">
                                <div className="mb-1 text-xl font-semibold text-white font-neon ">Reviews</div>
                                <a className="text-sm text-[#6B9FE7] font-neon duration-200 hover:text-[#5B6BD8]" href="https://discord.gg/wgSm3SayuR" target="_blank">
                                    See our Reviews
                                </a>
                            </div>
                            <div className="shadown-bg w-[210px] h-auto p-[10px] rounded inline-block -ml-[80px] bg-zinc-800 text-left align-[-10px]">
                                <div className="">
                                    <Image className="rounded-[50%] w-[25px] inline-block shadow-profile" width={1000} height={1000}
                                        src="https://rdgb.net/i/Pbwny.jpg" alt="custom_pfp"/>
                                    <Image className="rounded-[50%] w-[25px] inline-block shadow-profile -ml-3" width={1000} height={1000}
                                        src="https://rdgb.net/i/ebWbu.jpg" alt="custom_pfp"/>
                                    <Image className="rounded-[50%] w-[25px] inline-block shadow-profile -ml-3" width={1000} height={1000}
                                        src="https://rdgb.net/i/uWiGK.jpeg" alt="custom_pfp"/>
                                    <Image className="rounded-[50%] w-[25px] inline-block shadow-profile -ml-3" width={1000} height={1000}
                                        src="https://rdgb.net/i/y4qu7.jpeg" alt="custom_pfp"/>
                                    <Image className="rounded-[50%] w-[25px] inline-block shadow-profile -ml-3" width={1000} height={1000}
                                        src="https://rdgb.net/i/oC8Js.jpeg" alt="custom_pfp"/>
                                    <Image className="rounded-[50%] w-[25px] inline-block shadow-profile -ml-3" width={1000} height={1000}
                                        src="https://rdgb.net/i/ak2Sb.jpeg" alt="custom_pfp"/>
                                </div>
                                <div className="text-xs text-white font-neon">Ranked <b>Outstanding</b> by customers.</div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='review_gradient'></div>
                    </div>
                </motion.div>
            </div>
        </div>
        <div className="w-full md:-pt-1 md:-mt-12 px-[10%] box-border">
            <div className="flex flex-col lg:flex-row clear-both p-0 m-0 zoom-1 after:clear-both">
                <motion.div initial={{ opacity: 0, x: -200, y: 200, scale: 0.5 }} viewport={{ once: true }} 
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} transition={{ duration: 0.5 }}
                className={`order-2 lg:order-1 block box-border float-left mt-4 mx-0 lg:mr-0 lg:ml-[1.6%] first:ml-0 w-1/2`}>
                    <div className="relative z-10 select-none rounded-3xl">
                        <Image src="/dpy.png" alt='gin logo' width={200} height={200} className='mx-auto'/>
                    </div>
                    <div className='relative lg:ml-32 md:ml-60 sm:ml-40 xs:ml-20'>
                        <div className='chat_gradient '/>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 200, y: 200, scale: 0.5 }} viewport={{ once: true }} 
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} transition={{ duration: 0.5 }}
                className={`order-1 lg:order-2 block box-border float-left my-[1%] mx-0 lg:my-[1%] lg:mr-0 lg:ml-[1.6%] first:ml-0 `}>
                    <div className="mt-16 text-3xl font-extrabold text-white ">
                        Strong Foundation. Built for reliability
                    </div>
                    <div className="text-lg opacity-90 mt-2.5 font-light text-white ">
                        Our service is comprised of top tier frameworks made to last. Our payments are managed by <Link href="https://sellix.io" target="_blank" className="font-bold underline decoration-indigo-800 decoration-solid underline-offset-2 hover:underline-offset-4 duration-200 hover:text-[18.90px]">sellix.io</Link> for reliability; our website uses <Link href="https://nextjs.org/" target="_blank" className="font-bold underline decoration-blue-500 decoration-solid underline-offset-2 hover:underline-offset-4 duration-200 hover:text-[18.90px]">NextJS 13</Link> with Typescript and <Link href="https://tailwindcss.com/" target="_blank" className="font-bold underline decoration-sky-500 decoration-solid underline-offset-2 hover:underline-offset-4 duration-200 hover:text-[18.90px]">TailwindCSS</Link> along with the newly released app directory, and our discord bot is written in python using the <Link href="https://github.com/Rapptz/discord.py" target="_blank" className="font-bold underline decoration-sky-700 decoration-solid underline-offset-2 hover:underline-offset-4 duration-200 hover:text-[18.90px]">discord.py</Link> library!
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Features