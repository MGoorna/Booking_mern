import { useState } from 'react'

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue)

  function toggleValue(value){
    setValue(prev => typeof value === 'boolean'? value: !prev)
  }
  
  return [ value, toggleValue ]
}
 
export default useToggle;