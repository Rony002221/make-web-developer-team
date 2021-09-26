import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div>
            <div className="cart">
                <h3 className = "mt-5 pt-5"><i> <span> <i class="fas fa-cart-plus"></i></span><u> Total Cost </u> </i></h3> <br />
                <h6>Number of Programmer : <span>0</span></h6> <hr />
                <h6>Already Spend : $ <span>0</span></h6> <hr />
                
            </div>

        </div>
    );
};

export default Cart;