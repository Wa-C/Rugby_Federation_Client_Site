import React from 'react';
import BookingsByUser from '../BookingsByUser/BookingsByUser';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: 'F4FDFB',
    height:"100%"
}

const Dashboard = () => {
    return (
        
            <section>
                <div style={containerStyle} className="container-fluid row">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-5">
                        <h2>My Bookings </h2>
                        <BookingsByUser />
                    </div>
                    
                </div>
            </section>
        
    );
};

export default Dashboard;