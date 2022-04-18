import React from 'react';
import Header from '../Shared/Header/Header';
import myImage from '../../images/myimg.jpg';
import '../About/About.css'
const About = () => {
    return (
        <div>
            <Header></Header>
            <div className='container-fluid text'>
                <img className='my-image' src={myImage} alt=""></img>
                <h3 className='name'>Md. Yusuf Haque</h3>
                <p className='goal'>My goal is that I want to bring my mothers real smile in her face by become a successfull man. I will be a VFX 3D artist, A Web developer, and a good son of my mother.</p>
            </div>

        </div>
    );
};

export default About;