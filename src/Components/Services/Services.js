import React, { useEffect, useState } from 'react';
import BookServiceForm from '../BookServiceForm/BookServiceForm';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


// const serviceData = [
//     {
//         name : 'First Aid In Rugby',
//         img: "https://i.ibb.co/rfC3krY/medicine-box-3d-illustration-first-260nw-1521789773.jpg" 
//     },
//     {
//         name : 'Player Welfare In Rugby',
//         img: "https://i.ibb.co/G3Bgbvk/player-welfare-rugby.jpg"
//     },
//     {
//         name : 'Anti Doping In Rugby',
//         img: "https://i.ibb.co/xLKX0cD/Keep-Rugby-Clean-logo-1024x651.jpg"
//     },
// ]




const Services = () => {
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServiceData(data))
            // console.log(setServiceData);
    },[])
    
    return (
        <section className="services-container">
            <div className="text-center">
                <br></br>
            <h1 className="mt-5 mb-3" style={{ color: '#1CC7C1'}} >Our Services</h1>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
            }
            
            </div>
            
            </div>


        </section>
    );
};

export default Services;