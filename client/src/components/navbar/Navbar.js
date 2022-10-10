import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css"

const Navbar = () => {
  const {user} = useContext(AuthContext)

  return ( <>
    <header className="navbar">
      <nav className="n__container">
        <Link to="/">
          <span className="n__logo">LOGO</span>
        </Link>
        {user ? user.email : (
          <div className="n__user-nav">
            <button type='text' className="n__btn">Login</button>
            <button type='text' className="n__btn">Register</button>
          </div>
        )}
      </nav>
    </header>
  </> );
}
export default Navbar;
