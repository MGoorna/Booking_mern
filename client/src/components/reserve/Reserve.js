import { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import useFetch from '../../hooks/useFetch'
import { SearchContext } from '../../context/SearchContext'
import './reserve.css'


const Reserve = ({ hotelId, closeModal }) => {
  const [selectedRooms, setSelectedRooms] = useState([])
  const {data, error, loading} = useFetch(`/hotel/room/${hotelId}`)
  const { dates } = useContext(SearchContext)
  const navigate = useNavigate()
  //let modalCloseRef = useRef(null);
  let modalContainerRef = useRef();
  

  const handleClose = (e) => {
    if(
      modalContainerRef.current &&
      !modalContainerRef.current.contains(e.target)){
      closeModal()
    }   
  }
  useEffect(()=>{ 

    const { current: modalDom } = modalContainerRef;

    //modalDom.addEventListener('mousedown', handleClose, { capture: true })
    document.addEventListener('click', handleClose, { capture: true })
    //animacja 
    /*const span = modalCloseRef.current
    const before = span.querySelector(".reserve__before")
    console.log('before', before)
    before.classList.add('active')*/

    return () => {
      document.removeEventListener('click', handleClose, { capture: true })
      
    }
  },[])



  const getRangedDates = (startDate, endDate) => {
    const start = new Date(startDate)
    const end = new Date(endDate)

    const date = new Date(start.getTime())
    const listDate = []

    while(date<=end){
      listDate.push(new Date(date).getTime())
      date.setDate(date.getDate()+1)
    }
    return listDate
  }
  
  const allDates = getRangedDates(dates[0].startDate, dates[0].endDate )

  const isAvailable = (roomNumber) => {  
    const isFound = roomNumber.unavailableDates.some(date => 
      allDates.includes(new Date(date).getTime())
    )
    return !isFound
  }

  const handleCheck = (e) => {
    const checked = e.target.checked;
    const val = e.target.value;
    setSelectedRooms(
      checked 
      ? [...selectedRooms, val] 
      : selectedRooms.filter(item => item !== val))
  }

  const handleReserve = async () => {
    await Promise.all(
      selectedRooms.map(roomId => {
        const resp = axios.put(`/room/availability/${roomId}`,{
          dates: allDates
        })
        return resp.data
      })
    )
    closeModal()
    navigate('/')
  }
  
  if(loading) return (<div>Loading...</div>)
  if(error) return (<div>Something went wrong...</div>)
  return ( 
  <div className="reserve">
    <div className="reserve__container" ref={modalContainerRef} id="modal">
      <div className="reserve__close" >
        <div 
        className="reserve__close-btn" 
        onClick={closeModal}
        //ref={(node3) => (modalCloseRef = node3)}
        >
        <span className="reserve__before"></span>
        <span className="reserve__after active"></span>
        </div>
      </div>
      <label htmlFor="">
        <h3>Select your rooms:</h3>
        <ul>
          {data && data.map(room => (
            <li className="reverse__room" key={room._id}>
              <h4 className="reverse__title">{room.title} </h4>
              <label className="reverse__room-container">
                <div>                 
                  <span className="reserve__desc">{room.desc}, </span>           
                  <span>Price: {room.price}$ </span>
                  <div><small>Max people: <b>{room.maxPeople}</b></small></div>
                </div>
                <ul>
                {room.roomNumbers.map(no=>(
                  <li key={no.number}>
                  <label htmlFor={no._id}><small>{no.number}</small></label>
                  <input 
                    type="checkbox" 
                    id={no._id} 
                    className='reverse__room-check'
                    value={no._id} 
                    onChange={handleCheck}
                    disabled={!isAvailable(no)}
                    />  
                  </li>
                ))} 
                </ul>            
              </label> 
            </li>
          ))}
        </ul>
      </label>
      <button 
        className="btn fullwidth" 
        onClick={handleReserve}
        disabled={!selectedRooms.length}
        >
        Reserve Now!
      </button>
    </div>
  </div>
 );
}
 
export default Reserve;