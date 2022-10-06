import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import "./list.css";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [hotels, setHotels] = useState();


  const { data, error, loading } = useFetch(`/hotel`)

  /*useEffect( async() =>{
    const resp = await fetch('/api/hotels')
    const json = resp.json()
    setHotels(json)
  },[])*/

  console.log(location, data)

  return ( <>
    <Navbar />
    <Header type="list"/>
    <div className="list">
      <div className="list__container">
        <div className="list__search">
        
          <div className="list__search-panel">
            <h2 className="list__title">Search</h2>

            <div>
              <label htmlFor="">Destination/property name:</label>
              <input type="text" placeholder="hotel-name"/>
            </div>
            <div>
              <label htmlFor="">Check-in date</label>
              <input type="text" placeholder="hotel-name"/>
            </div>
            <div>
              <label htmlFor="">Destination/property name:</label>
              <input type="text" placeholder="hotel-name"/>
            </div>
            <div>
              <label htmlFor="">9-night stay</label>
              <input type="text" placeholder="3 adults 1 child 1 room"/>
            </div>
            <div>
              <label htmlFor="">
                Options
              </label>
            </div>
            <div>
              <button className="btn s__btn">Submit</button>
            </div>
          </div>
        </div>


        <div className="list__hotels">
          <h2 className="list__title">Hotels</h2>
          {data && (<div>data</div>)}
        </div>
      </div>
    </div>
  </> );
}
 
export default List;