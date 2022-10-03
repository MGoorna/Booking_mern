import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Login from '../src/login/login'
import List from '../src/pages/list/List'
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
