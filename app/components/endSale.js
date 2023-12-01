'use client'
import React from 'react';

import { CartContext } from '../contexts/cartContext';
import Link from 'next/link';


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



    return (
        <div className="confirm-container">
            <div className="confirm">
                <div className="checkbox d-flex">
                    <img src="/assets/Check.svg" alt="" />

                </div>

                <h1 className="confirmation-header">THANK YOU
                    FOR YOUR ORDER</h1>
                <p className="confirmation">You will receive an email confirmation shortly.</p>

                <div className="confirm-info-div">
                    <div className="confirm-products-div">

                        < div className="cart-details">

                            <img className="cart-img" src={`/assets/cart/image-${data[0]?.slug}.jpg`} alt="" />

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
