import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css"

const Navbar = () => {
  const {user} = useContext(AuthContext)

  return ( <>
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo"></span>
        </Link>
        {user ? user.email : (
          <div className="userNav">
            <button type='text' className="navBtn">Login</button>
            <button type='text' className="navBtn">Register</button>
          </div>
        )}
      </div>
    </div>
  </> );
}
export default Navbar;
