import React from 'react';
import '../Service/Service.css'

const Service = ({ service }) => {
    const { img, name, price, des } = service;
    return (
        <div className='col-sm-12 col-md-6 col-lg-3 service-card mt-5'>
            <div>
                <h2 className='service-name'>{name}</h2>
                <img className="img-fluid" src={img} alt=""></img>
                <p className='service-price'>{price} tk</p>
                <p className='service-des'>{des}</p>
                <button type="button" className="btn checkout-button">Checkout</button>
            </div>
        </div>
    );
};

export default Service;