import React from 'react';
import { Link } from 'react-router-dom';
import BookServiceForm from '../BookServiceForm/BookServiceForm';
import './ServiceDetail.css'
const ServiceDetail = ({service}) => {

    // const [modalIsOpen,setIsOpen] = React.useState(false);
    // function openModal() {
    //   setIsOpen(true);
    // }
  
    // function closeModal(){
    //   setIsOpen(false);
    // }
  

    return (
        <div className="col-md-4 text-center ">
            <img className="hover-animation" style={{height:'200px'}} src={service.imageURL} alt='' />
            <h3 className="mt-3 mb-3 hover-animation">{service.name}</h3>
            <p className="text-secondary disable hover-animation" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque totam, quibusdam quisquam tempora sint! Sapiente corrupti quod odio expedita.</p>
           <h4 className="mt-3 mb-3 hover-animation">${service.price}</h4>
           <Link to="showBookService" ><button className='btn btn-primary'>Book This Service</button></Link>

            {/* <BookServiceForm appointmentOn={service.name} ></BookServiceForm> */}
        </div>
    );
};

export default ServiceDetail;