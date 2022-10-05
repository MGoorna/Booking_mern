import './mailList.css';

const MailList = () => {
  return ( <>
    <div className="mail">
      <div className="m__container">
        <h2 className="m__title">Save time, save money!</h2>
        <h3 className="m__desc">Sign up and we'ee send the best deals to you </h3>
        <div className="m__input-container">
          <input type="text" placeholder="Your Email"/>
          <button className="btn m__btn">Subscribe</button>
        </div>
      </div>
    </div>
  </> );
}
 
export default MailList;