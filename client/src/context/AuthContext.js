import { createContext, useReducer } from "react";


const INITIAL_STATE = {
  user: null,
  loading: false,
  error: false,
}

const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch(action.type){
    case'LOGIN_START':
      return {
        user: null,
        loading: true,
        error: false,
      };
    case'LOGIN_SUCCESS':
      return {
        user: action.payload,
        loading: false,
        error: false,
      };
    case'LOADING_FAILURE':
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    default:
       return state;
  }
}

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
  
  return (
    <AuthContext.Provider value={{user: state.user, loading: state.loading, error: state.error, dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}
