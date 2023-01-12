import { parseWithOptions } from 'date-fns/fp'
import React from 'react'
import { useState } from 'react'

const Select = ({options}) => {
  const [option] = useState()
  return (
    <div>
      <select name="" id="">
      {options.map(option => (
          <option value={option.value}>{option.desc}</option>
        ))}
      </select>
      <ul>
        {options.map(option => (
          <li value={option.value}>{option.desc}</li>
        ))}
      </ul>
    </div>
  )
}

export default Select