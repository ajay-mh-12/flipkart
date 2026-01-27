import React from "react";
import ProductDetails from "./ProductDetailsAddSection/ProductDetails";
import ProductDetailsCardHeader from "./ProductDetailsCardHeader/ProductDetailsCardHeader";
import ProductDetailsCard from "./ProductDetailsCard/ProductDetailsCard";
import style from "./ProductDetails.module.css"
import DelivaryDetails from "./DelivaryDetails/DelivaryDetails";

function ProductDetailsMain() {
    const image1 = "https://rukminim1.flixcart.com/image/80/80/xif0q/headphone/h/z/t/-original-imahhgt7hph6wdas.jpeg?q=60"
    const image2 = "https://rukminim1.flixcart.com/image/80/80/xif0q/headphone/4/a/0/tw301-blogger-upto-40h-playtime-enc-dual-pairing-fast-charging-original-imahh6g7bq8vq6ww.jpeg?q=60"
  return (
    <>
        <ProductDetailsCardHeader />
        <div className={style.ProductDetailsMainPage}>
        <ProductDetails image={image1} />
        <ProductDetails image={image2} />
      </div>
      <ProductDetailsCard/>
      <DelivaryDetails/>
    </>
  );
}
export default ProductDetailsMain;

