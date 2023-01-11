import { useEffect, useRef, useState } from "react";

const useElementSize = () => {
  const [size, setSize] = useState({}) 
  const [position, setPosition] = useState(null)
  const ref = useRef()

  const handleSize = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setSize(rect)
    setPosition({
      x: rect.x,
      y: rect.y + rect.height
    }) 
  }

  const handleMouseOut = () => setPosition(null)
  

  useEffect(()=>{
    const node = ref.current
      node.addEventListener('mouseover', handleSize)
      node.addEventListener('mouseout', handleMouseOut)
    return()=>{
      node.removeEventListener('hover', handleSize)
      node.removeEventListener('mouseout', handleMouseOut)
    }
  },[])
  return [ref, position, size]
}
 
export default useElementSize;