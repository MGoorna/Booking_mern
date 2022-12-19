import {useState} from 'react'
import ReactDom from 'react-dom'
import './tooltip.css'

const Tooltip = ({text, children}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition]= useState(null)

  const handleMouseOver = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect()
    setIsVisible(true)
    setPosition({
      x: bounds.x,
      y: bounds.y +bounds.height
    })
  
  }
  const handleMouseOut = () => {setIsVisible(false)}


  return ReactDom.createPortal ( 
  <>{position && 
    ReactDom.createPortal(
      <div 
        className="tooltip" 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          display: `${isVisible} ? block : none`,
          top: position.y,
          left: position.x
        }}>
        {children}
        {text}
      </div>,
      document.body)
  }
  </>
  
   );
}
 
export default Tooltip;