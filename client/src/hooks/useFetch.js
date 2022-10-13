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
        const controller = new AbortController();

        const resp = await axios.get(url, {
          signal: controller.signal
        }).then(function(response) {
          setData(response.data)
       });
        //setData(resp.data)
        controller.abort()
      }catch(err){
        setError(err)
      }
      setLoading(false) 
    }
    fetchData()
  },[url])

  const reFetch= async() => {
    setLoading(true)
    try{
      const resp = await axios.get(url)
      setData(resp.data)
    }catch(err){
      setError(err)
    }
    setLoading(false) 
  }

  return { data, loading, error, reFetch }
}
export default useFetch