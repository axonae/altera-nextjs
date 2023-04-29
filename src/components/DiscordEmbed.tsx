import Image from 'next/image'
import React from 'react'
import styles from '@/styles/DiscordEmbed.module.css'

const DiscordEmbed = () => {
  return (
    <div className={`${styles.tilting_card_wrapper} select-text lg:select-none grid place-content-center`}>
        <div className={styles.mouse_position_tracker}></div>
        <div className={styles.mouse_position_tracker}></div>
        <div className={styles.mouse_position_tracker}></div>
        <div className={styles.mouse_position_tracker}></div>
        <div className={styles.mouse_position_tracker}></div>
        <div className={styles.mouse_position_tracker}></div>
        <div className={styles.mouse_position_tracker}></div>
        <div className={styles.mouse_position_tracker}></div>
        <div className={styles.mouse_position_tracker}></div>
        <div className={styles.tilting_card_body}>
            <div className="w-[300px] sm:w-[400px] h-auto py-2 sm:py-4 pl-2 sm:pl-4 pr-5 sm:pr-2 rounded inline-block bg-zinc-800 text-left">
                <h2 className="mb-1 text-base font-semibold text-white font-discord">SMS Number Generated</h2>
                <div className="flex flex-row">
                    <Image src="/bubble.png" alt="emoji" width={1000} height={1000} className="w-[18px] h-[18px]"/>
                    <p className="ml-1 text-zinc-300 text-[13px] font-discord hidden sm:block">You will only be charged once a text message is received</p>
                    <div className="block flex-cols sm:hidden">
                        <p className="ml-1 text-zinc-300 text-[13px] font-discord">You will only be charged once a text</p>
                        <p className="text-zinc-300 text-[13px] font-discord -ml-4">message is received</p>
                    </div>

                </div>
                <div className="sm:bg-zinc-900 rounded mr-6 h-8 mt-1.5">
                    <p className="text-xs sm:text-sm text-zinc-300 sm:text-blue-300 sm:font-discordCode ml-2.5 pt-1.5">447405754987</p>
                </div>
                <div className="flex flex-col sm:gap-y-3">
                    <div className="flex flex-col sm:flex-row justify-between max-w-[89%] mt-2">
                        <div>
                            <h3 className="text-white text-[13px] font-semibold">Service:</h3>
                            <p className="text-zinc-300 text-[13px]">Ubisoft</p>
                        </div>
                        <div>
                            <h3 className="text-white text-[13px] font-semibold">Message Rate:</h3>
                            <p className="text-zinc-300 text-[13px] sm:text-[11px] sm:font-discordCode sm:bg-zinc-900 pl-[2px] w-[38px] rounded">$0.48</p>
                        </div>
                        <div>
                            <h3 className="text-white text-[13px] font-semibold">Country:</h3>
                            <p className="text-zinc-300 text-[13px]">
                                United Kingdom
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between max-w-[85%] mt-2">
                        <div>
                            <h3 className="text-white text-[13px] font-semibold">Number:</h3>
                            <p className="text-zinc-300 text-[13px]">+44 7405 754987</p>
                        </div>
                        <div>
                            <h3 className="text-white text-[13px] font-semibold">Balance:</h3>
                            <p className="text-zinc-300 text-[13px] sm:text-[11px] sm:font-discordCode sm:bg-zinc-900 pl-[2px] w-[38px] rounded">$1.57</p>
                        </div>
                        <div>
                            <h3 className="text-white text-[13px] font-semibold">Expiring in:</h3>
                            <p className="text-zinc-300 text-[13px] sm:text-[13px] sm:bg-zinc-700 pl-[2px] w-[85px] rounded">in 10 minutes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DiscordEmbed