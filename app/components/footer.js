import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

function Footer() {
    return (
        <footer className='footer d-flex'>
            <div className='footer-div'>
                <div className='footer-link-div'>
                    <Link href="/">
                        <Image
                            src="/assets/audiophile 2.svg"
                            alt='audiophile'
                            width={100}
                            height={100}
                        />
                    </Link>
                    <div className='footer-links-div'>

                        <Link href={"/"}>
                            <motion.h3 className='footerlinks'
                                whileHover={{
                                    scale: 1.1
                                }}
                            >HOME</motion.h3>
                        </Link>

                        <Link href={`/categories/${"headphones"}`}>
                            <motion.h3
                                whileHover={{
                                    scale: 1.1
                                }}
                                className='footerlinks'>HEADPHONES</motion.h3>
                        </Link>

                        <Link href={`/categories/${"speakers"}`}>
                            <motion.h3
                                whileHover={{
                                    scale: 1.1
                                }}
                                className='footerlinks'>SPEAKERS</motion.h3>
                        </Link>

                        <Link href={`/categories/${"earphones"}`}>
                            <motion.h3
                                whileHover={{
                                    scale: 1.1
                                }}
                                className='footerlinks'>EARPHONES</motion.h3>
                        </Link>
                    </div>

                </div>

                <div className='footer-bottom'>
                    <div className='footer-bottom-div'>
                        <p className='pgh footer-pgh'>
                            Audiophile is an all in one stop to fulfill your
                            audio needs. We{`'`}re a small team of music lovers and sound
                            specialists who are devoted to helping you get
                            the most out of personal audio.
                            Come and visit our demo facility - we’re open 7 days a week.
                        </p>

                        <p className='pgh' style={{ color: "white" }}>Copyright 2021. All Rights Reserved</p>
                    </div>

                    <div className='footer-btn-div'>
                        <Image
                            src="/assets/Social.svg"
                            alt='Social'
                            width={100}
                            height={100}
                        />
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer