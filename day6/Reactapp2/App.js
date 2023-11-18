import logo from './logo.svg';
import './App.css';
import React from "react";
import TestOne from './component/TestOne';
import TestTwo from './component/TestTwo';
import TestThree from './component/TestThree';
import ErrorBoundary from './component/ErrorBoundary';
function App() {
  return (
    <div>
    <React.Fragment>
      <ErrorBoundary>
        <TestOne/>
      </ErrorBoundary>

      <ErrorBoundary>
        <TestTwo/>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <TestThree/>
      </ErrorBoundary>
    </React.Fragment>
    </div>
    /*<div className="App">
      <TestOne/>
      <TestTwo/>
      <TestThree/>
    </div>*/
  );
}

export default App;