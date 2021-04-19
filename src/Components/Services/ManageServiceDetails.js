import React from 'react';

const ManageServiceDetails = ({service}) => {

    function deleteService(id){
        // console.log(event.target);
        fetch(`http://localhost:5000/delete/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
        }
        })
        .then (res => res.json())
        .then(res => {
          console.log('deleted',res);
        })
      }
    return (
        <div>
        <table class="table table-striped container">

<tbody>
<tr class="text-center">
  
  <td scope="row">{service.name}</td>
  <td scope="row">${service.price}</td>
  
  <td>
      <button onClick={()=> deleteService(service._id)} class="btn btn-danger">Delete</button>
  </td>
</tr>

</tbody>
</table>
    </div>
    );
};

export default ManageServiceDetails;