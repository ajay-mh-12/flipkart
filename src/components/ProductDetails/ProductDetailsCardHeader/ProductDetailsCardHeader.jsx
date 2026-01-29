import { React } from "react";
import style from "./ProductDetailsCardHeader.module.css"
import { useNavigate } from "react-router-dom";
function ProductDetailsCardHeader() {

  const navigate = useNavigate() 
  return (
    <>
      <div className={style.ProductDetailsHeader} onClick={()=>navigate("/productList")}>
        <svg width="24" height="24" fill="none" viewBox="0 0 32 32">
          <path
            d="M27 16H5M14 7l-9 9 9 9"
            stroke="#333333"
            strokeWidth="2px"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          ></path>
        </svg>
        <div className={style.ProductDetailsSearchBtn}>
          <svg width="24" height="24" viewBox="0 0 256 256">
            <path fill="none" d="M0 0h256v256H0z"></path>
            <circle
              cx="116"
              cy="116"
              r="84"
              fill="none"
              stroke="#333333ff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></circle>
            <path
              fill="none"
              stroke="#333333ff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              d="M175.4 175.4 224 224"
            ></path>
          </svg>
          <input type="search" placeholder="Search for products" />
        </div>
        <svg width="24" height="24" viewBox="0 0 256 256">
          <path fill="none" d="M0 0h256v256H0z"></path>
          <path
            d="M184 184H69.8L41.9 30.6a8 8 0 0 0-7.8-6.6H16"
            fill="none"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12px"
          ></path>
          <circle
            cx="80"
            cy="204"
            r="20"
            fill="none"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12px"
          ></circle>
          <circle
            cx="184"
            cy="204"
            r="20"
            fill="none"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12px"
          ></circle>
          <path
            d="M62.5 144h125.6a15.9 15.9 0 0 0 15.7-13.1L216 64H48"
            fill="none"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12px"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default ProductDetailsCardHeader;
