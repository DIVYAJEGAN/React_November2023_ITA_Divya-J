import React,{ useState } from "react";

function Toggle()
{
    const [name,setName] = useState("Kaioken");
    const [count,setCount] = useState(0);
    //toggle name
    const nameHandler =()=>
    {
        let value=count;
        setCount(++value);
        if(count ==3){
        if(name === "Kaioken") setName("SuperSaiyen");
        else setName("Kaioken");
        setCount(0);
        }
    };
    return(
        <div>
            <h3>{name}</h3>
            <button onClick={nameHandler}>Toggle</button>
        </div>
    );
}

export default Toggle;