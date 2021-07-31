import React from "react";
import ProductsList from "./ProductsList";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = ({ cart, products, onAddToCart, loading }) => {
  return (
    <div>
      <Navbar cart={cart} />
      <Carousel />
      {loading ? (
        <p class="loading">Loading...</p>
      ) : (
        <>
          <ProductsList products={products} onAddToCart={onAddToCart} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Home;
