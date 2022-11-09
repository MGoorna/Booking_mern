import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import "./list.css";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options);
  const [minPrice, setMinPrice] = useState(undefined);
  const [maxPrice, setMaxPrice] = useState(undefined);
  const [openDate, setOpenDate] = useState(false);

  const { data, error, loading, reFetch } = useFetch(
    `/hotel/findByCitySingle?city=${destination}&min=${options.minPrice || 0 }&max=${options.maxPrice || 999}`)
    
  const handleOptions = (value, type) => {
    setOptions((prev)=>{
      return {
        ...prev, [type]:value
      }
    })
  }
  const handleSearch = () => {
    reFetch()
  }

  console.log(location, data, 'destination', destination)

  return ( <>
    <Navbar />
    <Header type="list"/>
    <div className="explore">
      <div className="explore__container">
        <div className="explore__search">     
          <div className="explore__search-panel">
            <h2 className="explore__title">Search</h2>
            <div>
              <label htmlFor="">Destination/property name:</label>
              <input 
                type="text" 
                placeholder="hotel-name"
                value={destination} 
                onChange={(e)=>setDestination(e.target.value)}/>
            </div>
            <div className="explore__search-dates">
              <label>Check-in Date</label>
              <div onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</div>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div>
              <label htmlFor="">9-night stay</label>
              <input 
                type="text"
                placeholder="3 adults 1 child 1 room"
                value={options.adult}
                onChange={(e)=>setOptions(e.target.value)} />
            </div>
            <div>
              <label htmlFor="" className="explore__options">
                Options
                <div>
                  <label htmlFor="">Min price per night</label>
                  <input 
                    type="text"
                    placeholder="min price"
                    value={options.minPrice}
                    onChange={(e)=>handleOptions(e.target.value, 'minPrice')} />
                </div>
                <div>
                  <label htmlFor="">Max price per night</label>
                  <input 
                    type="text"
                    placeholder="max price"
                    value={options.maxPrice}
                    onChange={(e)=>handleOptions(e.target.value, 'maxPrice')} />
                </div>
                <div>
                  <label htmlFor="">adults</label>
                  <input 
                    type="text"
                    placeholder="3 adults"
                    value={options.adult}
                    onChange={(e)=>handleOptions(e.target.value, 'adult')} />
                </div>
                <div>
                  <label htmlFor="">children</label>
                  <input 
                    type="text"
                    placeholder="1 children"
                    value={options.children}
                    onChange={(e)=>handleOptions(e.target.value, 'children')} />
                </div>
                <div>
                  <label htmlFor="">room</label>
                  <input 
                    type="text"
                    placeholder="1 room"
                    value={options.room}
                    onChange={(e)=>handleOptions(e.target.value, 'room')} />
                </div>
              </label>
            </div>
            <div>
              <button className="btn s__btn" onChange={()=>{handleSearch()}}>Submit</button>
            </div>
          </div>
        </div>

        <div className="explore__hotels">
          <h2 className="explore__title">{destination}: {data.length} {data.length === 1 ? 'property':'properties'} found</h2>
          <div className="explore__title"></div>

          {data && data.map(hotel => (
            <div className="explore__hotels-list" key={hotel._id}>
            <div className="explore__img-container">
              <img src={hotel.photos[0]} alt={hotel.name} />
            </div>
            <div className="explore__hotel-details">
              <Link to={`/hotel/${hotel._id}`}>
                <h3 className="explore__hotel-title">
                  {hotel.name}
                </h3>
              </Link>
             
              <span className="explore__hotel-stars"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></span>
              <p className="explore__hotel-distance"><small>{hotel.distance}m from center</small></p>
              <div className="explore__hotel-description tuncate">{hotel.desc}</div>
            </div>
            <div className="explore__hotel-raiting">
              <div className="">
                <div>
                  <div><strong>${hotel.cheapestPrice}</strong></div>
                  <small>{hotel.rating} reviews</small>
                </div>
                <button className="btn score-btn">{hotel.rating}</button>
              </div>
              <button className="btn rating-btn">Show prices</button>
            </div>
          </div> 
          ))}
   
     
        </div>
      </div>
    </div>
  </> );
}
 
export default List;