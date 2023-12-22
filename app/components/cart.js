'use client'

import React from 'react';
import { CartContext } from '../contexts/cartContext';
import Link from 'next/link';
import Image from 'next/image'



export default function Cart() {

    const { data, dispatch } = React.useContext(CartContext)
    console.log(data);

    function total(params) {
        const tottal = data?.map(map => (
            map.quantity * map.price
        ))

        const cartTotal = tottal?.reduce(function (acc, val) { return acc + val; }, 0)

        return cartTotal
    }

    console.log(total());

    if (data?.length === 0) {
        return (
            <div className='homepage-speaker-header-2 ' style={{ textAlign: "center" }}>
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
        < div className="cart" >


            <div className="cart-title" >
                <h2>CART <span>({data?.length})</span></h2>
                <button onClick={() => dispatch({ type: "clearCart" })} className="back-btn">Remove all</button>
            </div>

            <div className="cart-items">
                {
                    data?.map((map) => (
                        <div key={map.id} className="cart-details">
                            <Image
                                src={`/assets/cart/image-${map.slug}.jpg`}
                                alt={`${map.slug}.jpg`}
                                width={100}
                                height={100}
                                className="cart-img"
                            />

                            <div className="cart-info">
                                <h3 className="cart-product-name">{map.name}</h3>
                                <h4 className="cart-product-price">${map.price}</h4>
                            </div>

                            <div className=' add-to-cart-divs cart-span' >
                                <button disabled={map.quantity <= 1 ? true : false} onClick={() => dispatch({ type: "sub", id: map.id })} className="opacity arthBtn">−</button>
                                <span>{map.quantity}</span>
                                <button onClick={() => dispatch({ type: "add", id: map.id })} className="opacity arthBtn ">+</button>
                            </div>

                        </div>
                    ))
                }
            </div>

            <div className="cart-total">
                <h4 className="total-title">TOTAL</h4>
                <h3 className="total-amount">$ {total()}</h3>
            </div>

            <Link href="/checkout">
                <button className="cart-button">CHECKOUT</button>
            </Link>

        </div >
    )
}
