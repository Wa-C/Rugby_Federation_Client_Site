import React, { useEffect, useState } from 'react';
import ManageServiceDetails from './ManageServiceDetails';

const ManageService = () => {
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServiceData(data))
            // console.log(setServiceData);
    },[])

    return (
         <div>
          <div>
            <table class="table table-striped container">
  <thead>
    <tr>
      
      <th  scope="col">service Name</th>
      <th scope="col">service Price</th>
      <th scope="col">service weight</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
</table>
        </div>
            <div>
            {
               serviceData.map(service => <ManageServiceDetails service={service} />)
            }
        </div>
        </div>
    );
};

export default ManageService;