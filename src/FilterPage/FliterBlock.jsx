import { React, useState } from "react";
import Arrow from "./FilterImage/leftarrow.svg";
import style from "./FilterPage.module.css";
import BrandFilter from "./BrandFilter/BrandFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import Connectivity from "./Connectivity/Connectivity";
import ColorFilter from "./ColorFilter/ColorFilter";
import Discount from "./Discount/Discount";
import RatingFilter from "./RatingFilter/RatingFilter";
import Features from "./Features/Features";
import Type from "./Type/Type";
import { useNavigate } from "react-router-dom";
function FliterBlock() {
  const navigte = useNavigate()
const [selectValue,setSelectValue] = useState("Brand")
function getBrand(){
  setSelectValue("Brand")
}
function getFabric(){
  setSelectValue("fabric")
}
function getFit(){
  setSelectValue("Fit")
}
function getType(){
  setSelectValue("Type")
}
function getSize(){
  setSelectValue("Size")
}
function getPrice(){
  setSelectValue("Price")
}
function getCustomer(){
  setSelectValue("Customer Ratings")
}
function getOccasion(){
  setSelectValue("Occasion")
}
function getFAssured(){
  setSelectValue("F-Assured")
}
function getDiscount(){
  setSelectValue("Discount")
}
function getNewArrivals(){
  setSelectValue("New Arrivals")
}
function getOffer(){
  setSelectValue("Offers")
}
function getAvailability(){
  setSelectValue("Availability")
}
function getCategory(){
  setSelectValue("Category")
}
  return (
    <>
      <div className={style.FilterMain}>
        <div className={style.FilterHeader}>
          <div className={style.Arrow} onClick={()=>navigte(-1)}>
            <img src={Arrow} alt="leftArrow" />
            <h3>Filters</h3>
          </div>
          <div className={style.clearFilter}>
            <p>Clear Filters</p>
          </div>
        </div>
        <div className={style.FilterMainTwo}>
          <div className={style.FilterCatecarry}>
            <span onClick={getBrand} className={`${selectValue === "Brand" ? style.color : ''}`}>
              Brand
            </span>
            <span onClick={getFabric} className={`${selectValue === "fabric" ? style.color : ''}`}>
              Connectivity
            </span>
            <span onClick={getFit} className={`${selectValue === "Fit" ? style.color : ''}`}>
              Color
            </span>
            <span onClick={getType} className={`${selectValue === "Type" ? style.color : ''}`}>
              Compatible With
            </span>
            <span onClick={getSize} className={`${selectValue === "Size" ? style.color : ''}`}>
              Headphone Design
            </span>
            <span onClick={getOccasion} className={`${selectValue === "Occasion" ? style.color : ''}`} >
              Discount
            </span>
            <span onClick={getPrice} className={`${selectValue === "Price" ? style.color : ''}`}>
              Price
            </span>
            <span onClick={getCustomer} className={`${selectValue === "Customer Ratings" ? style.color : ''}`} >
              Customer Ratings
            </span>
            <span onClick={getFAssured} className={`${selectValue === "F-Assured" ? style.color : ''}`}>
              Features
            </span>
            <span onClick={getDiscount} className={`${selectValue === "Discount" ? style.color : ''}`}>
              Headphone Type
            </span>
            <span onClick={getOffer} className={`${selectValue === "Offers" ? style.color : ''}`} >
              Offers
            </span>
            <span onClick={getNewArrivals} className={`${selectValue === "New Arrivals" ? style.color : ''}`}>
              New Arrivals
            </span>
            <span onClick={getAvailability} className={`${selectValue === "Availability" ? style.color : ''}`}>
              Availabilty
            </span>
            <span onClick={getCategory} className={`${selectValue === "Category" ? style.color : ''}`}>
              Category
            </span>
          </div>
          <div className={style.productFilter}>
            {selectValue === "Brand" ? <BrandFilter/> : ''}
            {selectValue === "Price" ? <PriceFilter/>: ''}
            {selectValue === "fabric" ? <Connectivity/>: ''}
            {selectValue === "Fit" ? <ColorFilter/> : ''}
            {selectValue === "Occasion" ? <Discount/> : ''}
            {selectValue === "Customer Ratings" ? <RatingFilter/>: ''}
            {selectValue === "F-Assured" ? <Features/>:''}
            {selectValue === "Discount" ? <Type/>:''}
          </div>
        </div>
        <div className={style.FilterFooter}>
          <div className={style.FilterFooterPrice}>
            <h4>4,433</h4>
            <p>products found</p>
          </div>
          <div className={style.FilterFooterApply} onClick={()=>navigte(-1)}>
            <h3>Apply</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default FliterBlock;
