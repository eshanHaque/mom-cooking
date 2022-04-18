import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import '../Register/Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();


    const navigateLogin = () => {
        navigate('/login');
    }
    if(user){
        navigate('/home');
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div>
            <Header></Header>
            <div className='reg-form'>
                <h2>Register Here</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" name="name" id="" placeholder='Your Name'/>
                    <br />
                    <input type="email" name="email" id="" placeholder='Email Address' required/>
                    <br />
                    <input type="password" name="password" id="" placeholder='Password' required/>
                    <input type="submit" value="Register" />
                </form>
                <p className='text-center mt-5'>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>log In now</Link> </p>
            </div>
        </div>
    );
};

export default Register;