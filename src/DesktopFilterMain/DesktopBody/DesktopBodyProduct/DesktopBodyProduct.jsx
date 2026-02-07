import { React } from "react";
import style from "./DesktopBodyProduct.module.css";
import HeaderProductsCard from "../../../components/HeaderProductsCard/HeaderProductsCard";
import { useState, useContext, useEffect } from "react";
import { sortValueContext } from "../../../App";
function DesktopBodyProduct() {
  const { getvalue, setGetvalue } = useContext(sortValueContext);
  const[color,setColor] = useState(false)
  function handleClick(e) {
    setGetvalue(e.currentTarget.dataset.sortData); 
    setColor(!color)
  }
  return (
    <>
      <div className={style.sortElement}>
        <div className={style.sort}>
          <p>Sort By</p>
        </div>
        <div
          className={`${style.sorting} ${getvalue === "popularity" ? style.color : ""}`}
          data-sort-data="popularity"
          onClick={handleClick}
        >
          <p>Popularity</p>
        </div>
        <div
          className={`${style.sorting} ${getvalue === "lowToHigh" ? style.color : ""}`}
          data-sort-data="lowToHigh"
          onClick={handleClick}
        >
          <p>Price -- Low to High</p>
        </div>
        <div
          className={`${style.sorting} ${getvalue === "highToLow" ? style.color : ""}`}
          data-sort-data="highToLow"
          onClick={handleClick}
        >
          <p>Price -- High to Low</p>
        </div>
        <div
          className={`${style.sorting} ${getvalue === "newest" ? style.color : ""}`}
          data-sort-data="newest"
          onClick={handleClick}
        >
          <p>Newest First</p>
        </div>
        <div
          className={style.sorting}
          data-sort-data="newest"
          onClick={handleClick}
        >
          <p>Discount</p>
        </div>
      </div>
    </>
  );
}

export default DesktopBodyProduct;
