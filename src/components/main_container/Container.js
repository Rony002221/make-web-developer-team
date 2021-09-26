import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Programmer from '../single_programmer/Programmer';
import './Container.css'

const Container = () => {

    const [members, setMembers] = useState([]);

    //satae for cart
    const [cart, setCart] = useState([]);

    //event handler
    const handleAddMember = (member) =>{

        const newCart = [...cart,member];
        setCart(newCart);
    }


    useEffect(()=>{
        fetch("/data.json")
        .then(res => res.json())
        .then(data => setMembers(data))
    },[]);


    return (
        <div className = "main_container">
            <div className="team">
                <hr />
                <h2 className = "text-primary text-center">Software Engineer's List</h2>

                <hr />
                
                <div className="row p-3">
                   {
                    members.map(member => <Programmer member = {member} handleAddMember = {handleAddMember}></Programmer>)

                   } 
                 
                </div>
                
            </div>

            <Cart cart = {cart}></Cart>
        </div>
    );
};

export default Container;