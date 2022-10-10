import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="f__container">
        <ul className="f__list">
          <li>Countries</li>
          <li>Regions</li>
          <li>Cities</li>
          <li>Districts</li>
          <li>Airports</li>
          <li>Hotels</li>
        </ul>
        <ul className="f__list">
          <li>Homes</li>
          <li>Apartments </li>
          <li>Resorts </li>
          <li>Villas</li>
          <li>Hostels</li>
          <li>Guest houses</li>
        </ul>
        <ul className="f__list">
          <li>Unique places to stay </li>
          <li>Reviews</li>
          <li>Unpacked: Travel articles</li>
          <li>Travel communities </li>
          <li>Seasonal and holiday deals </li>
        </ul>
        <ul className="f__list">
          <li>Car rental </li>
          <li>Flight Finder</li>
          <li>Restaurant reservations</li>
          <li>Travel Agents </li>
        </ul>
        <ul className="f__list">
          <li>Curtomer Service</li>
          <li>Partner Help</li>
          <li>Careers</li>
          <li>Sustainability</li>
          <li>Press center</li>
          <li>Safety Resource Center</li>
          <li>Investor relations</li>
          <li>Terms & conditions</li>
        </ul>
      </nav>
      <div className="fText">Copyright © 2022 Booking.</div>
    </footer>
  );
};

export default Footer;