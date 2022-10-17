import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "../login/login.css"

const Register = () => {
  const {loading, error, dispatch} = useContext(AuthContext)
  const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined,
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value}))
  }
  const handleClick = async (e) => {
    e.preventDefault();

      
      try { 
        await axios.post('/auth/register', credentials) 
        navigate('/login')
      } catch (err) {
        console.log(err);
      }
    
  }
  return ( <>
    <div className='lContainer'>
        <input 
          type="text" 
          placeholder='user' 
          name='userName' 
          onChange={handleChange}
          className='lInput'/>
        <input 
          type="email" 
          placeholder="email" 
          name='email'
          onChange={handleChange}
          className='lInput'
        />
        <input 
          type="password" 
          placeholder="password" 
          name='password'
          onChange={handleChange}
          className='lInput'
        />
      <button disabled={loading} type='submit' onClick={handleClick} className='lBtn'>SUBMIT</button>
      {error && <span>{error.message}</span>}
    </div>
  </> );
}
 
export default Register;