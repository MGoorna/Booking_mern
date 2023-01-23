import { createContext, useReducer } from 'react'

const INITIAL_STATE = {
  name: 'Great Britain',
  cca2: 'GB',
  img: 'https://flagcdn.com/gb.svg'
}
export const LanguageContext = createContext(INITIAL_STATE)

const LanguageReducer = (state, action) => {
  switch(action.type){
    case "CHANGE":
      return{
        name: action.payload.name,
        cca2: action.payload.cca2,
        img: action.payload.img
      }
      default:
        return state
  }
}

export const LanguageContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LanguageReducer, INITIAL_STATE)

  return (
    <LanguageContext.Provider value={{
      name: state.name, 
      cca2: state.cca2,
      img: state.img,
      dispatch}}>
      {children}
    </LanguageContext.Provider>
  )
}

