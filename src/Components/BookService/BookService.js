import React from 'react';
import BookServiceForm from '../BookServiceForm/BookServiceForm';

const BookService = ({service}) => {
    return (
        <div>
            
           {<BookServiceForm appointmentOn={service.name} servicePrice={service.price} ></BookServiceForm>} 
        </div>
    );
};

export default BookService;