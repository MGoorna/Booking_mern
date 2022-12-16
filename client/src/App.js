import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom';
import RootLayout from './components/rootLayout/RootLayout';
import Home from '../src/pages/home/Home';
import Login from '../src/pages/login/login';
import Register from './pages/register/Register';
import Error from './pages/error/Error';
import List from '../src/pages/list/List';
import Hotel from './pages/hotel/Hotel';
import './App.css';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='list' element={<List />} />
      <Route path='hotel' element={<Hotel />} />
      <Route path='*' element={<Error />} />
    </Route>       
  )
)

function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
