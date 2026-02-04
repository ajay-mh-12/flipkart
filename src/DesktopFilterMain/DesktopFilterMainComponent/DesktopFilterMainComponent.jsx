import { React } from 'react';
import style from "./DesktopFilterMainComponent.module.css"
import DesktopBody from '../DesktopBody/DesktopBody';
import DesktopFilterSide from '../DesktopFilterSide/DesktopFilterSide';
import HeaderProductsCard from '../../components/HeaderProductsCard/HeaderProductsCard';
function DesktopFilterMainComponent() {
    return (
        <>
        <div className={style.DesktopFilterMainComponent}>
            <div className={style.desktopFilterSide}>
            <DesktopFilterSide />
            </div>
            <div className={style.DesktopFilterMainComponentTwo}>
             <DesktopBody />
             <HeaderProductsCard/>

            </div>
        </div>
            
        </>
    );
}

export default DesktopFilterMainComponent;