import React, { useEffect, useState } from 'react';
import Programmer from '../single_programmer/Programmer';
import './Container.css'

const Container = () => {

    const [member, setMember] = useState([]);

    useEffect(()=>{
        fetch("/data.json")
        .then(res => res.json())
        .then(data => setMember(data))
    },[]);


    return (
        <div className = "main_container">
            <div className="team">
                <h1 className = "text-primary">Programmer's List</h1>

                <Programmer></Programmer>
                <Programmer></Programmer>
                <Programmer></Programmer>
            </div>
            <div className="cart">
                <h2>Total Cost</h2>
            </div>
        </div>
    );
};

export default Container;