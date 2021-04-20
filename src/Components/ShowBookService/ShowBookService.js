
import React, { useEffect, useState } from 'react';
import BookService from '../BookService/BookService';

const ShowBookService = () => {
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-hamlet-54915.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServiceData(data))
            // console.log(setServiceData);
    },[])
    return (
        <div>
            {
                serviceData.map(service => <BookService service={service}></BookService>)
            }
        </div>
    );
};

export default ShowBookService;