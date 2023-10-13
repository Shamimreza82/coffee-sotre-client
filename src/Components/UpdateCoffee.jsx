import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2' 



const UpdateCoffee = () => {

    const coffee = useLoaderData()
    const {_id, name, quantity, supplier, category, details, photo, test} = coffee; 


    const handleupdateCoffee = e => {
        e.preventDefault(); 

        const form = e.target; 
        const name = form.name.value; 
        const quantity = form.quantity.value; 
        const supplier = form.supplier.value; 
        const category = form.category.value; 
        const details = form.details.value; 
        const photo = form.photo.value; 
        const test = form.test.value; 

        const updatedCoffee = {name, quantity, supplier, category, details, photo, test}
        console.log(updatedCoffee);

      fetch(`http://localhost:5000/coffee/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedCoffee)  
      })

      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.modifiedCount === 1){
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )
        } else if (data.modifiedCount === 0) {
            Swal.fire(
                'Oops...',
                'Something went wrong!',
                'error'
              ) 
        }
       
      })

    }



    return (
        <div className="bg-slate-300 h-screen ">
        <h1 className="text-center font-bold">Update Coffee {name}</h1>
  
        <form onSubmit={handleupdateCoffee}>
          <div className="flex gap-4 px-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Coffee Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="Available Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="flex gap-4 px-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="supplier"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Test</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="test"
                  defaultValue={test}
                  placeholder="Test"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="flex gap-4 px-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <input className="btn mt-4 w-full" type="submit" value="submit" />
        </form>
      </div>
    );
};

export default UpdateCoffee;