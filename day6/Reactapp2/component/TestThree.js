import React,{Component} from "react";
export default class TestThree extends Component{
    render()
    {
        throw new Error("error");
        return (
            <div>
                <h1>Component Three</h1>
            </div>
        );
    }
}