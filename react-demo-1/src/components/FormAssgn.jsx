"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

function FormAssgn() {
  const { register,handleSubmit,setError,formState:{errors}} = useForm(); //we can insert err msgs indirectly usng setError
  console.log(errors) //errors is read only object
  const [rows, setRows]=useState([]); // store submitted data
  const submitForm = (obj) => {
    //the date is invalid
    setError("dob",{
        type:"manual",
        message:"the date is not after 2020"
    })
    //{errors.dob?.type=="manual" && <p>{error.dob.message}</p>,  manual not done by form automatically}

  console.log("Submitted Object:", obj);
  setRows(prev => [...prev, obj]);
};

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Registration Form</h1>
      <form onSubmit={handleSubmit(submitForm)} className="space-y-2">
        <div>
            <input type="text" {...register("firstname",{required:true,minLength:4,maxLength:6})} placeholder="First Name" className="border-2 p-2 w-full"/>
            {errors.firstname && (<p className="text-red-400">First name is required</p>)}
            {errors.firstname?.type=='minLength' && <p className="text-red-400">Min length should be 4</p>}
            {errors.firstname?.type=='maxLength' && <p className="text-red-400">max length should be 6</p>}
        </div>
        <div>
          <input type="text" {...register("lastname",{required:true,minLength:4,maxLength:6})} placeholder="Last Name" className="border-2 p-2 w-full"/>
          {errors.lastname && (<p className="text-red-400">Last name is required</p>)}
          {errors.lastname?.type=='minLength' && <p className="text-red-400">Min length should be 4</p>}
          {errors.lastname?.type=='maxLength' && <p className="text-red-400">max length should be 6</p>}
        </div>
        <div>
          <input type="email" {...register("email",{required:true})} placeholder="Email" className="border-2 p-2 w-full"/>
          {errors.email && (<p className="text-red-400">Email is required</p>)}
        </div>
        <div>
            <input type="date" {...register("dob",{required:"Date is required",validate:(value) =>new Date(value).getFullYear() >= 2020 || "Year must be 2020 or later"})}className="border-2 p-2 w-full"/>
            {errors.dob && (<p className="text-red-400">{errors.dob.message}</p>)}
            {errors.dob && (<p className="text-red-400">Date of birth is required</p>)}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
      </form>

      {/* table of submitted data */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Submitted Data</h2>
        {/*automatic col width, merges borders */}
        <table className="table-auto border-collapse border border-gray-400 w-full">
        {/* header section of table */}
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">First Name</th>
              <th className="border border-gray-400 px-4 py-2">Last Name</th>
              <th className="border border-gray-400 px-4 py-2">Email</th>
              <th className="border border-gray-400 px-4 py-2">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {/* looping through currObj-row and index-i, key to identify each row uniquely */}
            {rows.map((row, i) => (
              <tr key={i}>
                <td className="border border-gray-400 px-4 py-2">{row.firstname}</td>
                <td className="border border-gray-400 px-4 py-2">{row.lastname}</td>
                <td className="border border-gray-400 px-4 py-2">{row.email}</td>
                <td className="border border-gray-400 px-4 py-2">{row.dob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FormAssgn;