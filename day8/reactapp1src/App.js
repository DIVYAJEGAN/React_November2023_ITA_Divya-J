import logo from './logo.svg';
import './App.css';
import AxiosGet from './component/AxiosGet';
import AxiosPost from './component/AxiosPost';
import AxiosPut from './component/AxiosPut';

function App() {
  return (
    <div className="App">
     <AxiosGet/>
     <AxiosPost/>
     <AxiosPut/>
    </div>
  );
}

export default App;
