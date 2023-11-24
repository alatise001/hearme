"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Category from './category';
import Cart from './cart';

export default function Header() {

    const [show, setShow] = useState(false)
    const [cart, setCart] = useState(false)

    const toggleMenu = () => { setShow(prevState => !prevState); console.log(show); };
    const toggleCart = () => { setCart(prevState => !prevState); console.log(cart); };

    function toggle(params) {
        if (show === true) {

        }

    }

    const ref = React.useRef();
    React.useEffect(() => {
        const handler = (event) => {
            if (
                (cart || show) &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                toggleMenu()
                toggleCart()
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
                <div onClick={cart ? null : toggleMenu} >
                    <img src="/assets/Group.svg" alt="" />
                </div>
                <Link href="/">
                    <img className='headerIcon' src="/assets/audiophile 2.svg" alt="" />
                </Link>

                <div onClick={show ? null : toggleCart}>
                    <img src="/assets/cart Icon.svg" alt="" />
                </div>
            </header>

            <div ref={ref} className={`toggle toggleNav ${show ? "showNav" : " "} d-flex`} onClick={toggleMenu}> <Category /> </div>
            <div ref={ref} className={`toggle toggleCart ${cart ? "showNav-1" : " "} d-flex`} onClick={toggleCart}> <Cart /> </div>

        </>
    )
}