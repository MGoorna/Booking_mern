import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import Reserve from "../../components/reserve/Reserve";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";
import { FaCity, FaTree, FaPaw, FaWifi, FaSwimmingPool, FaParking } from "react-icons/fa";
import { GiWashingMachine, GiMountaintop } from "react-icons/gi";
import { BsFillHouseFill } from "react-icons/bs";
import { CgSwiss } from "react-icons/cg";
import "./hotel.css";


const Hotel = () => {
  const user = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2];
  const [openModal, setOpenModal] = useState(false);
  const { data, loading, error } = useFetch(`/hotel/find/${id}`)


  const handleReserve = () => {    
    if(user){
      setOpenModal(true) 
    }else{
      navigate('/login')
    }
  }



  return ( <>
  <Navbar />
  <Header type='list'/>
  {loading ? "Loading": 
    error ? "error"
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
        <div>
          <div>
          {data.photos && (
            <div className="hotel__gallery">
              <div className="hotel__gallery-item">
                <img className="hotel__gallery-img" src={data.photos[0]} alt={data.name} />  
                <div className="hotel__gallery-info">
                  <div className="hotel__rate">
                    <span>Wonderful</span>
                    <span>22 reviews</span>                   
                  </div>
                  <div className="hotel__gallery-user-desc-rate">
                    <div>The unit was great - clean and comfortable. Plenty of towels. Coffee- there is a keurig. Full fridge. Location was great too. Parking right across street. Nice pools. Dionne…</div>
                    <div>Noah Müller <CgSwiss size={16} color={'red'} /> Switzerland</div>
                  </div>
                </div>             
              </div>
              <div className="hotel__gallery-item">
                <img className="hotel__gallery-img" src={data.photos[1]} alt={data.name} />
              </div>
              <div className="hotel__gallery-item">
                <img className="hotel__gallery-img" src={data.photos[2]} alt={data.name} />
              </div>
            </div>
          )}
          </div>
          <div className="hotel__photo-grid-thumbs">
          {data && data.photos && data.photos.map((img, index) => {
            if(index > 2 && index < 8){ 
              return <img className="hotel__img" src={img} alt={data.name} key={img}/>
            }     
          })} 
          </div>
        </div>
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
            <BsFillHouseFill size={32}/>
          </div>
          <div className="hotel__property-text">
          93 m2 size
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
            <GiWashingMachine size={32} />
          </div>
          <div className="hotel__property-text">
            <span>Washing machine</span>
          </div>
        </div>
        <div>
          <div className="hotel__property-icon">
            <FaSwimmingPool size={32} />
          </div>
          <div className="hotel__property-text">
            Swimming pool
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
          <h3>Property Highlights</h3>
          <div className="ph-section">
            <h4>Perfect for a 5-night stay!</h4>
            {data.cheapestPrice} Fch/per night
            <span><FaParking size={12} color={'green'}/> Free parking</span>
          </div>
          <div className="ph-section">
            <h4>Breakfast Info</h4> 
            <span>Continental, Buffet</span>
          </div>
          <div className="ph-section">
            <h4>Rooms with:</h4>
            <ul>
              <li><FaCity size={12} color={'green'}/> City view</li>
              <li><GiMountaintop size={12} color={'green'}/> Mountain view</li>
            </ul>
          </div>
          <button 
          className="btn hotel__btn pulse-animation"
          onClick={handleReserve}>Reserve</button>
          <button className="btn hotel__btn btn-revers">Save the property</button>
        </div>
      </div>
    </div>
    {openModal && (
      <Reserve hotelId={id} /*closeModal={closeModal}*/ setOpenModal={setOpenModal}/>
    )}
  </div>
  ))
  }
  <MailList />
  <Footer />
  </> );
}
 
export default Hotel;