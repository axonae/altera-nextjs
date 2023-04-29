"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from '@/styles/Services.module.css'

const Services = () => {
  return (
    <div className={`hidden lg:flex flex-col ${styles.wrapper}`}>

  <motion.h1 initial={{ opacity: 0, y: 200, scale: 0.5 }} viewport={{ once: true }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5 }}
  className="mb-12 text-5xl font-bold text-center text-white uppercase font-warp"
  >
    A Wide Range of Supported Services
  </motion.h1>
  <motion.div initial={{ opacity: 0, y: 200, scale: 0.5 }} viewport={{ once: true }} 
  whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5 }}
  >
    <div className={styles.marquee}>
      <div className={styles.marquee__group}>
        <Image src="/services/blizzard.png" alt="Blizzard" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/adobe.png" alt="Adobe" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/doordash.png" alt="Doordash" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/g2g.png" alt="G2G" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/openAI.png" alt="OpenAI" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/riot.jpg" alt="RiotGames" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/roblox.png" alt="Roblox" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/g2a.png" alt="G2A" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/steam.png" alt="Steam" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/ubisoft.png" alt="Ubisoft" width={2000} height={2000} className={styles.image}/>
      </div>

      <div aria-hidden="true" className={styles.marquee__group}>
        <Image src="/services/blizzard.png" alt="Blizzard" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/adobe.png" alt="Adobe" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/doordash.png" alt="Doordash" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/g2g.png" alt="G2G" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/openAI.png" alt="OpenAI" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/riot.jpg" alt="RiotGames" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/roblox.png" alt="Roblox" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/g2a.png" alt="G2A" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/steam.png" alt="Steam" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/ubisoft.png" alt="Ubisoft" width={2000} height={2000} className={styles.image}/>
      </div>
    </div>

    <div className={`${styles.marquee} ${styles.marquee__reverse}`}>
      <div className={styles.marquee__group}>
        <Image src="/services/faceit.png" alt="Faceit" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/ea.png" alt="EA" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/discord.png" alt='Discord' width={2000} height={2000} className={styles.image}/>
        <Image src="/services/houseparty.png" alt="Housepart" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/spotify.png" alt="Spotify" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/snapchat.png" alt="Snapchat" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/instagram.png" alt="Instagram" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/xbox.png" alt="Xbox" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/uber.png" alt="Uber" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/pinterest.png" alt="Pinterest" width={2000} height={2000} className={styles.image}/>
      </div>

      <div aria-hidden="true" className={styles.marquee__group}>
        <Image src="/services/faceit.png" alt="Faceit" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/ea.png" alt="EA" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/discord.png" alt='Discord' width={2000} height={2000} className={styles.image}/>
        <Image src="/services/houseparty.png" alt="Housepart" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/spotify.png" alt="Spotify" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/snapchat.png" alt="Snapchat" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/instagram.png" alt="Instagram" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/xbox.png" alt="Xbox" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/uber.png" alt="Uber" width={2000} height={2000} className={styles.image}/>
        <Image src="/services/pinterest.png" alt="Pinterest" width={2000} height={2000} className={styles.image}/>
      </div>
    </div>
  </motion.div>
</div>
  )
}

export default Services