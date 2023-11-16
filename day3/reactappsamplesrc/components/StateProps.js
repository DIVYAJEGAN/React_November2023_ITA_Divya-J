import { useState } from "react";

function StateProps()
{    
    //create statehook
    const [name,setName] = useState("John");
    const [num,setNum] = useState(12);
    const [student,setStudent] = useState({name:"Mike",age:17});

    //change name
    const nameHandler =() =>{
    setName("Mike");
    };

    //change number
    const numHandler =()=>{
        let value=num;
        setNum(++value);
    };

    //change object
    const studentHandler =()=>
    {
        setStudent({name:"Michael",age:18});
    }

    return(
        <div>
            <h1>StateProps</h1>
            <hr></hr>
            <h2>Hi {name}</h2>
            <h2>Number is {num}</h2>
            <h3>Student Name is {student.name} and age is {student.age}</h3>
            <button onClick={nameHandler}>Change Name</button><br></br>
            <button onClick={numHandler}>Increment Number</button>        
            <button onClick={studentHandler}>Change student</button>        
        </div>
    );

}

export default StateProps;