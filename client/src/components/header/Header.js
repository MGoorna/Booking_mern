import { Link } from 'react-router-dom'
import { FaHotel, FaBed, FaCar, FaPlane, FaCalendarDay } from "react-icons/fa";
import './header.css'

const Header = () => {
  return ( <>
    <div className="header">
      <div className="hContainer">
        <div className="hList">
          <div className="hlItem">
            <FaHotel />
            <span>Stays</span>
          </div>
          <div className="hlItem">
            <FaBed />
            <span>Beds</span>
          </div>
          <div className="hlItem">
            <FaPlane />
            <span>Flights</span>
          </div>
          <div className="hlItem">
            <FaCar />
            <span>Car rental</span>
          </div>       
        </div>
        <p>Available until Jan 3, 2024</p>
        <h1>Save 15% with Late Escape Deals</h1>
        <p>There's still time to check one more destination off your wushlist</p>
        <Link href="">Explore deals</Link>
        <div className="hSearchbox">
          <div className="hsItem">
            <FaBed/>
            <input 
              type="text" 
              placeholder="Where are you going"
              className='hsInput'/>
          </div>
          <div className="hsItem">
            <FaBed/>
            <input 
              type="text" 
              placeholder=""
              className='hsInput'/>
          </div>
          <div className="hsItem">
            <FaBed/>
            <input 
              style={{ backgroundImage: `url(${FaBed})` }}
              type="text" 
              placeholder=""
              className='hsInput'/>
          </div>
        </div>
      </div>
    </div>
  </> );
}
 
export default Header;