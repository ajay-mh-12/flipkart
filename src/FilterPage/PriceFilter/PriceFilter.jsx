import { React } from "react";
import style from "./PriceFilter.module.css";
import { useState, useContext } from "react";
import { priceFiltercontext } from "../../App";
function PriceFilter() {
  const { price, setPrice } = useContext(priceFiltercontext);
  function handleClick(e) {
    if (e.target.checked) {
      setPrice(Number(e.target.value));
    }
  }
  return (
    <>
      <div className={style.priceMain}>
        <div className={style.priceTags}>
          <input
            type="checkbox"
            id="price"
            value={600}
            onChange={handleClick}
          />
          <label htmlFor="price">Rs.600 and below</label>
        </div>
        <div className={style.priceTags}>
          <input
            type="checkbox"
            id="priceOne"
            value={1000}
            onChange={handleClick}
          />
          <label htmlFor="priceOne">Rs.601 to Rs.1000</label>
        </div>
        <div className={style.priceTags}>
          <input
            type="checkbox"
            id="priceTwo"
            value={1500}
            onChange={handleClick}
          />
          <label htmlFor="priceTwo">Rs.1001 to Rs.1500</label>
        </div>
        <div className={style.priceTags}>
          <input
            type="checkbox"
            id="priceThree"
            value={2000}
            onChange={handleClick}
          />
          <label htmlFor="priceThree">Rs.1501 to Rs.2000</label>
        </div>
        <div className={style.priceTags}>
          <input
            type="checkbox"
            id="priceFour"
            value={2600}
            onChange={handleClick}
          />
          <label htmlFor="priceFour">Rs.2001 to Rs.2600</label>
        </div>
        <div className={style.priceTags}>
          <input
            type="checkbox"
            id="priceFive"
            value={4000}
            onChange={handleClick}
          />
          <label htmlFor="priceFive">Rs.2601 to Rs.4000</label>
        </div>
        <div className={style.priceTags}>
          <input
            type="checkbox"
            id="priceSix"
            value={7000}
            onChange={handleClick}
          />
          <label htmlFor="priceSix">Rs.4001 to Rs.7000</label>
        </div>
        <div className={style.priceTags}>
          <input
            type="checkbox"
            id="priceSeven"
            value={10000}
            onChange={handleClick}
          />
          <label htmlFor="priceSeven">Rs.7001 to Rs.10000</label>
        </div>
        <div className={style.priceTags}>
          <input
            type="checkbox"
            id="priceEigth"
            value={10001}
            onChange={handleClick}
          />
          <label htmlFor="priceEight">Rs.10001 and above</label>
        </div>
      </div>
    </>
  );
}

export default PriceFilter;
