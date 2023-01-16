import { useState } from 'react'
import { BsCheck, BsChevronDown, BsChevronUp } from "react-icons/bs"
import './dropdown.css'

const Dropdown = ({title, options}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  const [selection, setSelection] = useState([])

  
  const handleIsOpen  = () => setIsOpen(!isOpen)

  const handleSelect = (item) => {
    if(!selection.some(sel => sel.id === item.id)){
      setSelection([item])
    }else{
      let unSelected = selection
      unSelected = unSelected.filter(sel => sel.id !== item.id)
      setSelection([...unSelected])
    }
    console.log(selection)
    setIsSelected(!isSelected)
    setIsOpen(!isOpen)
  }

  const isItemInSelection =(item) => {
    if(selection.some(sel => sel.id === item.id)) {return true}
    return false
  }

  return (
    <div 
      className="dropdown_box" 
      tabIndex={0}
      onBlur={()=>setIsOpen(false)}
      >
      <div className='dropdown_box__title'>
        <h4 onClick={handleIsOpen}>
          {(selection.length && selection[0].name) || title} 
          {isOpen ? <BsChevronUp /> : <BsChevronDown /> }
        </h4>
      </div>
      <ul className={`${isOpen ? 'open' : ''}`}>
        {options && options.map(opt=>(
          <li 
            key={opt.id}
            onClick={()=>handleSelect(opt)}
          >
            <span>{opt.name}</span>
            <span>{isItemInSelection(opt) && <BsCheck/>} </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
