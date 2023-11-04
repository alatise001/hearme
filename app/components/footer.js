import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <footer className='footer d-flex'>
            <Link href="/">
                <img src="/assets/audiophile 2.svg" alt="" />
            </Link>

            <Link href={"/"}>
                <h3 className='footerlinks'>HOME</h3>
            </Link>

            <Link href={`/categories/${"headphones"}`}>
                <h3 className='footerlinks'>HEADPHONES</h3>
            </Link>

            <Link href={`/categories/${"speakers"}`}>
                <h3 className='footerlinks'>SPEAKERS</h3>
            </Link>

            <Link href={`/categories/${"earphones"}`}>
                <h3 className='footerlinks'>EARPHONES</h3>
            </Link>

            <p className='pgh footer-pgh'>
                Audiophile is an all in one stop to fulfill your
                audio needs. We're a small team of music lovers and sound
                specialists who are devoted to helping you get
                the most out of personal audio.
                Come and visit our demo facility - we’re open 7 days a week.
            </p>

            <p className='pgh' style={{ color: "white" }}>Copyright 2021. All Rights Reserved</p>

            <img src="/assets/Social.svg" alt="" />

        </footer>
    )
}

export default Footer