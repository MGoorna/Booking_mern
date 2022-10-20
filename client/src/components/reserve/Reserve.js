import useFetch from '../../hooks/useFetch'
import './reserve.css'

const Reserve = ({ setOpenModal, hotelId }) => {
  
  const {data, error, loading} = useFetch(`/hotel/room/${hotelId}`)
  console.log(data)

  const handleClose = () => {
    setOpenModal(false)
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
                <span className="reverse__title">{room.title}</span>
                <span className="reserve__desc">King size bed,bathroom incl., tarrace</span>
                <span><small>Max people: 2</small></span>
                100
                <label htmlFor="201">201
                <input type="checkbox" id="201"/>
                </label>            
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