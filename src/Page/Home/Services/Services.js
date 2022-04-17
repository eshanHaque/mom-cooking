import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import '../Services/Services.css'
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='container'>
            <h2></h2>
            <div>
                <div className="row gap-2 justify-content-around">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;