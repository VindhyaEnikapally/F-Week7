//react func returns react elements
function Test1(props){ // receives single object-{key,val}, props- parameter (its a single object)
    let {message1,message2}=props.messages
    //state

    //elements
    return (
        <div className="bg-amber-300 p-10 m-5">
            <h1>Test1 Component</h1>
            {/*<p className="text-3xl">{props.message1}</p>
            <p className="text-3xl">{props.message2}</p> instead */}
            <p className="text-3xl">{message1}</p>
            <p className="text-3xl">{message2}</p>
        </div>
    );
}

export default Test1
