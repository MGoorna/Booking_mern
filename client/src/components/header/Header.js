import { useState, useContext, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext'
import { FaBed, FaCalendarDay, FaUserAlt } from "react-icons/fa";
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

import _ from "lodash";

//import debounce from "lodash.debounce";
import './header.css';


const Header = ({ type }) => {
  const today = new Date();
  //const tomorow = new Date();
  const [destination, setDestination] = useState("zermatt");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: today,
      endDate: new Date().setDate(today.getDate()+1),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  });
  const { dispatch } = useContext(SearchContext)


  const handleStepper = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev, [name]: operation === 'increase' ? options[name]+1 : options[name]-1
      }
    })
  };
  
  const navigate = useNavigate();

  const handleDestination = e => setDestination(e?.target?.value)
  
  const debouncedOnHanleDestination = _.debounce(handleDestination, 500)

  const handleSearch = () =>{
    console.log(new Date(dates[0].startDate).getTime(), 'option', options )
    if(destination !== ''){
      dispatch({ type:'NEW_SEARCH', payload:{ destination, dates, options }})
      navigate('/list', {state:{ destination, dates, options }});     
    }
  }
  const debounceHandleSearch = useCallback(_.debounce(handleSearch, 500))

  return ( <>
    <header className="header">
      <div className="header__container">
        {type !== 'list' && <>
        <div className="h__desc">
          <p>Available until Jan 3, 2024</p>
          <h1>Save 15% with Late Escape Deals</h1>
          <p>There's still time to check one more destination off your wishlist</p>
          <Link to="/about" className="btn">Explore deals</Link>
        </div>
        <div className="h__search-box">
          <div className="hs__item">
            <div className="hs__ikon"><FaCalendarDay/></div>
            <input 
              type="text" 
              placeholder="Where are you going"
              className='hs__input'
              //value={destination}
              //onChange={(e) => setDestination(e.target.value)}
              onChange={debouncedOnHanleDestination}
              />
          </div>
          <div className="hs__item">           
            <div className="hs__ikon"><FaBed/></div>
            <span className="hs__date-text" 
              onClick={()=>setOpenDate(!openDate)} 
              style={{'color':'rgb(189, 189, 189)'}}>
              {`${format(dates[0].startDate, "MM/dd/yyyy")} `} 
               to  
              {` ${format(dates[0].endDate, "MM/dd/yyyy")}`} 
            </span>
            <span className='hs__date-range'>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDates([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dates} 
              minDate={new Date()}           
            />}
            </span>
          </div>
          <div className="hs__item">
            <div className="hs__ikon"><FaUserAlt/></div>
            <div 
              className="hs__guests-occupancy" 
              role="button" 
              aria-expanded="false"
              >
              <span className="xp__guests__count" onClick={()=>{setOpenOptions(!openOptions)}}>
                <span data-adults-count="">{`${options.adult}`} adults</span>
                <span data-visible="accommodation">
                  &nbsp;·&nbsp;
                  <span>{`${options.children}`} children</span>
                </span>
                <span data-visible="accommodation">
                  &nbsp;·&nbsp;
                  <span>{`${options.room}`} room</span>
                </span>
              </span>
            </div>
            {openOptions && <div className="hs__guests-stepper-container">
              <div className="hs__stepper">
                <span>Adults</span>
                <div className="hs__stepper-wrapper">
                  <button 
                    className="hs_stepper_counter" 
                    disabled={options.adult === 0}
                    onClick={()=>handleStepper('adult','decrease')}>-</button>
                  <span>{options.adult}</span>
                  <button 
                    className="hs_stepper_counter" 
                    onClick={()=>handleStepper('adult','increase')}>+</button>
                </div>
              </div>
              <div className="hs__stepper">
                <span>Children</span>
                <div className="hs__stepper-wrapper">
                  <button 
                    className="hs_stepper_counter" 
                    disabled={options.children === 0}
                    onClick={()=>handleStepper('children','decrease')}>-</button>
                  <span>{options.children}</span>
                  <button 
                    className="hs_stepper_counter" 
                    onClick={()=>handleStepper('children','increase')}>+</button>
                </div>
              </div>
              <div className="hs__stepper">
                <span>Rooms</span>
                <div className="hs__stepper-wrapper">
                  <button 
                    className="hs_stepper_counter" 
                    disabled={options.room === 0}
                    onClick={()=>handleStepper('room','decrease')}>-</button>
                  <span>{options.room}</span>
                  <button 
                    className="hs_stepper_counter" 
                    onClick={()=>handleStepper('room','increase')}>+</button>
                </div>
              </div>
            </div>}
          </div>
          <button className="btn pulse-animation" onClick={debounceHandleSearch}>Search</button>
        </div>
        </>}
      </div>
    </header>
  </> );
}

export default Header;