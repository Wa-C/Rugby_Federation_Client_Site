import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
  
  const onSubmit = data => {
    const productData = {
      name: data.name,
      email: data.email       
    };
    const url = `https://cryptic-hamlet-54915.herokuapp.com/addAdmin`
    console.log(productData);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'

      },
      body: JSON.stringify(productData)
    })
      .then(res => console.log('server side res', res));
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
            <label for="validationCustom02"><b>Email</b></label>
            <input name="email" defaultValue="Email" {...register("email", { required: true })} type="text" class="form-control" id="validationCustom02" placeholder="email" />
          </div>       
        </div>
        <button class="btn btn-primary" type="submit">Submit form</button>
      </form>
        </div>
    );
};

export default AddAdmin;