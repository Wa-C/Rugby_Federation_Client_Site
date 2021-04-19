import React from 'react';
import BookServiceForm from '../BookServiceForm/BookServiceForm';

const ServiceDetail = ({service}) => {

    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
  

    return (
        <div className="col-md-4 text-center ">
            <img style={{height:'200px'}} src={service.imageURL} alt='' />
            <h3 className="mt-3 mb-3">{service.name}</h3>
            <p className="text-secondary disable" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque totam, quibusdam quisquam tempora sint! Sapiente corrupti quod odio expedita.</p>
           <h4 className="mt-3 mb-3">${service.price}</h4>
            <button onClick={openModal} className='btn btn-primary'>Book This Service</button>

            <BookServiceForm modalIsOpen={modalIsOpen} appointmentOn={service.name} closeModal={closeModal}></BookServiceForm>
        </div>
    );
};

export default ServiceDetail;