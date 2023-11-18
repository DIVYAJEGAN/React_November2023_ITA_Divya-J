import React,{useState,useEffect} from "react";
const FunLifecycle = () =>
{
  const[count,setCount]=useState(0);
  useEffect(()=>{
    console.log("Component is mounted!");
    return()=>{
        console.log("Component will unmount!");
    };
  },[]);
  useEffect(()=>{
    console.log("Component has been updated!");
  })
}
export default FunLifecycle;