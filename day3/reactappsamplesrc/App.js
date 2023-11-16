import logo from './logo.svg';
import './App.css';
import StateProps from './components/StateProps';
import Props from './component/Props';
import { useState } from 'react';

function App() {
  const [name,setName]=useState("Props:Divya");
  return (
    <div className="App">
      <StateProps/>
      <Props username={name}/>
    </div>
  );
}

export default App;
