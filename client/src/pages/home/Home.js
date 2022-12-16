import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import FeatureProperties from '../../components/featureProperties/FeatureProperties';
import FeatureExplore from '../../components/featureExplore/FeatureExplore';
import './home.css';

const Home = () => {
  return ( <>
    <Header />   
    <main className="home">
      <div className="h__container">
        <h2 className="h__title">Homes guests love</h2>
        <Featured />      
        <h2 className="h__title">Explore Switzerland</h2>
        <p className="h__title">These popular destinations have a lot to offer</p>
        <FeatureExplore />
        <h2 className="h__title">Browse by property type</h2>
        <FeatureProperties />
      </div>
    </main>
  </> );
}
 
export default Home;