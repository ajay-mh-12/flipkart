import { React } from 'react';
import style from "./DesktopFilterSlide.module.css"
import DesktopFilterHeader from './DesktopFilterHeader/DesktopFilterHeader';
function DesktopFilterSide() {
    return (
        <>
        <div className={style.DesktopFilterSide}>
            <DesktopFilterHeader/>
        </div>
            
        </>
    );
}

export default DesktopFilterSide;