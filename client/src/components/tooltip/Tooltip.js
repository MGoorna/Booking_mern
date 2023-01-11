import ReactDom from 'react-dom'
import useElementSize from '../../hooks/useElementSize'
import './tooltip.css'

const Tooltip = ({text, children}) => {

  const [ref, position] = useElementSize(null)

  return ( 
  <div
    style={{ position: "relative", transition: 'all 0.5s ease' }}
      ref={ref}
      >
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