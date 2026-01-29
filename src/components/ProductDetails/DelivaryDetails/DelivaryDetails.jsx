import { React } from "react";
import style from "./DelivaryDetails.module.css";
import location from "./DelivaryDetailsImage/location.svg";
import delivary from "./DelivaryDetailsImage/lorry.svg";
import product from "./DelivaryDetailsImage/delivaryItem.svg";
import smallStar from "./DelivaryDetailsImage/smallStar.svg";
import note from "./DelivaryDetailsImage/note.webp";
import replace from "./DelivaryDetailsImage/Replace.svg";
import cashOn from "./DelivaryDetailsImage/cashon.svg";
import customer from "./DelivaryDetailsImage/customore.svg";
function DelivaryDetails() {

  return (
    <>
      <div className={style.DeliveryDetails}>
        <div>
          <h1>Delivery details</h1>
        </div>
        <div className={style.location}>
          <img src={location} alt="" />
          <p>
            Location not set <a>Select delivery location</a>
          </p>
        </div>
        <div>
          <div className={style.delivaryDate}>
            <img src={delivary} alt="" />
            <h3>Delivery by 30 Jan,Fri</h3>
          </div>
          <div className={style.deliveryTime}>
            <h5>Order in 00h 00m 00s</h5>
          </div>
        </div>
        <div>
            <div className={style.order}>
              <img src={product} alt="" />
              <p>Fulfilled by BaalagenterPrises</p>
            </div>
          <div className={style.review}>
            <a>3.7</a>
            <img src={smallStar} alt="" />
            <h6>. 1 year with Flipkart</h6>
          </div>
        </div>
      </div>
      <div className={style.return}>
        <img src={note} alt="" />
        <p>7 days Return Policy</p>
      </div>
      <div className={style.paymentMethod}>
        <div className={style.replaceDiv}>
          <img src={replace} alt="" />
          <h4>7 Days Replacement</h4>
        </div>
        <div className={style.CashDelivery}>
          <img src={cashOn} alt="" />
          <h4>Cash on Delivery</h4>
        </div>
        <div className={style.customer}>
          <img src={customer} alt="" />
          <h4>Customer support</h4>
        </div>
      </div>
    </>
  );
}

export default DelivaryDetails;
