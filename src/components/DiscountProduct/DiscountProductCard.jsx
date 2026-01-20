import { React } from 'react';
import Style from "./DiscountProduct.module.css"

function DiscountProductCard(props) {
    return (
        <>
        
            <div className={Style.DiscountCard}>
                <div className={Style.DiscountCardImage}>
                <img src={props.image} alt="" />
                </div>
                <div className={Style.DiscountCardName}>
                  <span>{props.name}</span>
                  <h4>{props.discount}</h4>  
                </div>
            </div>
        </>
    );
}

export default DiscountProductCard;