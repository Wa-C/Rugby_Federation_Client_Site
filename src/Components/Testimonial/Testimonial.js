import React from 'react';
import './Testimonial.css'

const Testimonial = (props) => {
    const {quote,name,from ,img} = props.testimonial;
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3 review-imgx" style={{marginLeft: '540px'}} src={img} alt="" width="60"/>
                <div>
                    <h3 className="text-primary text-center">{name}</h3>
                    <p className="m-0">{from}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;