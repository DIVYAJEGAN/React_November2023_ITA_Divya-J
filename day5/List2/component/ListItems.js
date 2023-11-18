import React,{useState} from "react";

function ListItems(){
    const [students]=useState(
        [
            {
                id:1,
                name:"John",
                age:22,
            },
            {
                id:2,
                name:"Mike",
                age:22,
            },
            {
                id:3,
                name:"Joe",
                age:23,
            },
        ]
    );

    return (
        <div>
            <h1>ListItems</h1>
            <hr></hr>
            <ul style={{listStyleType:"none"}}>
                {students.map((student) => (
                        <li key={student.id}>
                            <h1>ID: {student.id}</h1>
                            <p>NAME: {student.name}</p>
                            <p>AGE: {student.age}</p>
                        </li>
                    )) 
                }
            </ul>
            <hr>
            </hr>
        </div>
    )
};

export default ListItems;