import {  useEffect } from "react"


const useClickOutside = (ref, handler) => {
  
  useEffect(()=>{

    const handleClick = (e) => {
      const el = ref.current
  
      if(!el && el.contains(e.target)) return
      
      handler(e)
    }

    const closeOnEscapeKey = e => e.key === "Escape" ? handler(e) : null;

    document.addEventListener('mousedown', handleClick, { capture: true })
    document.addEventListener('touchstart', closeOnEscapeKey)
    
    return () => {
      document.removeEventListener('mousedown', handleClick, { capture: true })
      document.removeEventListener('mousedown', closeOnEscapeKey)
    }
  },[ref, handler])

  return [ref, handler]
}

export default useClickOutside