import { React, useState } from "react";
import Arrow from "./FilterImage/leftarrow.svg";
import style from "./FilterPage.module.css";
import GenderFilter from "./GenderFilter/GenderFilter";
function FliterBlock() {
const [selectValue,setSelectValue] = useState(" ")
function getBrand(){
  setSelectValue("Brand")
}
function getGender(){
  setSelectValue("Gender")
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
console.log(selectValue)
  return (
    <>
      <div className={style.FilterMain}>
        <div className={style.FilterHeader}>
          <div className={style.Arrow}>
            <img src={Arrow} alt="leftArrow" />
            <h3>Filters</h3>
          </div>
          <div className={style.clearFilter}>
            <p>Clear Filters</p>
          </div>
        </div>
        <div className={style.FilterMainTwo}>
          <div className={style.FilterCatecarry}>
            <span onClick={getGender}>
              Gender
            </span>
            <span onClick={getBrand}>
              Brand
            </span>
            <span onClick={getFabric}>
              fabric
            </span>
            <span onClick={getFit}>
              Fit
            </span>
            <span onClick={getType}>
              Type
            </span>
            <span onClick={getSize}>
              Size
            </span>
            <span onClick={getOccasion} >
              Occasion
            </span>
            <span onClick={getPrice}>
              Price
            </span>
            <span onClick={getCustomer}>
              Customer Ratings
            </span>
            <span onClick={getFAssured}>
              F-Assured
            </span>
            <span onClick={getDiscount}>
              Discount
            </span>
            <span onClick={getOffer}>
              Offers
            </span>
            <span onClick={getNewArrivals}>
              New Arrivals
            </span>
            <span onClick={getAvailability}>
              Availabilty
            </span>
            <span onClick={getCategory}>
              Category
            </span>
          </div>
          <div className={style.productFilter}>
            <GenderFilter/>
          </div>
        </div>
        <div className={style.FilterFooter}>
          <div className={style.FilterFooterPrice}>
            <h4>4,433</h4>
            <p>products found</p>
          </div>
          <div className={style.FilterFooterApply}>
            <h3>Apply</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default FliterBlock;
