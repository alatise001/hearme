"use client"


import React, { useState } from 'react'
import Link from 'next/link'
import Category from './category';

export default function Header() {

    const [show, setShow] = useState(false)

    const toggleMenu = () => { setShow(prevState => !prevState); };

    // console.log(show);

    return (
        <>
            <header className='header d-flex'>
                {/* <img src="/assets/Group.svg" alt="" /> */}
                <div onClick={() => setShow(prevState => !prevState)} >
                    <img src="/assets/Group.svg" alt="" />
                </div>
                <Link href="/">
                    <img src="/assets/audiophile 2.svg" alt="" />
                </Link>
                <img src="/assets/cart Icon.svg" alt="" />
            </header>

            {show ? <div> <Category /> </div> : ""}

        </>
    )
}