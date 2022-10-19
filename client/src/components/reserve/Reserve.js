import useFetch from '../../hooks/useFetch'
import './reserve.css'

const Reserve = ({ setOpenModal }) => {
  const roomId = '6345596f97dcfb5ff984063b'
  const {rooms, error, loading} = useFetch(`room/${roomId}`)

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
          {rooms && rooms.map(room => {
            <li className="reverse__room">
            <label htmlFor="201">
              <span className="reverse__title">{room.title}</span>
              <span className="reserve__desc">King size bed,bathroom incl., tarrace</span>
              <span><small>Max people: 2</small></span>
              100
              <label htmlFor="">201
              <input type="checkbox" id="201"/>
              </label>            
            </label> 
          </li>
          })}

        </ul>
      </label>
    </div>
  </div>
  </> );
}
 
export default Reserve;