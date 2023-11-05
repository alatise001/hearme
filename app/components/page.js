import Link from "next/link";


export default function Components() {
    return (
        <div className="cart">

            <div className="cart-title" >
                <h2>CART <span>(0)</span></h2>
                <button>Remove all</button>
            </div>

            <div className="cart-items">
                <div className="cart-details">

                    <div>
                        <img src="" alt="" />
                    </div>

                    <div>
                        <h3>XX99MK II</h3>
                        <h4>$2,999</h4>
                    </div>

                    <button>1</button>
                </div>

                <div className="cart-details">
                    <img src="" alt="" />
                    <div>
                        <h3>XX99MK II</h3>
                        <h4>$2,999</h4>
                    </div>
                    <button>1</button>
                </div>

                <div className="cart-details">
                    <img src="" alt="" />
                    <div>
                        <h3>XX99MK II</h3>
                        <h4>$2,999</h4>
                    </div>
                    <button>1</button>
                </div>
            </div>

            <div className="cart-total">
                <h4>TOTAL</h4>
                <h3>$ 5,396</h3>
            </div>

            <button className="cart-button">CHECKOUT</button>

        </div>
    )
}
