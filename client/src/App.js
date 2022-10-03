import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Login from '../src/login/login'
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
