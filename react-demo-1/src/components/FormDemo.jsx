import { useForm } from "react-hook-form" //its a third party library

function FormDemo()
{

    const {register, handleSubmit,formState:{errors}}=useForm() //reg,handleSubmit are enough to deal with form submission
    console.log(errors)
    const submitForm = (obj) => {
    console.log(obj);
};

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit(submitForm)}>
            {/*<button type="submit"></button>*/}
            {/*form validation and submission can be done using react only, libraries are- ReactHookForm {npm i react-hook-form} and other one standard ones to use  */}
                <div className="mb-3">
                    <input type="text" {...register("username",{required:true,minLength:3})} placeholder="Username" className="border-2"/>
                    {errors.username?.type=='required' && <p className="text-red-400">Username is required</p>}
                    {errors.username?.type=='minLength' && <p className="text-red-400">Min length should be 3</p>}
                </div>
                <div className="mb-3">
                    <input type="email" {...register("email")} placeholder="Email" className="border-2"/>
                </div>
                <div>
                    <button type="submit" className="bg-blue-300 p-3 text-lime-50">Register</button>
                </div>
            </form>
        </div>
    )

}

export default FormDemo

//supply meaningful names to name-attr 


//required
//minlength & maxlength
//min & max
//pattern