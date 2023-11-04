"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Category from './category';

export default function Header() {

    const [show, setShow] = useState(false)

    const toggleMenu = () => { setShow(prevState => !prevState); console.log(show); };

    const ref = React.useRef();
    React.useEffect(() => {
        const handler = (event) => {
            if (
                show &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                toggleMenu()
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', handler);
        };
    }, []);


    return (
        <>
            <header className='header d-flex'>
                {/* <img src="/assets/Group.svg" alt="" /> */}
                <div onClick={toggleMenu} >
                    <img src="/assets/Group.svg" alt="" />
                </div>
                <Link href="/">
                    <img src="/assets/audiophile 2.svg" alt="" />
                </Link>
                <img src="/assets/cart Icon.svg" alt="" />
            </header>

            <div ref={ref} className={`toggleNav ${show ? "showNav" : " "} d-flex`} onClick={toggleMenu}> <Category /> </div>

        </>
    )
}