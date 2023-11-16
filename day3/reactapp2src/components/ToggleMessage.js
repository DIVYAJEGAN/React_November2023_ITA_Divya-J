import { useState } from "react";
function ToggleMessage()
{
    const [showMessage,setShowMessage] = useState(false);
    const toggleMessage =()=>
    {
    setShowMessage(!showMessage);
    }
    return(
        <div>
            <h1>Dashboard</h1>
            <button onClick ={toggleMessage}>
            {showMessage ? "Hide Message":"Show Message"}
            </button>
            {showMessage && <p>Hi How are you?</p>}
        </div>
    );
}
export default ToggleMessage;