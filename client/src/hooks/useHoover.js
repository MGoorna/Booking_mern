import { useEffect } from "react";
import { useRef, useState } from "react";

const useHoover = () => {
  const refDefault = useRef(null);
  const [isHover, setIsHover] = useState()

  const handleMouseOver = () => setIsHover(true)
  const handleMouseOut = () => setIsHover(false)

  useEffect(()=>{
    const node = refDefault.current
    if(node){
      node.addEventListener('mouseover', handleMouseOver)
      node.addEventListener('mouseout', handleMouseOut) 
    }
    return () => {
      node.removeEventListener('mouseover', handleMouseOver)
      node.removeEventListener('mouseout', handleMouseOut) 
    }

  },[])


  return [refDefault, isHover] ;
}
 
export default useHoover;