import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center ">
            <img style={{height:'200px'}} src={service.img} alt='' />
            <h3 className="mt-3 mb-3">{service.name}</h3>
            <p className="text-secondary disable" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque totam, quibusdam quisquam tempora sint! Sapiente corrupti quod odio expedita.</p>

        </div>
    );
};

export default ServiceDetail;