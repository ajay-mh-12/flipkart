import { React } from 'react';
import Style from "./DiscountproductSub.module.css"
import SubProduct from './SubProduct';
import SareeImage from "./SubImages/SareeImage.webp"
import Watches from "./SubImages/Watches.webp"
import WaterBottle from "./SubImages/WaterBotleImage.webp"
function DiscountProductSub() {
    return (
        <>
        <div className={Style.SubproductProp}>
         <h2>In demand</h2>
        <div className={Style.SubProduct}>
            <SubProduct name= "Printed Sarees & more.." image={SareeImage} discount="Under$999" />
            <SubProduct name="Don't Miss" image={Watches} discount="Special offer"/>
            <SubProduct name="Milton,Cello & more.." image={WaterBottle} discount="From$129"/>
            <SubProduct name="Printed Sarees & more.." image={SareeImage} discount="Under$999" />

        </div>
        </div>
            
        </>
    );
}

export default DiscountProductSub;