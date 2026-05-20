import { useState } from "react";
function StateDemo(){
    //state
    let [counter,setCounter]=useState(10)
    const increment=()=>{
        setCounter(counter+1)
    }
    const decrement=()=>{
        setCounter(counter-1)
    }
    const reset=()=>{
        setCounter(10)
    }
    return(
        <div>
            <p className="text-4xl mt-10">Counter: {counter}</p>
            <button onClick={increment} className="bg-amber-400 px-5 py-2 mt-5 me-4">Increment</button>
            <button onClick={decrement} className="bg-amber-400 px-5 py-2 mt-5 me-4">Decrement</button>
            <button onClick={reset} className="bg-amber-400 px-5 py-2 mt-5">Reset</button>
        </div>
    )
}

export default StateDemo