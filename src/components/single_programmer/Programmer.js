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
                  <h4 class="card-title text-danger">{type}</h4> <hr />
                  <h6 class="card-title">Name : {name}</h6> <hr />
                  <h6 class="card-title">Level : {level}</h6> <hr />
                  <h6 class="card-title">Age : {age}</h6> <hr />
                  <h6 class="card-title">Salary: ${salary}</h6> <hr />
                  <button type="button" class="btn btn-primary btn-sm">Hire Now</button>
                </div>
              </div>
        </div>
    );
};

export default Programmer;