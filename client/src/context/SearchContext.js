import { createContext, useReducer } from "react";

export const SearchContext = createContext;

const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  }
}

const SearchReducer = (state, action) => {
  switch(action.type){
    case 'NEW_SEARCH':
      return action.payload;
    case 'RESET_SEARCH':
      return INITIAL_STATE;
    default:
       return state;
  }
}

const SearchContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE)

  return(
    <SearchContext.Provider value={{city: state.city, dates: state.dates, options: state.options, dispatch}}>
      {children}
    </SearchContext.Provider>
  )
} 
export default SearchContextProvider