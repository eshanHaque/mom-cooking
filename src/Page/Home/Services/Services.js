import React, { useEffect, useState } from 'react';
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
        <div id="services" className='container'>
            <h2 className='service-title'>My Services</h2>
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