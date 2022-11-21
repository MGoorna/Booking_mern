import { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import './reserve.css'

const Reserve = ({ setOpenModal, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState('')
  const {data, error, loading} = useFetch(`/hotel/room/${hotelId}`)
  console.log(data)

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
  const handleReserve = () => {

  }
  return ( <>
  <div className="reserve">
    <div className="reserve__container">
      <div className="reserve__close" >
        <div className="reserve__close-btn" onClick={handleClose}></div>
      </div>
      <label htmlFor="">
        <h3>Select your room</h3>
        <ul>
          {data && data.map(room => (
            <li className="reverse__room" key={room._id}>
            <h4 className="reverse__title">{room.title} </h4>
              <label className="reverse__room-container">
                <div>                 
                  <span className="reserve__desc">{room.desc}, </span>
                  <span>Max people: <b>{room.maxPeople}, </b></span>
                  <span>Price: {room.price}$ </span>
                </div>
                <ul>
                {room.roomNumbers.map(no=>(
                  <li>
                    <input 
                        type="checkbox" 
                        classname="fullwidth"
                        id={no.number} 
                        value={no._id} 
                        onChange={handleCheck}
                        />
                    <label htmlFor={no.number}>{no.number}</label>
                  </li>
                ))} 
                </ul>            
              </label> 
            </li>
          ))}
        </ul>
      </label>
      <button className="btn fullwidth" onClick={handleReserve}>Reserve Now!</button>
    </div>
  </div>
  </> );
}
 
export default Reserve;