import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import "./list.css";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [hotels, setHotels] = useState(location.state.hotels);

  const { data, error, loading } = useFetch(`/hotel`)

  console.log(location, data)

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
        <div className="explore__hotels">
          <h2 className="explore__title">Locarno: 201 properties found</h2>
          <div className="explore__title"></div>
          <div className="explore__hotels-list">
            <div className="explore__img-container">
              <img src="https://t-cf.bstatic.com/xdata/images/hotel/square200/156678874.webp?k=93a139bc44d05e3b570715b7f5fc41e8e3431553e54aec65554c94a5f894110e&o=&s=1" alt="Hotel_la_Palma" />
            </div>
            <div className="explore__hotel-details">
              <h3 className="explore__hotel-title">Hotel la Palma au LacOpens in new window</h3>
              <span className="explore__hotel-stars"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></span>
              <div className="explore__hotel-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolor, deleniti omnis quibusdam inventore mollitia natus aut. Nesciunt, voluptate nisi?</div>
            </div>
            <div className="explore__hotel-raiting">
              <div className="">
                <div>
                  <div><strong>Excellent</strong></div>
                  <small>3,618 reviews</small>
                </div>
                <button className="btn score-btn">8.6</button>
              </div>
              <button className="btn rating-btn">Show prices</button>
            </div>
          </div>    
          <div className="explore__hotels-list">
            <div className="explore__img-container">
              <img src="https://t-cf.bstatic.com/xdata/images/hotel/square200/156678874.webp?k=93a139bc44d05e3b570715b7f5fc41e8e3431553e54aec65554c94a5f894110e&o=&s=1" alt="Hotel_la_Palma" />
            </div>
            <div className="explore__hotel-details">
              <h3 className="explore__hotel-title">Hotel la Palma au LacOpens in new window</h3>
              <span className="explore__hotel-stars"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></span>
              <div className="explore__hotel-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolor, deleniti omnis quibusdam inventore mollitia natus aut. Nesciunt, voluptate nisi?</div>
            </div>
            <div className="explore__hotel-raiting">
              <div className="">
                <div>
                  <div><strong>Excellent</strong></div>
                  <small>3,618 reviews</small>
                </div>
                <button className="btn score-btn">8.6</button>
              </div>
              <button className="btn rating-btn">Show prices</button>
            </div>
          </div>  
          <div className="explore__hotels-list">
            <div className="explore__img-container">
              <img src="https://t-cf.bstatic.com/xdata/images/hotel/square200/156678874.webp?k=93a139bc44d05e3b570715b7f5fc41e8e3431553e54aec65554c94a5f894110e&o=&s=1" alt="Hotel_la_Palma" />
            </div>
            <div className="explore__hotel-details">
              <h3 className="explore__hotel-title">Hotel la Palma au LacOpens in new window</h3>
              <span className="explore__hotel-stars"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></span>
              <div className="explore__hotel-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolor, deleniti omnis quibusdam inventore mollitia natus aut. Nesciunt, voluptate nisi?</div>
            </div>
            <div className="explore__hotel-raiting">
              <div className="">
                <div>
                  <div><strong>Excellent</strong></div>
                  <small>3,618 reviews</small>
                </div>
                <button className="btn score-btn">8.6</button>
              </div>
              <button className="btn rating-btn">Show prices</button>
            </div>
          </div>      
        </div>
      </div>
    </div>
  </> );
}
 
export default List;