import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LanguageContext } from "../../context/LanguageContext";
import { IoMdLogOut } from "react-icons/io";
import Tooltip from '../tooltip/Tooltip';
import Countries from '../countries/Countries';
import './navbar.css';

const Navbar = () => {
  const {user, dispatch} = useContext(AuthContext)
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

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

  const {cca2, img} = useContext(LanguageContext)

  return ( <>
    <div className="navbar">
      <nav className="n__container">
        <Link to="/">
          <span className="n__logo">LOGO</span>
        </Link>
        <div className="btn__group">
          <Tooltip text="Select country">
            <NavLink to="/" className="btn__sq">
            
              <div 
              className="btn__sq-text"
              onClick={()=>{setOpenModal(true)}}>
              <img src={img} style={{width: '100%'}} alt={cca2} />
              </div>
              {openModal && (
                <Countries setOpenModal={setOpenModal}/>
              )}
            </NavLink>
          </Tooltip>
          <NavLink to="/currency" className="btn__sq"><div className="btn__sq-text">FCH</div></NavLink>
          <NavLink to="/help" className="btn__sq"><div className="btn__sq-text help">?</div></NavLink>

          {user ? 
          (<div className="n__user-details">
            <span>{user.email}</span>
            <span><IoMdLogOut size={26} onClick={handleLogout}/></span>
          </div>) 
          :(
            <div className="n__login">
              <button type='text' className="n__btn" onClick={handleLogin}>Login</button>
              <button type='text' className="n__btn" onClick={handleSubmit}>Register</button>
            </div>
          )}
        </div>
      </nav>
    </div>
  </> );
}
export default Navbar;
