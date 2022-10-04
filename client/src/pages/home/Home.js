import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import FeatureProperties from '../../components/featureProperties/FeatureProperties';
import './home.css';

const Home = () => {
  return ( <>
    <Navbar />
    <Header />   
    <div className="home">
      <div className="h__container">

        <h2 className="h__title">Homes guests love</h2>
        <Featured />
        

        <h2 className="h__title">Browse by property type</h2>
        <FeatureProperties />

      </div>
    </div>


    <div className="App-header"></div>
  </> );
}
 
export default Home;