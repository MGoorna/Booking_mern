import { useState } from 'react'
import FeatureProperties from '../../components/featureProperties/FeatureProperties';
import FeatureExplore from '../../components/featureExplore/FeatureExplore';
import { FaCar, FaCalendarDay } from "react-icons/fa";
import { DateRange } from 'react-date-range';
import { format, add } from 'date-fns';
import './rental.css'

const Rental = () => {
  const today = new Date(); 
  const tomorrowFns = add(new Date(),{days: 1}) 
  const [checkedStatus, setCheckedStatus] = useState({same: false , different: false})
  const [pickupLocation, setPickupLocation] = useState('')
  const [dropoffLocation, setDropoffLocation] = useState('')
  const [openDate, setOpenDate] = useState(false)
  const [datesCar, setDatesCar] = useState([
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
  }

  const handleSearch = () => {
    setOpenDate(false)
  }

  return ( 
    <div className="rentalcar__container">
      <h1>Car rentals for any kind of trip</h1>
      <h3>Compare deals from the biggest car rental companies</h3>
      <section className="ui_spacer-large">
        <input type="radio" id="same" 
        checked={checkedStatus.same}
        onChange={checkLocation}/>
        <label htmlFor="same">Return to same location</label>
        <input type="radio" id="different" 
        checked={checkedStatus.different}
        onChange={checkLocation}/>
        <label htmlFor="different">Return to different location</label>  

        <div className="rentalcar__search-box">
          <div className="hs__item">
            <div className="hs__ikon"><FaCar/></div>
            <input 
              type="text" 
              placeholder="Pick-up location"
              className='hs__input'
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              />
          </div>
          <div className="hs__item">
            <div className="hs__ikon"><FaCar/></div>
            <input 
              type="text" 
              placeholder="Drop-off location"
              className={`hs__input ${checkedStatus.same ? 'disabled' : ''} `}
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              disabled={checkedStatus.same}
              />
          </div>
          <div className="hs__item">           
            <div className="hs__ikon"><FaCalendarDay/></div>
            <span className="hs__date-text" 
              onClick={()=>setOpenDate(!openDate)} 
              style={{'color':'rgb(189, 189, 189)'}}>
              {`${format(datesCar[0].startDate, "MM/dd/yyyy")} `} 
               to  
              {` ${format(datesCar[0].endDate, "MM/dd/yyyy")}`} 
            </span>
            <span className='hs__date-range'>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDatesCar([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={datesCar} 
              minDate={new Date()}           
            />}
            </span>
          </div>
          <button className="btn pulse-animation" onClick={handleSearch}>Search</button>
        </div>


        <div>
          <input type="checkbox" id="driver-age"/>
          <label htmlFor="driver-age">Driver aged between 30 - 65 </label>
        </div>
      </section>
      <section>
        <h2>Popular destinations for car rentals</h2>
        <FeatureExplore />
      </section>
      <section className="rentalcar__suppliers ui_spacer-large">
        <h2>Popular rental car companies</h2>
        <ul>
          <li>
            <div>Europcar</div>
          </li>
          <li>
            <div>Alamo</div>
          </li>
          <li>
            <div>Sixt</div>
          </li>
          <li>
            <div>Avis</div>
          </li>
        </ul>
      </section>
      <section className="ui_spacer-large">
        <h2>Top worldwide locations for car rentals</h2>
        <FeatureProperties />
      </section>
    </div>
   );
}
 
export default Rental;