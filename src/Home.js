import React from "react";
import Product from "./Product";
import "./Home.css";

function Home(props) {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="./images/banner.jpg"
          // src="https://images-eu.ssl-images-amazon.
          // com/images/G/02/digital/video/march2016/
          // Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE_XSite_1500x
          // 600_PV_en-GB._C8428684220_-jpg"
          // eslint-disable-next-line
          alt="banner"
        />
        <div className="home__row">
          <Product
            id="100"
            title="Delicious and People's Favorites Dish"
            price={29.99}
            image="./images/product-1.jpg"
            rating={5}
          />
          <Product
            id="101"
            title="Delicious and People's Favorites Dish"
            price={10.5}
            image="./images/product-2.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="102"
            title="Delicious and People's Favorites Dish"
            price={30.5}
            image="./images/product-3.jpg"
            rating={3.5}
          />
          <Product
            id="103"
            title="Grab your favorite organic and fresh banana from the garden"
            price={5.5}
            image="./images/product-7.jpg"
            rating={3}
          />
          <Product
            id="104"
            title="An apple a day keeps the doctor away"
            price={15.5}
            image="./images/product-5.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="105"
            title="Delicious and People's Favorites Dish"
            price={10.8}
            image="./images/product-6.jpg"
            rating={4.5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
