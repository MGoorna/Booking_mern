import './featureProperties.css';

const FeatureProperties = () => {
  return ( <>
    <div className="properties-list">
      <div className="pl__container">
        <div>
          <img 
            className="pl__img"
            src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
            alt="hotels" />
          <div className="pl__image-content">
            <h3 className="pl__title">Hotels</h3>
            <div className="pl__subtitle">928,250 hotels</div>
          </div>
        </div>
        <div>
          <img 
            className="pl__img"
            src="https://r-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
            alt="hotels" />
          <div className="pl__image-content">
            <h3 className="pl__title">Apartments</h3>
            <div className="pl__subtitle">928,250 apartmments</div>
          </div>
        </div>
        <div>
          <img 
            className="pl__img"
            src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
            alt="hotels" />
          <div className="pl__image-content">
            <h3 className="pl__title">Resorts</h3>
            <div className="pl__subtitle">928,250 resorts</div>
          </div>
        </div>
        <div>
          <img 
            className="pl__img"
            src="https://r-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
            alt="hotels" />
          <div className="pl__image-content">
            <h3 className="pl__title">Villas</h3>
            <div className="pl__subtitle">928,250 villas</div>
          </div>
        </div>
      </div>
    </div>
  </> );
}
 
export default FeatureProperties;