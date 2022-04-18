import React from 'react';
import '../Checkout/Checkout.css'

const Checkout = () => {
    return (
        <div>
            <div className='checkout'>
            <input type="text" name="name" id="" placeholder='Name' />
            <input type="email" name="" id="" placeholder='email'/>
            <input type="password" name="" id="" placeholder='password'/>
            </div>
        </div>
    );
};

export default Checkout;