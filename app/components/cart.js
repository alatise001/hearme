function Cart() {
    return (
        <div className="cart-container">
            < div className="cart" >

                <div className="cart-title" >
                    <h2>CART <span>(0)</span></h2>
                    <button className="back-btn">Remove all</button>
                </div>

                <div className="cart-items">
                    <div className="cart-details">


                        <img className="cart-img" src="/assets/cart/image-xx59-headphones.jpg" alt="" />

                        <div className="cart-info">
                            <h3 className="cart-product-name">XX99MK II</h3>
                            <h4 className="cart-product-price">$2,999</h4>
                        </div>

                        <div className=' add-to-cart-divs cart-span' >
                            <span className="opacity">−</span>
                            <span>1</span>
                            <span className="opacity">+</span>
                        </div>

                    </div>

                    <div className="cart-details">

                        <div>
                            <img className="cart-img" src="/assets/cart/image-xx59-headphones.jpg" alt="" />
                        </div>

                        <div className="cart-info">
                            <h3 className="cart-product-name">XX99MK II</h3>
                            <h4 className="cart-product-price">$2,999</h4>
                        </div>

                        <div className=' add-to-cart-divs cart-span' >
                            <span className="opacity">−</span>
                            <span>1</span>
                            <span className="opacity">+</span>
                        </div>

                    </div>

                    <div className="cart-details">

                        <div>
                            <img className="cart-img" src="/assets/cart/image-xx59-headphones.jpg" alt="" />
                        </div>

                        <div className="cart-info">
                            <h3 className="cart-product-name">XX99MK II</h3>
                            <h4 className="cart-product-price">$2,999</h4>
                        </div>

                        <div className=' add-to-cart-divs cart-span' >
                            <span className="opacity">−</span>
                            <span>1</span>
                            <span className="opacity">+</span>
                        </div>

                    </div>




                </div>

                <div className="cart-total">
                    <h4 className="total-title">TOTAL</h4>
                    <h3 className="total-amount">$ 5,396</h3>
                </div>

                <button className="cart-button">CHECKOUT</button>

            </div >
        </div>
    )
}

export default Cart