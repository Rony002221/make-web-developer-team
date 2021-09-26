import React from 'react';
import './Programmer.css'

const Programmer = (props) => {

    console.log(props)

    const {name, type, salary, picture, level, age} = props.member || {};
    return (
        <div className="col-md-4">
            <div className="card single_programmer" >
                <img src={picture} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h4 class="card-title text-danger">{type}</h4>
                  <h6 class="card-title">Name : {name}</h6> 
                  <h6 class="card-title">Level : {level}</h6> 
                  <h6 class="card-title">Age : {age}</h6> 
                  <h6 class="card-title">Salary: ${salary}</h6> <hr />
                  <span><i class="far fa-thumbs-up"></i></span> <button type="button" onClick = {()=>props.handleAddMember(props.member)} class="btn btn-primary btn-sm"><i class="far fa-check-circle"></i> Hire Now</button>
                </div>
              </div>
        </div>
    );
};

export default Programmer;