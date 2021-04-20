import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)'
//     }
// };
// Modal.setAppElement('#root')

const BookServiceForm = ({appointmentOn,servicePrice}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(appointmentOn);

    
    const onSubmit = data => {
        data.price = servicePrice;
        data.service = appointmentOn;
        data.created = new Date();
        fetch('https://cryptic-hamlet-54915.herokuapp.com/addBookings',{ 
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                
               
            }
            
        })
        alert('Booking Done. Please Proceed to Payment');
        
    };
    return (
        <div className="row">
        <div className='container col-md-6'>
            <div>

                    <h2 className="text-brand text-center">{appointmentOn}</h2>
                    <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    
                    
                    <div className="form-group">
                            <input {...register("name", { required: true })} name="name" placeholder="Your Name" className="form-control" />
                            {/* errors will return when field validation fails  */}
                            {errors.name && <span>This field is required</span>}

                        </div>
                        <div className="form-group">
                            <input {...register("phone", { required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                            {errors.phone && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input {...register("email", { required: true })} name="email" placeholder="Email" className="form-control" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group row">
                            <div className="col-4">

                                <select className="form-control" name="gender" {...register("gender", { required: true })} >
                                    <option disabled={true} value="Not set">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Not set">Other</option>
                                </select>
                                {errors.gender && <span className="text-danger">This field is required</span>}

                            </div>
                            <div className="col-4">
                                <input  {...register("age", { required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                                {errors.age && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-4">
                                <input  {...register("weight", { required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                                {errors.weight && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>
                
            </div>
        </div>
        <div className="col-md-6">
            <h1>Payment</h1>
            <h3>Payment = ${servicePrice} </h3>
            <ProcessPayment />
        </div>
        </div>
    );
};

export default BookServiceForm;
