import useElementSize from '../../hooks/useElementSize';
import useHoover from '../../hooks/useHoover';
import useToggle from '../../hooks/useToggle';

const Flights = () => {
  const [value, toggleValue] = useToggle(false)
  const [refelem, isHover] = useHoover()
  const [reff, size] = useElementSize();
  
  return ( <>
    <button onClick={toggleValue}>Toggle</button>
    <button onClick={()=>{toggleValue(false)}}>False</button>
    <button onClick={()=>{toggleValue(true)}}>True</button>
    <div>Value: {value.toString()}</div>
  
    


    {/* <div ref={reff}>Element size: {size.join(',')}</div> */}
    <div ref={reff}>Element size: {size.height} {size.width}</div>

    <div ref={refelem}>Hovered element. Is hover: {isHover?.toString()} </div>

  </> );
}
 
export default Flights;