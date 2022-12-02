import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import useFetch from '../../hooks/useFetch'
import { SearchContext } from '../../context/SearchContext'
import './reserve.css'

const Reserve = ({ setOpenModal, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([])
  const {data, error, loading} = useFetch(`/hotel/room/${hotelId}`)
  const { dates } = useContext(SearchContext)
  const navigate = useNavigate()

  const getRangedDates = (startDate, endDate) => {
    const start = new Date(startDate)
    const end = new Date(endDate)

    const date = new Date(start.getTime())
    const listDate = []

    while(date<=end){
      listDate.push(new Date(date))
      date.setDate(date.getDate()+1)
    }
    return listDate
  }

  const allDates = getRangedDates(dates[0].startDate, dates[0].endDate)

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some(date => {
      allDates.includes(new Date(date).getTime())
    })
    return !isFound
  }

  console.log(dates, selectedRooms)

  const handleClose = () => {
    setOpenModal(false)
  }
  const handleCheck = (e) => {
    const checked = e.target.checked;
    const val = e.target.value;
    setSelectedRooms(checked 
      ? [...selectedRooms, val] 
      : selectedRooms.filter(item => item !== val))
    console.log(e, checked, 'val', val, 'selectedRooms', selectedRooms)
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
    setOpenModal(false)
    navigate('/')

  }
  return ( <>
  <div className="reserve">
    <div className="reserve__container">
      <div className="reserve__close" >
        <div className="reserve__close-btn" onClick={handleClose}></div>
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
                  <label htmlFor={no.number}><small>{no.number}</small></label>
                  <input 
                    type="checkbox" 
                    id={no.number} 
                    className='reverse__room-check'
                    value={no._id} 
                    onChange={handleCheck}
                    disabled={isAvailable(no.number)}
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
  </> );
}
 
export default Reserve;