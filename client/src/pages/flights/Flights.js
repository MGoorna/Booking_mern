import { useState } from 'react'
import FeatureProperties from '../../components/featureProperties/FeatureProperties';
import FeatureExplore from '../../components/featureExplore/FeatureExplore';
import { FaPlane, FaCalendarDay } from "react-icons/fa";
import { DateRange } from 'react-date-range';
import { format, add } from 'date-fns';


const Flights = () => {
  const today = new Date(); 
  const tomorrowFns = add(new Date(),{days: 1})
  const [checkedStatus, setCheckedStatus] = useState({same: false , different: false})
  const [fromLocation, setPickupLocation] = useState('')
  const [toLocation, setDropoffLocation] = useState('')
  const [openDate, setOpenDate] = useState(false)
  const [datesFlight, setDatesCar] = useState([
    {
      startDate: today,
      endDate: tomorrowFns,
      key: 'selection'
    }
  ]);

  const checkLocation = (e) => {
    const checked = e.target.checked
    const id = e.target.id
    const opositeType = id === "same"? "different" : "same" 
    setCheckedStatus({[id]: checked , [opositeType]: !checked})   
     console.log(checkedStatus)
  }

  const handleSearch = () => {
    setOpenDate(false)
    console.log(datesFlight)
  }

  return ( 
    <div className="flights__container">
      <h1>Compare and book flights with ease</h1>
      <h3>Discover your next dream destination</h3>
      <section>
        <div className="ui_spacer-large flights__checkbox_controller_trip">
          <input type="radio" id="same" 
            checked={checkedStatus.same}
            onChange={checkLocation}/>
          <label htmlFor="same">Return to same location</label>
          <input type="radio" id="different" 
            checked={checkedStatus.different}
            onChange={checkLocation}/>
          <label htmlFor="different">Return to different location</label>  
          <select name="type" id="">
            <option value="">--Please choose an option--</option>
            <option value="Econonmy">Econonmy</option>
            <option value="premium_economy">Premium economy</option>
            <option value="business">Business</option>
            <option value="first">First class</option>
          </select>
          <select name="people" id="">
            <option value="children">Children</option>
            <option value="adult">Adult</option>
          </select>
        </div>
        <div className="rentalcar__search-box">
          <div className="hs__item">
            <div className="hs__ikon"><FaPlane/></div>
            <input 
              type="text" 
              placeholder="Pick-up location"
              className='hs__input'
              value={fromLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              />
          </div>
          <div className="hs__item">
            <div className="hs__ikon"><FaPlane/></div>
            <input 
              type="text" 
              placeholder="Drop-off location"
              className={`hs__input ${checkedStatus.same ? 'disabled' : ''} `}
              value={toLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              disable={checkedStatus.same}
              />
          </div>
          <div className="hs__item">           
            <div className="hs__ikon"><FaCalendarDay/></div>
            <span className="hs__date-text" 
              onClick={()=>setOpenDate(!openDate)} 
              style={{'color':'rgb(189, 189, 189)'}}>
              {`${format(datesFlight[0].startDate, "MM/dd/yyyy")} `} 
               to  
              {` ${format(datesFlight[0].endDate, "MM/dd/yyyy")}`} 
            </span>
            <span className='hs__date-range'>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDatesCar([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={datesFlight} 
              minDate={new Date()}           
            />}
            </span>
          </div>
          <button className="btn pulse-animation" onClick={handleSearch}>Search</button>
        </div>
      </section>
      <section className="ui_spacer-large">
        <h2>Popular destinations for car rentals</h2>
        <FeatureExplore />
      </section>
      <section className="ui_spacer-large">
        <h2>Top worldwide locations for car rentals</h2>
        <FeatureProperties />
      </section>
    </div>
  );
}
 
export default Flights;