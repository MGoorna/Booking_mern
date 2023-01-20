import axios from 'axios'
import useSWR from 'swr'
import { useRef, useEffect } from "react";
import Modal from "../modal/Modal";
import './countries.css'

const getCountries = url => axios.get(url).then(res=>res.data)

const Countries = ({ setOpenModal }) => {

  const { data, error, isLoading } = useSWR('https://restcountries.com/v3.1/all', getCountries, {
    revalidateOnFocus: false
  })

  let modalContainerRef = useRef();

  const closeModal =() => {
    setOpenModal(false)
  }

  const handleClose = (e) => {
    const { current: modalDom } = modalContainerRef;
    if(
      modalDom &&
      !modalDom.contains(e.target)){
        closeModal()
    }   
  }

  useEffect(()=>{ 
    document.addEventListener('click', handleClose, { capture: true })
    return () => {
      document.removeEventListener('click', handleClose, { capture: true })    
    }
  },[])

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <Modal  title="Select your language" closeModal={closeModal}>
      <div className='countries__container'>
        <h3>Suggested for you</h3>
        <ul className='countries__list'>
          <li key={data[0].ccn3+data[0].area}>
            <a href="/" alt="">
              <img src={data[0].flags.png} alt="" />
              <h4>{Object.values(data[0].languages)[0]}</h4>
            </a>
          </li>
          <li key={data[171].ccn3+data[171].area}>
            <a href="/" alt="">
              <img src={data[171].flags.png} alt="" />
              <h4>{Object.values(data[171].languages)[0]}</h4>
            </a>
          </li>
          <li key={data[26].ccn3+data[26].area}>
            <a href="/" alt="">
              <img src={data[26].flags.png} alt="" />
              <h4>{Object.values(data[26].languages)[1]}</h4>
            </a>
          </li>
          <li key={data[26].ccn3+data[0].area}>
            <a href="/" alt="">
              <img src={data[26].flags.png} alt="" />
              <h4>{Object.values(data[26].languages)[2]}</h4>
            </a>
          </li>
        </ul>
        <h3>All languages</h3>
        <ul className='countries__list'>
        {data.slice(0,25).map(i=>(
          <li key={i.ccn3+i.area}>
            <a href="/" alt={i.name.common}>
              <img src={i.flags.png} alt="" />
              <h4>{i?.languages && Object.values(i?.languages)[0]}</h4>       
            </a>
          </li> 
        ))}    
        </ul>

      </div>
    </Modal>
  )
}

export default Countries