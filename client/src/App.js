import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Login from '../src/login/login'
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Login />} path='/login' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
