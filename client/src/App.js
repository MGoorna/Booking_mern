import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom';
import RootLayout from './components/rootLayout/RootLayout';
import Home from './pages/home/Home';
import Login from './pages/login/login';
import Register from './pages/register/Register';
import Error from './pages/error/Error';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import Rental from './pages/rental/Rental';
import Flights from './pages/flights/Flights';
import Countries from './components/countries/Countries';
import './App.css';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' exact element={<RootLayout />}>
      <Route index path='/' exact element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='list' element={<List />} />
      <Route path='hotel/:id' element={<Hotel />} />
      <Route path='carrental' element={<Rental />} />
      <Route path='flights' element={<Flights />} />
      <Route path='countries' element={<Countries />} />
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
