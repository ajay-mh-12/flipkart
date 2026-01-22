import { React } from 'react';
import style from "./HeaderproPage.module.css"
import HeadsetImage from "./HeaderProductPageImage/imageHeaddset.webp"
function HeadsetProductPage() {
    return (
        <>
        <div className={style.HeadsetImage}>
            <img src={HeadsetImage} alt="" />
           
        </div>
            
        </>
    );
}

export default HeadsetProductPage;