import { useState } from "react";

function StateDemo() {
    //state
    let [counter, setCounter]=useState(10);
    //array
    let [marks, setMarks]=useState([1, 2]);
    // object
    let [user, setUser]=useState({email:'abc@gmail.com'});
    //counter functions
    const incr=() => {
        // functional updates(crct way when upd multiple times)
        setCounter(prev => prev+1);
        setCounter(prev => prev+1);
        setCounter(prev => prev+1);
        // setCounter(counter + 1);
    };
    //object update
    const updateUser=() => {
        // spread opr keeps old val's and adds new field
        setUser(prevUser => ({...prevUser,city: "Hyd"}));
    };
    //array operations
    //insert at beg
    const addAtBeginning=() => {
        setMarks(prevMarks => [999, ...prevMarks]);
    };
    //insert at end
    const addAtEnd=() => {
        setMarks(prevMarks => [...prevMarks, 777]);
    };
    //insert in middle (at index 1)
    const addInMiddle=() => {
        let index = 1;
        setMarks(prevMarks => [...prevMarks.slice(0,index),555,...prevMarks.slice(index)]);
    };

    const deleteMarks=(index) => {
        let result=marks.filter((_,i) =>i !== index); // _ is used to fill the element 
        setMarks(result)
    };
    //delete from end
    const deleteFromEnd=() => {
        setMarks(prevMarks => prevMarks.slice(0, -1));
    };

    //delete property
    const deleteProperty=()=>{
        let {city, ...rest}=user  //...rest- all remaining after deletion will be stored here
        setUser(rest)
    }

    console.log(Object.values(user))
    console.log(Object.keys(user))
    console.log(Object.entries(user))

    return (
        <div className="p-10">
            {/* Counter Section */}
            <p className="text-4xl mt-10">Counter: {counter}</p>
            <button onClick={incr} className="bg-amber-400 px-5 py-2 mt-5 me-4">Increment</button>
            {/* Marks Section */}
            <h1 className="text-3xl mt-10">Marks</h1>
            {
                marks.map((m, index) =><p key={index} className="text-2xl">{m}</p>)
            }
            <div className="mt-5 space-x-3">
                <button onClick={addAtBeginning} className="bg-green-400 px-4 py-2">Add at Beginning</button>
                <button onClick={addAtEnd} className="bg-blue-400 px-4 py-2">Add at End</button>
                <button onClick={addInMiddle} className="bg-purple-400 px-4 py-2">Add in Middle</button>
                <button onClick={deleteFromEnd} className="bg-red-400 px-4 py-2">Delete from End</button>
                <button onClick={() => deleteMarks(0)} className="bg-red-200 px-4 py-2">Delete Marks</button>
                <button onClick={deleteProperty} className="bg-red-300 px-4 py-2 mt-4">Delete Property</button>
            </div>
            {/* User Section */}
            <h1 className="text-3xl mt-10">User</h1>
            <p>Email: {user.email}</p>
            <p>City: {user.city}</p>
            <button onClick={updateUser} className="bg-yellow-400 px-5 py-2 mt-5">update User</button>
            {Object.entries(user).map(([key, value]) => (<p key={key}>{key} : {value}</p>))}
        </div>
    );
}

export default StateDemo;