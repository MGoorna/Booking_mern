import FeatureProperties from '../../components/featureProperties/FeatureProperties';
import FeatureExplore from '../../components/featureExplore/FeatureExplore';

const Rental = () => {
  return ( 
    <>
      <h1>Car rentals for any kind of trip</h1>
      <h5>Compare deals from the biggest car rental companies</h5>
      <section>
        <input type="radio" id="same-location"/>
        <label htmlFor="">Return to same location</label>
        <input type="radio" id="different-location"/>
        <label htmlFor="">Return to different location</label>  
        <div>
          <input type="checkbox" id="driver-age"/>
          <label htmlFor="driver-age">Driver aged between 30 - 65 </label>
        </div>
      </section>
      <section>
        <h2>Popular destinations for car rentals</h2>
        <FeatureExplore />
      </section>
      <section>
        <h2>Popular rental car companies</h2>
        <ul>
          <li>
            <div className="">Europcar</div>
          </li>
          <li>
            <div className="">Alamo</div>
          </li>
          <li>
            <div className="">Sixt</div>
          </li>
          <li>
            <div className="">Avis</div>
          </li>
        </ul>
      </section>
      <section>
        <h2>Top worldwide locations for car rentals</h2>
        <FeatureProperties />
      </section>
    </>
   );
}
 
export default Rental;