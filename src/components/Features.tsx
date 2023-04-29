'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Cards from './Cards'
import styles from '@/styles/Features.module.css'

const Features = () => {
  return (
    <div className="h-full py-32" id="features">
        <motion.h1 initial={{ opacity: 0, y: 200, scale: 0.5 }} viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5 }}
        className="mb-12 text-5xl font-bold text-center text-white uppercase font-warp">
            An SMS platform built on your satisfaction
        </motion.h1>
        <div className="w-full py-10 px-[10%] box-border ">
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
                className={`block box-border min-w-[380px] float-left my-[1%] mx-0 lg:my-[1%] lg:mr-0 lg:ml-[1.6%] first:ml-0 ${styles.span_1_of_2}`}>
                    <div className="relative z-10 select-none">
                        <div className="w-full h-auto duration-200 box-border hover:scale-[1.02] mt-30 mb-0 mx-auto">
                            <div className="shadow-bg w-[250px] h-auto p-2.5 rounded inline-block bg-zinc-800 text-left">
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
        <div className="w-full -pt-12 -mt-12 px-[10%] box-border">
            <div className="flex flex-col lg:flex-row clear-both p-0 m-0 zoom-1 after:clear-both after:content-[''] after:table before:content-[''] before:table">
                <motion.div initial={{ opacity: 0, x: -200, y: 200, scale: 0.5 }} viewport={{ once: true }} 
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} transition={{ duration: 0.5 }}
                className={`order-2 lg:order-1 block box-border float-left mt-4 mx-0 lg:mr-0 lg:ml-[1.6%] first:ml-0 ${styles.span_1_of_2}`}>
                    <div className="relative z-10 select-none">
                        <div className="w-[280px] sm:w-[340px]">
                            <div className="text-left mb-2.5">
                                <div className="text-sm font-neon font-semibold text-[#6B9FE7] text-left">Staff</div>
                                <div className="rounded-[5px] shadow-bg p-2 text-xs font-neon w-[170px] bg-zinc-800 text-left text-white">How can we help you?</div>
                            </div>
                            <div className="text-right float-right mb-2.5">
                                <div className="text-sm font-neon font-semibold text-[#6B9FE7] text-left">Customer</div>
                                <div className="font-neon rounded-[5px] shadow-bg p-2 text-xs w-[170px] bg-zinc-800 text-left text-white ">I can&apos;t figure out how to check my balance!</div>
                            </div>
                            <div className="float-left text-left sm:mt-16">
                                <div className="text-sm font-neon font-semibold text-[#6B9FE7] text-left">Staff</div>
                                <div className="font-neon rounded-[5px] shadow-bg p-2 text-xs w-[170px] bg-zinc-800 text-left text-white ">Try running the /balance command!</div>
                            </div>
                            <div className="xs:mt-[170px] mt-[160px] text-sm opacity-70 text-left font-neon font-semibold text-[#6B9FE7]"><span className={styles.saving}><span>.</span><span>.</span><span>.</span>
                                    Staff is typing</span></div>
                            <input className="box-border w-full p-2 text-sm text-left text-gray-800 border-none rounded outline-none font-neon shadow-bg bg-zinc-800 ring-0 focus:ring-0" placeholder="Message #ticket-customer" />
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='chat_gradient'></div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 200, y: 200, scale: 0.5 }} viewport={{ once: true }} 
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} transition={{ duration: 0.5 }}
                className={`order-1 lg:order-2 block box-border float-left my-[1%] mx-0 lg:my-[1%] lg:mr-0 lg:ml-[1.6%] first:ml-0 ${styles.span_1_of_2}`}>
                    <div className="mt-16 text-3xl font-extrabold text-white ">
                        Great Support
                    </div>
                    <div className="text-lg opacity-90 mt-2.5 font-light text-white ">With 24/7 availability and 
                        personalized assistance, we ensure that our customers receive the attention they need 
                        to resolve any issues they may encounter quickly and efficiently.
                    </div>
                </motion.div>
            </div>
        </div>
        <div className="w-full py-10 px-[10%] box-border">
                <div className="flex-row hidden lg:flex clear-both p-0 m-0 zoom-1 after:clear-both after:content-[''] after:table before:content-[''] before:table">
                    <motion.div initial={{ opacity: 0, x: -200, y: 200, scale: 0.5 }} viewport={{ once: true }} 
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} transition={{ duration: 0.5 }}
                 className={`block box-border float-left my-[1%] mx-0 lg:my-[1%] lg:mr-0 lg:ml-[1.6%] first:ml-0 ${styles.span_1_of_2}`}>
                        <div className="text-3xl font-extrabold text-white">
                            Accepting Various Payment Methods
                        </div>
                        <div className="text-lg opacity-90 mt-2.5 font-light text-white  max-w-xl">
                            To accomodate all our customer&apos;s needs, we accept payments from many popular gateways such as <strong className='font-bold'>Stripe</strong>, <strong className='font-bold'>PayPal</strong>, <strong className='font-bold'>CashApp</strong>, <strong className='font-bold'>Venmo</strong> and many <strong className='font-bold'>Cryptos</strong>.
                        </div>
                    </motion.div>
                    <div className="mt-8 ml-32 animate-hover">
                        <Cards />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Features