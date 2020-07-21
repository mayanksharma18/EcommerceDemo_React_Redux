import React from 'react';
import { Link } from 'react-router-dom'
import './CheckOutButton.scss'

const CheckOut = props => {
  const  handleOnClick = () => {
       if(localStorage.getItem('userData')){
           return '/checkout';
       }
       else{
           return '/register';
       }
    }
    return (
        <Link to ={handleOnClick}>
            <button className="checkOutButton">CheckOut</button>
        </Link>
    );
};

export default CheckOut;