import React,{useEffect,useState} from "react";
import axios from "axios";
function AxiosGet(){
    const[employee,setEmployee]=useState([]);
    useEffect(()=>{
        axios
        .get('http://localhost:3001/users')
        .then((res)=>
        {
            setEmployee(res.data);
        })
    .catch((err)=>
    {
        console.log(err);
    });
    },[]);
    return(
        <div>
            AxiosGet
            <ul>
                {employee.map((employee)=> (
                    <li key={employee.id}>{employee.name}</li>
               ))}
            </ul>
        </div>
    );
}
export default AxiosGet;