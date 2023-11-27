import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn"; 
import SignUp from "./pages/SignUp";
import ContactDetails from "./components/InnerLayout/ContactDetails";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Agent from "./pages/Agent";
import Commercial from "./pages/Commercial";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />      
          <Route path="/contact" element={<ContactDetails />} />   
          <Route path="/ab" element={<Buy/>} />          
          <Route path="/rent" element={<Rent/>} />          
          <Route path="/agent" element={<Agent/>} />          
          <Route path="/commercial" element={<Commercial/>} />          
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;
