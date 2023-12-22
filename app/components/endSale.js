'use client'
import React from 'react';

import { CartContext } from '../contexts/cartContext';
import Link from 'next/link';
import Image from 'next/image'



export default function CheckoutSuccess() {

    const { dispatch, data } = React.useContext(CartContext)

    function handleClick(params) {
        dispatch({ type: "setChat", details: params })
    }

    function total(params) {
        const tottal = data?.map(map => (
            map.quantity * map.price
        ))

        const cartTotal = tottal.reduce(function (acc, val) { return acc + val; }, 0)


        return cartTotal
    }

    if (data?.length === 0) {
        return (
            <div className='homepage-speaker-header-2' style={{ textAlign: "center", height: "100vh" }}>
                <Image
                    src="/assets/cart.svg"
                    alt='cart'
                    width={100}
                    height={100}
                />

                <p>Your cart is Empty</p>
            </div>
        )

    }

    return (
        <div className="confirm-container">
            <div className="confirm">
                <div className="checkbox d-flex">
                    <Image
                        src="/assets/Check.svg"
                        alt='Check'
                        width={35}
                        height={35}
                    />

                </div>

                <h1 className="confirmation-header">THANK YOU
                    FOR YOUR ORDER</h1>
                <p className="confirmation">You will receive an email confirmation shortly.</p>

                <div className="confirm-info-div">
                    <div className="confirm-products-div">

                        < div className="cart-details">

                            <Image
                                src={`/assets/cart/image-${data[0].slug}.jpg`}
                                alt={`${data[0].slug}.jpg`}
                                width={500}
                                height={500}
                                className="cart-img"
                            />


                            <div className="cart-info">
                                <h3 className="cart-product-name">{data[0].name}</h3>
                                <h4 className="cart-product-price">${data[0].price}</h4>
                            </div>

                            <div className='confirm-qty' >
                                {data[0].quantity}
                            </div>

                        </div>
                        {
                            (data.length > 1) && <p className="others">and {data.length - 1} other item(s)</p>
                        }
                    </div>

                    <div className="confirm-total-div">
                        <h4 className="confirm-title" style={{ color: "white" }}>GRAND TOTAL</h4>
                        <h3 className="confirm-amount" style={{ color: "white" }}>$ {total() + 50}</h3>
                    </div>
                </div>

                <Link href={"/"}>
                    <button onClick={() => dispatch({ type: "clearCart" })} className="cart-button">
                        BACK TO HOME
                    </button>
                </Link>
            </div>

        </div >
    )
}
