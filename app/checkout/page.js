'use client'

import React from 'react';
import CheckoutSuccess from '../components/endSale';
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
        paymentmethod: "",
        emoneynumber: "",
        emoneypin: "",
    });

    const [isStatus, setStatus] = React.useState(STATUS.IDLE);
    const [touched, setTouched] = React.useState({});
    const [finish, setFinished] = React.useState(false);
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
        // console.log(e.target);
        const { name } = e.target;
        setTouched((prevState) => {
            return {
                ...prevState,
                [name]: true,
            };
        });

        // console.log(touched);
    }

    // console.log(formData);

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus(STATUS.SUBMITTING);

        if (isValid) {
            console.log("submit");
            setStatus(STATUS.COMPLETED);
            setFinished(prev => !prev)
            console.log(formData);
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
        if (!formData.paymentmethod) result.paymentmethod = "Payment Method is required";

        if (!formData.emoneynumber && formData.emoneypin && (formData.paymentmethod === "cashondelivery")) {
            return
        } else {
            if (!formData.emoneynumber && formData.paymentmethod != "cashondelivery") result.emoneynumber = "e-Money Number is required";
            if (!formData.emoneypin && formData.paymentmethod != "cashondelivery") result.emoneypin = "e-Money Pin is required";
        }
        // if (!formData.emoneynumber && formData.paymentmethod != "cashondelivery") result.emoneynumber = "e-Money Number is required";
        // if (!formData.emoneypin && formData.paymentmethod != "cashondelivery") result.emoneypin = "e-Money Pin is required";

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

    if (isStatus === "SUBMITTING") return (<div className="container">...LOADING</div>)


    return (
        // <div className="form">

        <>

            <div className="checkout-div">


                <form onSubmit={handleSubmit} className="form">
                    <h1 className="payment-title">CHECKOUT</h1>
                    {/* <div> */}

                    <h2 className="payment-sub-title">BILLING DETAILS</h2>

                    <div className="billing">
                        <div className='billing-div-1'>

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
                        </div>

                        <div className='billing-div-1'>
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
                    </div>

                    {/* </div> */}

                    <h2 className="payment-sub-title">SHIPPING INFO</h2>

                    <div className="shipping">
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

                        <div className='shipping-div'>

                            <div className='billing-div-1'>
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
                            </div>

                            <div className='billing-div-1'>

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
                        </div>
                    </div>

                    <h2 className="payment-sub-title">PAYMENT DETAILS</h2>

                    <div className="payment">
                        <fieldset className='payment-field'>
                            <div className="label billing-div-1">Payment Method</div>

                            <div className='billing-div-1'>


                                <div className="radio-div">

                                    <input
                                        id='e-pin'
                                        className="radio-input"
                                        type="radio"
                                        name="paymentmethod"
                                        onChange={handleChg}
                                        onBlur={handleBlur}
                                        checked={formData.paymentmethod === "e-moneypin"}
                                        value={"e-moneypin"}
                                    />
                                    <label className="label" htmlFor="e-pin">e-Money Pin</label>



                                </div>

                                <div className="radio-div">

                                    <input
                                        id='cash'
                                        className="radio-input"
                                        type="radio"
                                        name="paymentmethod"
                                        onChange={handleChg}
                                        onBlur={handleBlur}
                                        checked={formData.paymentmethod === "cashondelivery"}
                                        value={"cashondelivery"}
                                    />
                                    <label className="label" htmlFor="cash">Cash on Delivery</label>

                                </div>
                            </div>

                            <p className="error" role="alert">
                                {(touched.paymentmethod || isStatus === STATUS.SUBMITTED) && errors.paymentmethod}
                            </p>
                        </fieldset>

                        <div className='payment-field'>

                            <div className="input-div billing-div-1">

                                <label className="label" htmlFor="e-number">e-Money Number</label>
                                <input
                                    disabled={((formData.paymentmethod === "cashondelivery") || (formData.paymentmethod === '')) ? true : false}
                                    className="input"
                                    type="number"
                                    name="emoneynumber"
                                    placeholder="e-Money Number"
                                    onChange={handleChg}
                                    onBlur={handleBlur}
                                    value={formData.emoneynumber}
                                />
                                <p className="error" role="alert">
                                    {(touched.emoneynumber || isStatus === STATUS.SUBMITTED) && errors.emoneynumber}
                                </p>


                            </div>

                            <div className="input-div billing-div-1">

                                <label className="label" htmlFor="e-money">e-Money Pin</label>
                                <input
                                    disabled={((formData.paymentmethod === "cashondelivery") || (formData.paymentmethod === '')) ? true : false}
                                    className="input"
                                    type="number"
                                    name="emoneypin"
                                    placeholder="e-Money Pin"
                                    onChange={handleChg}
                                    onBlur={handleBlur}
                                    value={formData.emoneypin}
                                />

                                <p className="error" role="alert">
                                    {(touched.emoneypin || isStatus === STATUS.SUBMITTED) && errors.emoneypin}
                                </p>

                            </div>
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
                                <div key={map.id} className="cart-details-checkout">
                                    <div className='cart-details-checkout-div'>
                                        <img className="cart-img" src={`/assets/cart/image-${map.slug}.jpg`} alt="" />

                                        <div className="cart-info">
                                            <h3 className="cart-product-name">{map.name}</h3>
                                            <h4 className="cart-product-price">${map.price}</h4>
                                        </div>
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


                    <button type='submit' disabled={!isValid} onClick={handleSubmit} className="cart-button">CONTINUE & PAY</button>
                </div>
            </div>


            {finish &&

                <CheckoutSuccess />
            }
        </>


        // </div >

        // </div>

    );
}
