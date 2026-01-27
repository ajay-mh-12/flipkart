import React from "react";
// import { useNavigate } from "react-router-dom";
import style from "./ProductDetails.module.css"
function ProductDetails(props){
    // const navigate = useNavigate();

    return(
        <>
        {/* <div className={style.ProductDetailsHeader} onClick={()=>navigate("/productList")}>
            <svg width="24" height="24" fill="none" viewBox="0 0 32 32"><path d="M27 16H5M14 7l-9 9 9 9" stroke="#333333" stroke-width="2px" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>
            <div className={style.ProductDetailsSearchBtn}>
                <svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><circle cx="116" cy="116" r="84" fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M175.4 175.4 224 224"></path></svg>
                <input type="search" placeholder="Search for products" />
            </div>
            <svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path d="M184 184H69.8L41.9 30.6a8 8 0 0 0-7.8-6.6H16" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="12px"></path><circle cx="80" cy="204" r="20" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="12px"></circle><circle cx="184" cy="204" r="20" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="12px"></circle><path d="M62.5 144h125.6a15.9 15.9 0 0 0 15.7-13.1L216 64H48" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="12px"></path></svg>
        </div> */}
        <div className={style.ProductDetailsHeaderSlider}>
            <div className={style.ProductDetailsHeaderSliderMain}>
                <div className={style.ProductDetailsHeaderSliderImage}>
                <img src={props.image} alt="" />
                </div>
                <div className={style.ProductDetailsHeaderSliderMainDetails}>
                <div>
                <p>truke Auto Pro earbuds w/ 60H Battery,Leat..</p>
                </div>
                <div>
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><path d="M6 1.875v8.25M2.625 6.75 6 10.125 9.375 6.75" stroke="#008042" stroke-width="1.2px" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>
                <h4>68%</h4>
                <h3>2,799</h3>
                <h5>₹899</h5>
                </div>
                </div>
            </div>
            <div className={style.ProductDetailsAdBtn}>
                <p>AD</p>
            </div>
            
        </div>
        
       
        </>
    )
}
export default ProductDetails
