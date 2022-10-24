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
  return ( <>
  <div className="reserve">
    <div className="reserve__container">
      <div className="reserve__close" >
        <div className="reserve__close-btn" onClick={handleClose}></div>
      </div>
      <label htmlFor="">
        Select your room
        <ul>
          {data && data.map(room => (
            <li className="reverse__room" key={room._id}>
              <label htmlFor="">
                <span className="reverse__title">{room.title} </span>
                <span className="reserve__desc">{room.desc} </span>
                <span><small>Max people: <b>{room.maxPeople}</b> </small></span>
                <span>Price: {room.price}$ </span>
                
                {room.roomNumbers.map(no=>(
                  <div>
                    <label htmlFor={no.number}>{no.number}
                      <input type="checkbox" id={no.number} value={no._id} onChange={handleCheck}/>
                    </label>
                  </div>
                ))}
                

                            
              </label> 
            </li>
          ))}

        </ul>
      </label>
    </div>
  </div>
  </> );
}
 
export default Reserve;