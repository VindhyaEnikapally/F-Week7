import { useEffect,useState } from "react";

function ProductsList() {
    let [ProductsList,setProducts]=useState([]);
    let [loading,setLoading]=useState(false);
    let [error,setError]=useState(0)

    useEffect(()=>{
        async function getProducts(){

        }
    })

    if(loading==true){
        return <p className="text-center text-2xl text-blue-300">Loading..</p>
    }
    else if(error!=null){
        return <p className="text-center text-2xl text-blue-300">{error.message}</p>
    }
    return <div>
        products.map((productObj) => <div>(
            )

            </div>)
    </div>
}

export default ProductsList