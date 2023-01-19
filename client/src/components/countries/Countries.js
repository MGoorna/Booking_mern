import axios from 'axios'
import useSWR from 'swr'

/* const countriesApi = axios.create({
  baseURL: 'https://restcountries.com/v3.1/all' 
})
const getCountries = async (url) => {
  const res = await countriesApi.get()
  return res.data
} */

const getCountries = url => axios.get(url).then(res=>res.data)

const Countries = () => {

  const { data, error, isLoading } = useSWR('https://restcountries.com/v3.1/all', getCountries, {
    revalidateOnFocus: false
  })

  console.log(data?.[0])

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  
  return (<div>
    <ul>
    {data.map(i=>(
      <li key={i.ccn3+i.area}>
        <img src={i.flags.png} alt="" />
      </li> 
    ))}    
    </ul>

  </div>
  )

}

export default Countries