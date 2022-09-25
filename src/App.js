import './App.css';
import Posts from './Components/MainContent/Posts';
import { Route, Routes } from 'react-router-dom';
import Sideber from './Components/MainContent/Sideber';
import HorijontalPosts from './Components/MainContent/HorijontalPosts';

function App() {
  return (
    <div className="App">
      {/* <Sideber></Sideber> */}
      {/* <Posts></Posts> */}
      <Routes>
        <Route path='/' element={<Sideber></Sideber>}>
          <Route index element={<Posts></Posts>}></Route>
        <Route path='/hPost' element={<HorijontalPosts></HorijontalPosts>}></Route>
          {/* <Route path='path' element={<Vpost></Vpost>}></Route> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
