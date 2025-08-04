import React from 'react';
import './App.css';
import ReviewItems from './Review';
import PropTypes from 'prop-types';

function App() {

  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="yes" name="Y2K" category="Nail Art" />
      <ReviewItems />
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="nailart1.png" alt="Nail Art Y2K" />
    </div>
  );
}


function CheckDiscount(props) {
  const { isDiscount, discount } = props;
  if (isDiscount === "yes") {
    return (
      <p>Diskon {discount}% off</p>
    );
  }
  else if (isDiscount === "comming") {
    return (
      <p>Segera</p>
    );
  }
  else {
    return (
      <p>Tidak ada diskon</p>
    );
  }
}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props;
  const benefits = ["Tahan Air", "Tidak mudah lepas", "Tidak mudah terkelupas"];
  const listbenefits = benefits.map((itembenefits) =>
    <li key={itembenefits}>{itembenefits}</li>
  );
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 150.000,00</p>
        <CheckDiscount isDiscount={isDiscount} discount={50} />
        <p className="Info">
          Step into the nostalgic charm of the early 2000s with our Y2K-inspired nail design.
          These nails feature bold, futuristic aesthetics combined with playful
        </p>
        <ul>
          {listbenefits}
        </ul>
        <button className="Addcart"onClick={() => TambahCart(name)}>Beli Sekarang</button>
      </div>
    </div>
  );
}

function TambahCart(e) {
  return console.log("Membeli" + e);
}

CheckDiscount.propTypes = {
  discount: PropTypes.number.isRequired
};

export default App;