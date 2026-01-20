import { React } from 'react';
import Style from "./DiscountproductSub.module.css"
function SubProduct(props) {
    return (
        <>
            <div className={Style.SubProductpropSub}>
            <div className={Style.SubProductpropImage}>
                <img src={props.image} alt="" />
            </div>
            <div className={Style.SubProductpropName}>
                <span>{props.name}</span>
                <h3>{props.discount}</h3>
            </div>
            
        </div>
            
        </>
    );
}

export default SubProduct;