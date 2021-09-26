import React from 'react';
import './Cart.css'

const Cart = (props) => {

    // Destructuring cart data
    const {cart} = props || {}

    //calculation total cost for the cart
    const totalCost = (preValue, currentValue) => preValue + currentValue.salary;
    
    const total = cart.reduce(totalCost, 0);


    return (
        <div>
            <div className="cart">
                <h3 className = "mt-5 pt-5"><i> <span> <i class="fas fa-cart-plus"></i></span><u> Total Cost </u> </i></h3> <br />
                <h6>Number of Selected : <span class = "text-primary"> {cart.length}</span></h6> <hr />
                <h6>Already Spend : <span class = "text-primary">$ {total}</span></h6> <hr /><hr /><br /><br />

                <ul class="list-group">
                    <h5> <span className = "selected_icon"> <i class="fas fa-user-check"></i></span> Selected Programmer's :</h5><hr />
                    {cart.map(person=><li class="list-group-item list-group-item-success text-dark">{person.name} ({person.type}) </li>)}
                </ul>
                
            </div>

        </div>
    );
};

export default Cart;