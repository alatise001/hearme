'use client'

import React from 'react';
import { CartContext } from '../contexts/cartContext';

export default function Components() {

    const STATUS = {
        IDLE: "IDLE",
        SUBMITTED: "SUBMITTED",
        SUBMITTING: "SUBMITTING",
        COMPLETED: "COMPLETED",
    };

    const [formData, setFormData] = React.useState({
        email: "",
        name: "",
        phone: "",
        address: "",
        zip: "",
        city: "",
        country: "",
        paymentMethod: "",
        eMoneyNumber: "",
        eMoneyPin: "",
    });

    const [isStatus, setStatus] = React.useState(STATUS.IDLE);
    const [touched, setTouched] = React.useState({});
    const [loginError, setLoginError] = React.useState(null)

    const errors = getErrors();
    const isValid = Object.keys(errors).length === 0;

    const { data } = React.useContext(CartContext)
    console.log(data);

    function total(params) {
        const tottal = data?.map(map => (
            map.quantity * map.price
        ))

        const cartTotal = tottal.reduce(function (acc, val) { return acc + val; }, 0)


        return cartTotal
    }

    function handleChg(e) {
        // console.log(e.target);
        const { name, value, checked, type } = e.target;
        setFormData((prevState) => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    }

    function handleBlur(e) {
        console.log(e.target);
        const { name } = e.target;
        setTouched((prevState) => {
            return {
                ...prevState,
                [name]: true,
            };
        });

        console.log(touched);
    }

    console.log(formData);

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus(STATUS.SUBMITTING);

        if (isValid) {
            setStatus(STATUS.COMPLETED);
        } else {
            setStatus(STATUS.SUBMITTED);
        }
    }

    function ValidateEmail(inputText) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputText.match(mailformat)) {
            return true;
        }
        else {
            return false;
        }
    }


    function getErrors(params) {
        const result = {};

        if (!formData.name) result.name = "Username is required";
        if (!formData.phone) result.phone = "Phone is required";
        if (!formData.address) result.address = "Address is required";
        if (!formData.zip) result.zip = "Zip Code is required";
        if (!formData.city) result.city = "City is required";
        if (!formData.country) result.country = "Country is required";
        if (!formData.paymentMethod) result.paymentMethod = "Payment Method is required";
        if (!formData.eMoneyNumber) result.eMoneyNumber = "e-Money Number is required";
        if (!formData.eMoneyPin) result.eMoneyPin = "e-Money Pin is required";

        if (!formData.email) {
            result.email = "Email is required";
        } else if (!ValidateEmail(formData.email)) {
            // console.log("note corrre");
            result.email = "Email is not correct";
        }

        // if (!formData.password) result.password = "Please enter Password";
        return result;
    }

    if (loginError) throw loginError

    if (isStatus === "SUBMITTING") return (<div className="container">.LOADING</div>)


    return (
        // <div className="form">

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
                            onChange={handleChg}
                            onBlur={handleBlur}
                            value={formData.name}
                        />

                        <p className="error" role="alert">
                            {(touched.name || isStatus === STATUS.SUBMITTED) && errors.name}
                        </p>

                    </div>

                    <div className="input-div">

                        <label className="label" htmlFor="email">Email Address</label>
                        <input
                            className="input"
                            type="text"
                            name="email"
                            placeholder="email"
                            onChange={handleChg}
                            onBlur={handleBlur}
                            value={formData.email}
                        />

                        <p className="error" role="alert">
                            {(touched.email || isStatus === STATUS.SUBMITTED) && errors.email}
                        </p>

                    </div>

                    <div className="input-div">

                        <label className="label" htmlFor="phone">Phone Number</label>
                        <input
                            className="input"
                            type="tel"
                            name="phone"
                            placeholder="phone"
                            onChange={handleChg}
                            onBlur={handleBlur}
                            value={formData.phone}
                        />
                        <p className="error" role="alert">
                            {(touched.phone || isStatus === STATUS.SUBMITTED) && errors.phone}
                        </p>

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
                            onChange={handleChg}
                            onBlur={handleBlur}
                            value={formData.address}
                        />
                        <p className="error" role="alert">
                            {(touched.address || isStatus === STATUS.SUBMITTED) && errors.address}
                        </p>

                    </div>

                    <div className="input-div">

                        <label className="label" htmlFor="zip">Zip Code</label>
                        <input
                            className="input"
                            type="text"
                            name="zip"
                            placeholder="zip code"
                            onChange={handleChg}
                            onBlur={handleBlur}
                            value={formData.zip}
                        />

                        <p className="error" role="alert">
                            {(touched.zip || isStatus === STATUS.SUBMITTED) && errors.zip}
                        </p>

                    </div>

                    <div className="input-div">

                        <label className="label" htmlFor="city">City</label>
                        <input
                            className="input"
                            type="text"
                            name="city"
                            placeholder="city"
                            onChange={handleChg}
                            onBlur={handleBlur}
                            value={formData.city}
                        />

                        <p className="error" role="alert">
                            {(touched.city || isStatus === STATUS.SUBMITTED) && errors.city}
                        </p>

                    </div>

                    <div className="input-div">

                        <label className="label" htmlFor="country">Country</label>
                        <input
                            className="input"
                            type="text"
                            name="country"
                            placeholder="country"
                            onChange={handleChg}
                            onBlur={handleBlur}
                            value={formData.country}
                        />

                        <p className="error" role="alert">
                            {(touched.country || isStatus === STATUS.SUBMITTED) && errors.country}
                        </p>

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
                                onChange={handleChg}
                                onBlur={handleBlur}
                                value={formData.paymentMethod}
                            />
                            <label className="label" htmlFor="e-pin">e-Money Pin</label>



                        </div>

                        <div className="radio-div">

                            <input
                                className="radio-input"
                                type="radio"
                                name="e-pin"
                                placeholder="e-Money Pin"
                                onChange={handleChg}
                                onBlur={handleBlur}
                                value={formData.paymentMethod}
                            />
                            <label className="label" htmlFor="e-pin">Cash on Delivery</label>

                        </div>

                        <p className="error" role="alert">
                            {(touched.paymentMethod || isStatus === STATUS.SUBMITTED) && errors.paymentMethod}
                        </p>
                    </fieldset>


                    <div className="input-div">

                        <label className="label" htmlFor="e-number">e-Money Number</label>
                        <input
                            className="input"
                            type="text"
                            name="e-number"
                            placeholder="e-Money Number"
                            onChange={handleChg}
                            onBlur={handleBlur}
                            value={formData.eMoneyNumber}
                        />
                        <p className="error" role="alert">
                            {(touched.eMoneyNumber || isStatus === STATUS.SUBMITTED) && errors.eMoneyNumber}
                        </p>


                    </div>

                    <div className="input-div">

                        <label className="label" htmlFor="e-pin">e-Money Pin</label>
                        <input
                            className="input"
                            type="text"
                            name="e-pin"
                            placeholder="e-Money Pin"
                            onChange={handleChg}
                            onBlur={handleBlur}
                            value={formData.eMoneyPin}
                        />

                        <p className="error" role="alert">
                            {(touched.eMoneyPin || isStatus === STATUS.SUBMITTED) && errors.eMoneyPin}
                        </p>

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


                <button type='submit' disabled={!isValid} className="cart-button">CONTINUE & PAY</button>
            </div>
        </div>

        // </div >

        // </div>

    );
}
