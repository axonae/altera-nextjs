'use client'
import React from 'react'
import DiscordEmbed from './DiscordEmbed'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className="h-screen">
        <div className="max-w-[1250px] mx-auto flex flex-col lg:flex-row justify-evenly pt-32 lg:pt-40 gap-10">
            <motion.div 
            initial={{ opacity: 0, x:-100, y: 200, scale: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="relative flex flex-col items-center gap-16 text-center lg:items-left lg:text-left ">
                <div  className="mt-5 ">
                    <h2 className="text-5xl text-white font-warp lg:text-7xl">Altera SMS</h2>
                    <p className="text-xl text-white font-neon lg:text-2xl">Cheap, Reliable & Easy to Use</p>
                </div>
                <div className="pt-10 lg:pt-0">
                    <DiscordEmbed />
                </div>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, x:100, y: 200, scale: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="hidden lg:flex"
            >   
                <div className='relative'>
                    <div className='header_gradient'></div>
                </div>
                <iframe src="https://e.widgetbot.io/channels/1123119648670482474/1123134997180731465" height="400" width="600" className='relative'></iframe>
            </motion.div>
        </div>
    </div>
  )
}

export default Header