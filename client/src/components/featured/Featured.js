import useFetch from '../../hooks/useFetch'

const Featured = () => {
  const { data, loading, error } = useFetch('http://localhost:3700/api/hotel/findByCity?cities=london,paris,barcelona')
  console.log(data, loading, error)
  return( <>
  {loading ? "Loading, please wait" : <div>Data:{data[2]}</div>}
  </>)
}

export default Featured