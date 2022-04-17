import React from 'react';
import '../Service/Service.css'

const Service = ({service}) => {
    const {img, name, price, des} = service;
    return (
        <div className='service-card'>
            <h2>{name}</h2>
            <img src={img} alt=""></img>
            <p>{price}</p>
            <p>{des}</p>
            <button>Checkout</button>
        </div>
    );
};

export default Service;