import './featured.css'

const Featured = () => {
  return ( <>
    <div className="list">
      <div className="l__container">
        <div>
          <img 
            className="l__img"
            src="https://t-cf.bstatic.com/xdata/images/city/540x270/711902.webp?k=5f8aedba92953396850515d67e5c7ddadc822656e8fa85a00a6dcc21e820e32d&o="
            alt="hotels" />
          <div className="l__image-content">
            <h3 className="l__title">Niechorze</h3>
          </div>
        </div>
        <div>
          <img 
            className="l__img"
            src="https://t-cf.bstatic.com/xdata/images/city/540x270/825330.webp?k=21645f725bc2291964570981a121316562ffaa7f6e2fd391aba6ce43e63642d2&o="
            alt="hotels" />
          <div className="l__image-content">
            <h3 className="l__title">Międzywodzie</h3>
          </div>
        </div>
        <div>
          <img 
            className="l__img"
            src="https://t-cf.bstatic.com/xdata/images/city/540x270/652959.webp?k=2b617c0da4890ea65e0a05f168000ffe6859bd7ca23c9ac5ecfec471571541b9&o="
            alt="hotels" />
          <div className="l__image-content">
            <h3 className="l__title">Kołobrzeg</h3>
          </div>
        </div>
      </div>
    </div>
  </> );
}

export default Featured