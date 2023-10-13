import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2' 

const Coffee = ({coffee, setCoffees, coffees }) => {

    const {_id, name, quantity, supplier, category, details, photo, test} = coffee; 


   const  handleDeleted = _id => {
       console.log(_id); 
       Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        //   Swal.fire(
        //     'Deleted!',
        //     'Your file has been deleted.',
        //     'success'
        //   )
        console.log("deleted Conform");
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'DELETE',
    
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.deletedCount > 0) {
                 Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaing = coffees.filter(cof => cof._id !== _id)
              setCoffees(remaing)
            }
          })

        }
      })
  
   }

  return (
    <div className="card card-side bg-base-100 shadow-xl w-[50%] m-auto">
      <figure>
        <img className="w-[200px]"
          src={photo}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
          <Link to={`/updateCoffee/${_id}`} className="btn btn-primary">Edit</Link>
          <button onClick={()=> handleDeleted(_id)} className="btn btn-primary">X</button>
         
        </div>
      </div>
    </div>
  );
};

export default Coffee;
