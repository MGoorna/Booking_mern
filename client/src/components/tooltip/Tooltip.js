import {useState} from 'react'
import ReactDom from 'react-dom'
import './tooltip.css'

const Tooltip = ({text, children}) => {
  const [position, setPosition]= useState(null)

  const handleMouseOver = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: bounds.x,
      y: bounds.y +bounds.height
    })
  }
  
  const handleMouseOut = () => {
    setPosition(null)
  }

  return ( 
  <div
    style={{ position: "relative", transition: 'all 0.5s ease' }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      {children}
      {position && 
        ReactDom.createPortal(
          <div 
            className="tooltip" 
            style={{
              display: `${position} ? block : none`,
              position: 'absolute',
              top: position.y,
              left: position.x,
              transform: 'translateX(-28%)',
            }}>           
            <div>{text}</div>
            <div className='arrow'></div>
          </div>,
          document.body
        )
      }
  </div>
  
   );
}
 
export default Tooltip;