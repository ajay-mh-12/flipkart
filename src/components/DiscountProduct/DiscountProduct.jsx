import React from "react"
import DiscountStyle from "./DiscountProduct.module.css"
import DiscountProductCard from "./DiscountProductCard"
import Headset from "./DiscountProductImage/RealmeHeadsetImage.webp"
import Shoe from "./DiscountProductImage/ShoeImage.jpeg"
import Watch from "./DiscountProductImage/WatchImage.webp"
import WhiteShoes from "./DiscountProductImage/WhiteShoe.webp"
function DiscountProduct() {

    return(
        <>
        <div className={DiscountStyle.DiscountCardMain}>
        <h1>Widest collection</h1>
        <div className={DiscountStyle.main}>
        <DiscountProductCard name="boAt,realme,Mivi & more" image={Headset} discount="Min 50% Off" />
        <DiscountProductCard name="Men's Shoes" image={Shoe} discount="Min 40% Off"/>
        <DiscountProductCard name="New Range" image={Watch} discount="Special Offer"/>
        <DiscountProductCard name="Men's Sneakers" image={WhiteShoes} discount="Min.50% Off"/>
        </div>
        </div>
        </>
    )
}
export default DiscountProduct