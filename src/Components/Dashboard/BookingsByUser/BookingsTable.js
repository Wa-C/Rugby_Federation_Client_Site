import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './table.css'

const BookingsTable = ({Bookings}) => {
    console.log(Bookings);
    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                {/* <Sidebar /> */}
            </div>
            <div className="col-md-10 p-4 pr-5" style={{marginLeft:"200px"}}>
            {/* <h1>{Bookings.name}</h1>
            <h2>{Bookings.email}</h2>
            <h3>{Bookings.}</h3> */}
             <div>
            <table class="pricing-table table-striped container">
 
  <tbody>
    <tr class="text-center">
      
      <td scope="row">{Bookings.name}</td>
      <td scope="row">{Bookings.email}</td>
      <td scope="row">{Bookings.phone}</td>
      <td scope="row">{Bookings.service}</td>
      <td scope="row">${Bookings.price}</td>

      
    </tr>
   
  </tbody>
</table>
        </div>
        </div>
            </div>
            
    );
};

export default BookingsTable;