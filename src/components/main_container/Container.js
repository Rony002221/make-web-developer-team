import React, { useEffect, useState } from 'react';
import Programmer from '../single_programmer/Programmer';
import './Container.css'

const Container = () => {

    const [members, setMembers] = useState([]);

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
                    members.map(member => <Programmer member = {member}></Programmer>)

                   } 
                 
                </div>
                
            </div>
            <div className="cart">
                <h3 className = "mt-5 pt-5"><i><u> Total Cost </u> </i></h3>
                
            </div>
        </div>
    );
};

export default Container;