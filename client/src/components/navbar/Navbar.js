import { Link, useNavigate } from 'react-router-dom'
import { useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import { IoMdLogOut } from "react-icons/io";
import './navbar.css';

const Navbar = () => {
  const {user, dispatch} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogout = () =>{
    dispatch({type: "LOGOUT"})
    localStorage.removeItem('user')
    navigate('/login')
  }
  const handleLogin = () => {
    navigate('/login')
  }
  const handleSubmit = () => {
    navigate('/register')
  }

  return ( <>
    <header className="navbar">
      <nav className="n__container">
        <Link to="/">
          <span className="n__logo">LOGO</span>
        </Link>
        {user ? 
        (<div className="n__user-details"><span>{user.email}</span>
          <span><IoMdLogOut size={26} onClick={handleLogout}/></span>
        </div>) 
        :(
          <div className="n__login">
            <button type='text' className="n__btn" onClick={handleLogin}>Login</button>
            <button type='text' className="n__btn" onClick={handleSubmit}>Register</button>
          </div>
        )}
      </nav>
    </header>
  </> );
}
export default Navbar;
