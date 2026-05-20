import { useEffect, useState } from 'react'
import React from 'react'

function SideEffects() {
    let[counter,setCounter]=useState(10)
    console.log("side effect component rendered");

    useEffect(()=>{
        //side effect
        console.log("use effect executed");
    })
  return (
    <div>
    </div>
  )
}

export default SideEffects