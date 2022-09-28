import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./login.css"

const Login = () => {
  const {user, loading, error, dispatch} = useContext(AuthContext)
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value}))
  }
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START'})
    try{
      const resp = await axios.post('/auth/login', credentials)
      dispatch({ type: 'LOGIN_SUCCESS', payload: resp.data})
      localStorage.setItem("user", JSON.stringify(credentials.username))
      navigate('/')
    }catch(err){
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data})
    }

  }
  return ( <>
    <div className='lContainer'>
      <div>
        <input 
          type="text" 
          placeholder='user' 
          id='username' 
          onChange={handleChange}/>
      </div>
      <div>
        <input 
          type="password" 
          placeholder="password" 
          id='password'
          onChange={handleChange}
        />
      </div>
      <button disabled={loading} type='submit' onClick={handleClick}>LOGIN</button>
      {error && <span>{error.message}</span>}
    </div>
  </> );
}
 
export default Login;