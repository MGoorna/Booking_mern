import { NavLink, Outlet } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { FaHotel, FaBed, FaCar, FaPlane } from "react-icons/fa";
import './rootLayout.css';

const RootLayout = () => {
  return ( <>   
    <header className="header">
      <div className="header__container">
      <Navbar />
      <nav className="h__list">
          <NavLink to="/stays">
            <FaHotel size={'1.5em'}/>
            <span>Stays</span>
          </NavLink>
          <NavLink to="/about">
            <FaBed size={'1.5em'}/>
            <span>Beds</span>
          </NavLink>
          <NavLink to="/flights">
            <FaPlane size={'1.5em'}/>
            <span>Flights</span>
          </NavLink>
          <NavLink to="/carrental">
            <FaCar size={'1.5em'}/>
            <span>Car rental</span>
          </NavLink>     
        </nav>
      </div>

    </header>

    <main>
      <Outlet />
    </main>
    <MailList />
    <Footer />
  </>);
}
 
export default RootLayout;