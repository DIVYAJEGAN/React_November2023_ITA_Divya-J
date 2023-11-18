import React,{Component} from "react";
export default class ErrorBoundary extends Component{
    state={
        error:null,
    };
    static getDerivedStateFromError(error)
    {
        //update state so next render shows fallback UI.
        return {error:error};
    }
    componentDidCatch(error,info)
    {
        //log the error to an error reporting service
        console.log(error,info);
    }
    render()
    {
        if(this.state.error)
        {
            return <p style={{color:"red"}}>Something went wrong!!</p>;
        }
        return this.props.children;
    }
}