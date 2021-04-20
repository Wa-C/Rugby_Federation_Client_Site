import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";


const AddReviews = () => {

    const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = data => {
    const productData = {
      name: data.name,
      designation: data.designation,
      description: data.description,
      imageURL: imageURL
    };
    const url = `https://cryptic-hamlet-54915.herokuapp.com/addReviews`
    console.log(productData);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'

      },
      body: JSON.stringify(productData)
    })
      .then(res => console.log('server side res', res));
      alert('Review Added')
  };
  const handleImageUpload = event => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', 'ea2c24f67e7c365454467aab7d5547f5')
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} class="needs-validation">
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationCustom01"><b> Name</b></label>
            <input name="name" defaultValue=" Name" {...register("name", { required: true })} type="text" class="form-control" id="validationCustom01" placeholder="Enter Name" />

          </div>
          <div class="col-md-4 mb-3">
            <label for="validationCustom02"><b>Designation</b></label>
            <input name="designation" defaultValue="designation" {...register("designation", { required: true })} type="text" class="form-control" id="validationCustom02" placeholder="Designation" />

          </div>
          <div class="col-md-4 mb-3">
            <label for="validationCustom02"><b>Description</b></label>
            <input name="description" defaultValue="Description" {...register("description", { required: true })} type="text" class="form-control" id="validationCustom02" placeholder="Description" />

          </div>

        </div>
        <div class="col-md-4 mb-3">
          <label for="validationCustom02"><b>Add Photo</b></label>
          <input onChange={handleImageUpload} type="file" class="form-control d-flex justify-content-center" id="validationCustom02" placeholder="Enter Weight" />

        </div>
        {/* <div class="form-group">
    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
  </div> */}

        <button class="btn btn-primary" type="submit">Submit form</button>
      </form>
        </div>
    );
};

export default AddReviews;