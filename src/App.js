import logo from './logo.svg';
import './App.css';
import Posts from './Components/MainContent/Posts';
import { Route, Routes } from 'react-router-dom';
import Sideber from './Components/MainContent/Sideber';
import Vpost from './Components/Vpost';

function App() {
  return (
    <div className="App">
      {/* <Sideber></Sideber> */}
      {/* <Posts></Posts> */}
      <Routes>
        <Route path='/' element={<Sideber></Sideber>}>
          <Route index element={<Posts/>}></Route>
          {/* <Route path='path' element={<Vpost></Vpost>}></Route> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
