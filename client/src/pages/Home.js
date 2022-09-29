import Featured from '../components/featured/Featured'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'

const Home = () => {
  return ( <>
  <Navbar />
  <Header />
  <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Featured />
      </header>
  </> );
}
 
export default Home;