/* eslint-disable @next/next/no-sync-scripts */
"use client"
import React from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles/Purchase.module.css'

const Purchase = () => {
  return (
    <div className="mt-[36rem] md:mt-[28rem] lg:mt-32">
        <script src="https://cdn.sellix.io/static/js/embed.js"/>
        <motion.h1 initial={{ opacity: 0, y: 200, scale: 0.5 }} viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5 }}
        className="pt-32 -mt-32 text-5xl font-bold text-center text-white uppercase font-warp"
        >
            Purchase Credits
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 200, scale: 0.5 }} viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5 }}
        className={`${styles.container} mx-auto`}
        >
            <div className={styles.box}>
                <span></span>
                <div className={styles.content}>
                    <h2 className="text-white font-warp">Altera SMS Credits</h2>
                    <p className="text-white font-neon ">Credits for our discord bot that are used when checking for incomming 2fa codes.</p>
                    <button
                        data-sellix-product="640d631074c7d"
                        type="submit"
                        className={styles.button_86} 
                        role="button"
                    >
                        Purchase
                    </button>
                </div>
            </div>
        </motion.div> 
    </div>
  )
}

export default Purchase