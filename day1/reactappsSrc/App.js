import logo from './logo.svg';
import './App.css';
import Helloworld from './components/Helloworld';
import Greetings from './components/Greetings';
import HelloClass from './component/HelloClass';

function App() {
  return (
    <div className="App">
      <Helloworld/>
      <Greetings/>
      <HelloClass/>
    </div>
  );
}

export default App;
