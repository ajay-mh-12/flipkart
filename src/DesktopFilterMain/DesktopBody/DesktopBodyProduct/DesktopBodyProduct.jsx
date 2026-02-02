import { React } from 'react';
import style from "./DesktopBodyProduct.module.css"
function DesktopBodyProduct() {
    return (
        <>
        <div className={style.sortElement}>
        
        
        
        Login
        
        
        Location not set Select delivery location
        
        
            <div className={style.sort} >
                <p>Sort By</p>
            </div>
            <div className={style.sorting}>
                <p>Popularity</p>
            </div>
            <div className={style.sorting}>
                <p>Price -- Low to High</p>
            </div>
            <div className={style.sorting}>
                <p>Newest First</p>
            </div>
            <div className={style.sorting}>
                <p>Discount</p>
            </div>
        </div>
        </>
    );
}

export default DesktopBodyProduct;