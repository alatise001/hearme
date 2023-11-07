export default function Components() {
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
                        <div className="cart-details">

                            <img className="cart-img" src="/assets/cart/image-xx59-headphones.jpg" alt="" />

                            <div className="cart-info">
                                <h3 className="cart-product-name">XX99MK II</h3>
                                <h4 className="cart-product-price">$2,999</h4>
                            </div>

                            <div className='confirm-qty' >
                                x1
                            </div>

                        </div>

                        <p className="others">and 2 other item(s)</p>
                    </div>

                    <div className="confirm-total-div">
                        <h4 className="confirm-title" style={{ color: "white" }}>GRAND TOTAL</h4>
                        <h3 className="confirm-amount" style={{ color: "white" }}>$ 5,446</h3>
                    </div>
                </div>

                <button className="cart-button">
                    BACK TO HOME
                </button>
            </div>

        </div>
    )
}
