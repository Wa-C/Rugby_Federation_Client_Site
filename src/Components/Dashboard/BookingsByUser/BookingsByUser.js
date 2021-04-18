import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import BookingsTable from './BookingsTable';
import './table.css'

const BookingsByUser = () => {

    const [Bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookingsByUser')
            .then(res => res.json())
            .then(data => setBookings(data))
            // console.log(Bookings);
    }, [])

    return (
        <div className="container-fluid row">

            <div className="col-md-2">
                {/* <Sidebar /> */}
            </div>
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute' }}>
                <h4 className='text-brand' style={{ marginLeft: "200px" }}>All Bookings</h4>

                {/* <BookingsTable Bookings={Bookings} /> */}
                <div>
                    <table class="table table-striped container" style={{ marginLeft: "200px" }}>
                        <thead >
                            <tr >

                                <th scope="col"> Name</th>
                                <th scope="col"> Email</th>
                                <th scope="col">Phone</th>
                                
                            </tr>
                        </thead>
                    </table>
                </div>
                {
                    Bookings.map(Booking => <BookingsTable Bookings={Booking} />)
                }
            </div>

        </div>
    );
};

export default BookingsByUser;