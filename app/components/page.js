'use client'

import BackBtn from "./backBtn";
import React from 'react';
import { CartContext } from '../contexts/cartContext';

export default function Components() {


    const { data, dispatch } = React.useContext(CartContext)
    console.log(data);

    function total(params) {
        const tottal = data?.map(map => (
            map.quantity * map.price
        ))

        const cartTotal = tottal.reduce(function (acc, val) { return acc + val; }, 0)


        return cartTotal
    }


    return (
        // <div className="form">
        <>
            <BackBtn />

            <div className="checkout-div">


                <form className="form">
                    <h1 className="payment-title">CHECKOUT</h1>
                    {/* <div> */}

                    <h2 className="payment-sub-title">BILLING DETAILS</h2>

                    <div className="billing">
                        <div className="input-div">

                            <label className="label" htmlFor="name">Name</label>
                            <input
                                className="input"
                                type="text"
                                name="name"
                                placeholder="name"
                            // onChange={handlechg}
                            // onBlur={handleBlur}
                            // value={formData.email}
                            />

                        </div>

                        <div className="input-div">

                            <label className="label" htmlFor="email">Email Address</label>
                            <input
                                className="input"
                                type="text"
                                name="email"
                                placeholder="email"
                            // onChange={handlechg}
                            // onBlur={handleBlur}
                            // value={formData.email}
                            />

                        </div>

                        <div className="input-div">

                            <label className="label" htmlFor="phone">Phone Number</label>
                            <input
                                className="input"
                                type="text"
                                name="phone"
                                placeholder="phone"
                            // onChange={handlechg}
                            // onBlur={handleBlur}
                            // value={formData.email}
                            />

                        </div>
                    </div>

                    {/* </div> */}

                    <h2 className="payment-sub-title">SHIPPING INFO</h2>

                    <div className="billing">
                        <div className="input-div">

                            <label className="label" htmlFor="address">Your Address</label>
                            <input
                                className="input"
                                type="text"
                                name="address"
                                placeholder="address"
                            // onChange={handlechg}
                            // onBlur={handleBlur}
                            // value={formData.email}
                            />

                        </div>

                        <div className="input-div">

                            <label className="label" htmlFor="zip">Zip Code</label>
                            <input
                                className="input"
                                type="text"
                                name="zip"
                                placeholder="zip code"
                            // onChange={handlechg}
                            // onBlur={handleBlur}
                            // value={formData.email}
                            />

                        </div>

                        <div className="input-div">

                            <label className="label" htmlFor="city">City</label>
                            <input
                                className="input"
                                type="text"
                                name="city"
                                placeholder="city"
                            // onChange={handlechg}
                            // onBlur={handleBlur}
                            // value={formData.email}
                            />

                        </div>

                        <div className="input-div">

                            <label className="label" htmlFor="country">Country</label>
                            <input
                                className="input"
                                type="text"
                                name="country"
                                placeholder="country"
                            // onChange={handlechg}
                            // onBlur={handleBlur}
                            // value={formData.email}
                            />

                        </div>
                    </div>

                    <h2 className="payment-sub-title">PAYMENT DETAILS</h2>

                    <div className="billing">
                        <fieldset>
                            <div className="label">Payment Method</div>

                            <div className="radio-div">

                                <input
                                    className="radio-input"
                                    type="radio"
                                    name="e-pin"
                                    placeholder="e-Money Pin"
                                // onChange={handlechg}
                                // onBlur={handleBlur}
                                // value={formData.email}
                                />
                                <label className="label" htmlFor="e-pin">e-Money Pin</label>

                            </div>

                            <div className="radio-div">

                                <input
                                    className="radio-input"
                                    type="radio"
                                    name="e-pin"
                                    placeholder="e-Money Pin"
                                // onChange={handlechg}
                                // onBlur={handleBlur}
                                // value={formData.email}
                                />
                                <label className="label" htmlFor="e-pin">Cash on Delivery</label>

                            </div>
                        </fieldset>


                        <div className="input-div">

                            <label className="label" htmlFor="e-number">e-Money Number</label>
                            <input
                                className="input"
                                type="text"
                                name="e-number"
                                placeholder="e-Money Number"
                            // onChange={handlechg}
                            // onBlur={handleBlur}
                            // value={formData.email}
                            />

                        </div>

                        <div className="input-div">

                            <label className="label" htmlFor="e-pin">e-Money Pin</label>
                            <input
                                className="input"
                                type="text"
                                name="e-pin"
                                placeholder="e-Money Pin"
                            // onChange={handlechg}
                            // onBlur={handleBlur}
                            // value={formData.email}
                            />

                        </div>
                    </div>
                </form>

                <div className="cart-summary">
                    <div className="cart-title" >
                        <h2>Summary </h2>
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

                                    <p className="summary-qty">x{map.quantity}</p>
                                    {/* <div className=' add-to-cart-divs cart-span' >
                                    </div> */}

                                </div>
                            ))
                        }
                    </div>

                    <div className="total-amt-div">
                        <div className="total-amt-sub-div">
                            <div className="cart-total">
                                <h4 className="total-title">TOTAL</h4>
                                <h3 className="total-amount">$ {total()}</h3>
                            </div>

                            <div className="cart-total">
                                <h4 className="total-title">SHIPPING</h4>
                                <h3 className="total-amount">$ 50</h3>
                            </div>
                        </div>

                        <div className="cart-total">
                            <h4 className="total-title">GRAND TOTAL</h4>
                            <h3 className="total-amount">$ {total() + 50}</h3>
                        </div>
                    </div>


                    <button className="cart-button">CONTINUE & PAY</button>
                </div>
            </div>

        </>

        // </div >

        // </div>

    );
}
