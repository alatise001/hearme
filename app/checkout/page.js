'use client'

import React from 'react';
import CheckoutSuccess from '../components/endSale';
import { CartContext } from '../contexts/cartContext';
import { motion } from 'framer-motion'
import Image from 'next/image'



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

    function total(params) {
        const tottal = data?.map(map => (
            map.quantity * map.price
        ))

        const cartTotal = tottal?.reduce(function (acc, val) { return acc + val; }, 0)


        return cartTotal
    }

    function handleChg(e) {
        const { name, value, checked, type } = e.target;
        setFormData((prevState) => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    }

    function handleBlur(e) {
        const { name } = e.target;
        setTouched((prevState) => {
            return {
                ...prevState,
                [name]: true,
            };
        });

    }


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

        if (!formData.email) {
            result.email = "Email is required";
        } else if (!ValidateEmail(formData.email)) {
            result.email = "Email is not correct";
        }

        return result;
    }

    if (loginError) throw loginError

    if (data?.length === 0) {
        return (
            <div className='homepage-speaker-header-2' style={{ textAlign: "center", height: "100vh" }}>
                <Image
                    src="/assets/cart.svg"
                    alt='/cart'
                    width={100}
                    height={100}
                />

                <p>Your cart is Empty</p>
            </div>
        )

    }

    if (isStatus === "SUBMITTING") return (<div className="container">...LOADING</div>)


    return (

        <>

            <div className="checkout-div">


                <form onSubmit={handleSubmit} className="form">
                    <motion.h1 className="payment-title"
                        initial={{
                            opacity: 0,
                            y: -100
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1
                            }
                        }}
                        viewport={{ once: true }}

                    >CHECKOUT</motion.h1>

                    <motion.h2 className="payment-sub-title"
                        initial={{
                            opacity: 0,
                            y: -100
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1
                            }
                        }}
                        viewport={{ once: true }}
                    >BILLING DETAILS</motion.h2>

                    <div className="billing">
                        <motion.div className='billing-div-1'
                            animate={{ opacity: 1 }}
                            transition={{
                                staggerChildren: 2,
                                delay: 1
                            }}
                        >

                            <motion.div className="input-div"
                                initial={{
                                    opacity: 0,
                                    y: -100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1
                                    }
                                }}
                                viewport={{ once: true }}
                            >

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

                            </motion.div>

                            <motion.div className="input-div"
                                initial={{
                                    opacity: 0,
                                    y: -100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1
                                    }
                                }}
                                viewport={{ once: true }}
                            >

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

                            </motion.div>
                        </motion.div>

                        <div className='billing-div-1'>
                            <motion.div className="input-div"
                                initial={{
                                    opacity: 0,
                                    y: -100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1
                                    }
                                }}
                                viewport={{ once: true }}
                            >

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
                            </motion.div>

                        </div>
                    </div>


                    <motion.h2 className="payment-sub-title"
                        initial={{
                            opacity: 0,
                            y: -100
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1
                            }
                        }}
                        viewport={{ once: true }}
                    >SHIPPING INFO</motion.h2>

                    <div className="shipping">
                        <motion.div className="input-div"
                            initial={{
                                opacity: 0,
                                y: -100
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1
                                }
                            }}
                            viewport={{ once: true }}
                        >

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

                        </motion.div>

                        <div className='shipping-div'>

                            <div className='billing-div-1'>
                                <motion.div className="input-div"
                                    initial={{
                                        opacity: 0,
                                        y: -100
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1
                                        }
                                    }}
                                    viewport={{ once: true }}
                                >

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

                                </motion.div>

                                <motion.div className="input-div"
                                    initial={{
                                        opacity: 0,
                                        y: -100
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1
                                        }
                                    }}
                                    viewport={{ once: true }}
                                >

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

                                </motion.div>
                            </div>

                            <div className='billing-div-1'>

                                <motion.div className="input-div"
                                    initial={{
                                        opacity: 0,
                                        y: -100
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1
                                        }
                                    }}
                                    viewport={{ once: true }}
                                >

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

                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: -100
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1
                            }
                        }}
                        viewport={{ once: true }}
                        className="payment-sub-title">PAYMENT DETAILS
                    </motion.h2>

                    <div className="payment">
                        <motion.fieldset className='payment-field'
                            initial={{
                                opacity: 0,
                                y: -100
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1
                                }
                            }}
                            viewport={{ once: true }}
                        >
                            <motion.div className="label billing-div-1"
                                initial={{
                                    opacity: 0,
                                    y: -100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1
                                    }
                                }}
                                viewport={{ once: true }}
                            >Payment Method</motion.div>

                            <div className='billing-div-1'>


                                <motion.div className="radio-div"
                                    initial={{
                                        opacity: 0,
                                        y: -100
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1
                                        }
                                    }}
                                    viewport={{ once: true }}
                                >

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



                                </motion.div>

                                <motion.div className="radio-div"
                                    initial={{
                                        opacity: 0,
                                        y: -100
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1
                                        }
                                    }}
                                    viewport={{ once: true }}
                                >

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

                                </motion.div>
                            </div>

                            <p className="error" role="alert">
                                {(touched.paymentmethod || isStatus === STATUS.SUBMITTED) && errors.paymentmethod}
                            </p>
                        </motion.fieldset>

                        <div className='payment-field'>

                            <motion.div className="input-div billing-div-1"
                                initial={{
                                    opacity: 0,
                                    y: -100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1
                                    }
                                }}
                                viewport={{ once: true }}
                            >

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


                            </motion.div>

                            <motion.div className="input-div billing-div-1"
                                initial={{
                                    opacity: 0,
                                    y: -100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1
                                    }
                                }}
                                viewport={{ once: true }}
                            >

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

                            </motion.div>
                        </div>

                        {
                            formData.paymentmethod === "cashondelivery" &&
                            <motion.div className='onDelivery'
                                initial={{
                                    opacity: 0,
                                    x: -100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 1
                                    }
                                }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    src="./assets/onDelivery.svg"
                                    alt='On Delivery'
                                    width={100}
                                    height={100}
                                />

                                <p>
                                    The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives
                                    at your residence. Just make sure your address is correct so that your order will not be cancelled.
                                </p>

                            </motion.div>
                        }
                    </div>
                </form>

                <div className="cart-summary">
                    <motion.div className="cart-title"
                        initial={{
                            opacity: 0,
                            y: -100
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        <h2>Summary </h2>
                    </motion.div>

                    <motion.div
                        transition={{
                            duration: 1,
                            delayChildren: 3,
                            staggerChildren: 4,
                        }}
                        className="cart-items">
                        {
                            data?.map((map) => (
                                <motion.div key={map.id} className="cart-details-checkout"
                                    initial={{
                                        opacity: 0,
                                        y: -100
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1
                                        }
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <div className='cart-details-checkout-div'>
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
                                    </div>

                                    <p className="summary-qty">x{map.quantity}</p>

                                </motion.div>
                            ))
                        }
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -100
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1
                            }
                        }}
                        viewport={{ once: true }}
                        className="total-amt-div">
                        <div className="total-amt-sub-div">
                            <motion.div className="cart-total"
                                initial={{
                                    opacity: 0,
                                    y: -100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1
                                    }
                                }}
                                viewport={{ once: true }}
                            >
                                <h4 className="total-title">TOTAL</h4>
                                <h3 className="total-amount">$ {total()}</h3>
                            </motion.div>

                            <motion.div className="cart-total"
                                initial={{
                                    opacity: 0,
                                    y: -100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1
                                    }
                                }}
                                viewport={{ once: true }}
                            >
                                <h4 className="total-title">SHIPPING</h4>
                                <h3 className="total-amount">$ 50</h3>
                            </motion.div>
                        </div>

                        <motion.div className="cart-total"
                            initial={{
                                opacity: 0,
                                y: -100
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1
                                }
                            }}
                            viewport={{ once: true }}
                        >
                            <h4 className="total-title">GRAND TOTAL</h4>
                            <h3 className="total-amount">$ {total() + 50}</h3>
                        </motion.div>
                    </motion.div>


                    <motion.button
                        initial={{
                            y: 0,
                        }}
                        animate={{
                            y: 7,
                        }}

                        transition={{
                            type: 'tween',
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'reverse',
                            duration: 1,
                        }}
                        whileTap={{ scale: 0.85 }}
                        type='submit' disabled={!isValid} onClick={handleSubmit} className="cart-button">CONTINUE & PAY
                    </motion.button>
                </div>
            </div>


            {finish &&

                <CheckoutSuccess />
            }
        </>

    );
}
