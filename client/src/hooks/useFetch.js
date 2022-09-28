import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [error, setError]  = useState(false)
  const [loading, setLoading]  = useState(false)

  useEffect(()=>{
    const fetchData = async() => {
      setLoading(true)
      try{
        const resp = await axios.get(url)
        setData(resp.data)
      }catch(err){
        setError(err)
      }
      setLoading(false) 
    }
    fetchData()
  },[url])

  return { data, loading, error }
}
export default useFetch