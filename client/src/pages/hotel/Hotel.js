import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FaCity, FaTree, FaPaw, FcCheckmark, FaWifi, FaBath, FaSnowflake, FaParking } from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";
import "./hotel.css";
import Reserve from "../../components/reserve/Reserve";

const Hotel = () => {
  //const { data, loading, error } = useFetch(`/hotel/find/63443252900c165c1d798f43`);
  const user = useContext(AuthContext);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const navigate = useNavigate();
  //const [id, setId] = useState(location.state.id);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/hotel/find/${id}`)

  console.log('data', data, 'location',location)
  const handleReserve = () => {
    if(user){
      setOpenModal(true)
      
    }else{
      navigate('/login')
    }
  }
  console.log(openModal)

  return ( <>
  <Navbar />
  <Header type='list'/>
  {loading ? "Loading"
  : (data && (
    <div className="hotel">
    <div className="hotel__container">
      <h1 className="hotel__title">{data.name}</h1>
      <div className="hotel__address">
        <FaCity size={32}/>
        <span>{data.address}</span>
      </div>
      <div className="hotel__images">
        <div className="hotel__img-wrapper">
        {data && data.photos && data.photos.map(img=>(
            <img className="hotel__img" src={img} alt={data.name} key={img}/>
        ))} 
        </div>
      </div>
      <div className="hotel__property-highlights">
        <div>
          <div className="hotel__property-icon">
            <FaCity size={32}/>
          </div>
          <div className="hotel__property-text">
            City view
          </div>
        </div>
        <div>        
          <div className="hotel__property-icon">
            <FaTree size={32}/>
          </div>
          <div className="hotel__property-text">
          Garden
        </div></div>
        <div>
          <div className="hotel__property-icon">
            <FaPaw size={32} />
          </div>
          <div className="hotel__property-text">
            <span>Pet allowed</span>
          </div>
        </div>
        <div>
          <div className="hotel__property-icon">
            <FaWifi size={32} />
          </div>
          <div className="hotel__property-text">
            Free WiFi
          </div>
        </div>
        <div>        
          <div className="hotel__property-icon">
            <FaTree size={32}/>
          </div>
          <div className="hotel__property-text">
          Garden
        </div></div>
        <div>
          <div className="hotel__property-icon">
            <FaPaw size={32} />
          </div>
          <div className="hotel__property-text">
            <span>Pet allowed</span>
          </div>
        </div>
        <div>
          <div className="hotel__property-icon">
            <FaWifi size={32} />
          </div>
          <div className="hotel__property-text">
            Free WiFi
          </div>
        </div>
      </div>
      <div className="hotel__details">
        <div className="hotel__desc">
          <h2 className="hotel__desc-title">Spend your weekend in a heart of London</h2>
          <p className="hotel__desc-text">
          Apartment LocTowers A3-6-3 is located in Locarno, 4.3 km from Golfclub
          Patriziale Ascona and 40.2 km from Lugano Station, in an area where cycling can be enjoyed. 
          Providing private parking, the apartment is a 8-minute walk from Piazza Grande Locarno.

          The apartment has 2 bedrooms, 2 bathrooms, a TV with cable channels, 
          a dining area, a fully equipped kitchen, and a balcony with mountain views.
          </p>
          <p><strong>Apartment LocTowers A3-6-3 has been welcoming Booking.com guests since Jun 20, 2022</strong></p>
          <p>This is our guests' favorite part of Locarno, according to independent reviews.</p>
        </div>
        <div className="hotel__price">
          {data.cheapestPrice} Fch/per night
          <p>Perfect for a 10 night</p>
          <p><FaParking size={12} />fsdfs sdfsfs</p>
          <button 
          className="btn hotel__btn"
          onClick={handleReserve}>Reserve</button>
          <button className="btn hotel__btn btn-revers">Save the property</button>
        </div>
      </div>
    </div>
    {openModal && (
      <Reserve setOpenModal={setOpenModal} hotelId={id}/>
    )}
  </div>
  ))

  }
  <MailList />
          <Footer />
  </> );
}
 
export default Hotel;