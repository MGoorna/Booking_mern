import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../src/pages/home/Home';
import Login from '../src/login/login';
import List from '../src/pages/list/List';
import Hotel from './pages/hotel/Hotel';
import './App.css';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Login />} path='/login' />
          <Route element={<List />} path='/list' />
          <Route element={<Hotel />} path='/hotel' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
