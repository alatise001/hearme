'use client'

import React from 'react';
import { CartContext } from '../contexts/cartContext';
import Link from 'next/link';


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
            <div className='homepage-speaker-header-2' style={{ textAlign: "center" }}>
                <img src="/assets/cart.svg" alt="" />

                <p>Your cart is Empty</p>
                {/* 
                <Link href={'/'}>
                    <button className='header-btn product-btn'>Start Shopping</button>
                </Link> */}
            </div>
        )
    }


    return (
        // <div className="cart-container">
        < div className="cart" >


            <div className="cart-title" >
                <h2>CART <span>({data?.length})</span></h2>
                <button onClick={() => dispatch({ type: "clearCart" })} className="back-btn">Remove all</button>
            </div>

            <div className="cart-items">
                {
                    data.map((map) => (
                        <div key={map.id} className="cart-details">
                            <img className="cart-img" src={`/assets/cart/image-${map.slug}.jpg`} alt="" />

                            <div className="cart-info">
                                <h3 className="cart-product-name">{map.name}</h3>
                                <h4 className="cart-product-price">${map.price}</h4>
                            </div>

                            <div className=' add-to-cart-divs cart-span' >
                                <button disabled={map.quantity <= 1 ? true : false} onClick={() => dispatch({ type: "sub", id: map.id })} className="opacity">−</button>
                                <span>{map.quantity}</span>
                                <button onClick={() => dispatch({ type: "add", id: map.id })} className="opacity">+</button>
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
        // </div >
    )
}
