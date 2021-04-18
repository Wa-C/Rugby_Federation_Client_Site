import React from 'react';
import './Testimonial.css'

const Testimonial = ({testimonial}) => {
    // const {designation,name,description ,imageURL} = props.testimonial;
    return (
        <div className="card shadow-sm">
            {/* <div className="card-body">
                <p className="card-text text-center">{testimonial.designation}</p>
            </div> */}
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3 review-imgx" style={{marginLeft: '540px'}} src={testimonial.imageURL} alt="" width="60"/>
                <div>
                    <h3 className="text-primary text-center">{testimonial.name}</h3>
                    <p className="card-text text-center">{testimonial.designation}</p>
                    <p className="m-0">{testimonial.description}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;