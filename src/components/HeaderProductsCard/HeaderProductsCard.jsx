import { useEffect, useInsertionEffect, useState } from "react";
import style from "./HeaderProCard.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { sortOpenContext } from "../../App";
import { brandFiltercontext } from "../../App";
import { connectFiltercontext } from "../../App";
import { colorFiltercontext } from "../../App";
import { discountFiltercontext } from "../../App";
import { ratingFiltercontext } from "../../App";
import { featuresFiltercontext } from "../../App";
import { typesFiltercontext } from "../../App";

function HeaderProductsCard() {
  const { open, setOpen } = useContext(sortOpenContext);
  const [product, setProduct] = useState([]);
  const [allProducts, setAllproducts] = useState([]);
  const [getvalue, setGetvalue] = useState(" ");
  const { brand, setBrand } = useContext(brandFiltercontext);
  const {connect,setConnect} = useContext(connectFiltercontext);
  const {color,setColor} = useContext(colorFiltercontext);
  const {discount,setDiscount} = useContext(discountFiltercontext);
  const {rateing,setRateing} = useContext(ratingFiltercontext);
  const {features,setFeatures} = useContext(featuresFiltercontext);
  const {type,setType} = useContext(typesFiltercontext);

  function handleValue(e) {
    setOpen(!open);
    setGetvalue(e.target.value);
  }
  console.log(brand);
  useEffect(() => {
    if (getvalue === "lowToHigh") {
      setProduct([...allProducts].sort((a, b) => a.price - b.price));
    }
    if (getvalue === "highToLow") {
      setProduct([...allProducts].sort((a, b) => b.price - a.price));
    }
    if (getvalue === "popularity") {
      setProduct(
        [...allProducts].sort((a, b) => b.isPopularity - a.isPopularity),
      );
    }
    if (getvalue === "newest") {
      setProduct(allProducts.filter((item) => item.isNewest));
    }
  }, [getvalue, allProducts]);

  useEffect(() => {
    if(brand.length === 0) {
      setProduct(allProducts)
    }else {
      setProduct(allProducts.filter((i) => brand.includes(i.brand)))
    }
  }, [brand,allProducts]);


  useEffect(() => {
    fetch("/Product.json")
      .then((res) => res.json())
      .then((data) => {
        setAllproducts(data);
        setProduct(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // connectivity // 
  useEffect(()=>{
    if(connect.length === 0) {
      setProduct(allProducts)
    }else{
      setProduct(allProducts.filter((item)=>connect.includes(item.connectivity)))
    }
  },[connect,allProducts])

  // color // 
  useEffect(()=>{
    if(color.length === 0){
      setProduct(allProducts)
    }else{
      setProduct(allProducts.filter((item)=>color.includes(item.color)))
    }
  },[color,allProducts])

  // discount // 
  useEffect(()=>{
    if(discount.length === 0){
      setProduct(allProducts)
    }else{
      setProduct(allProducts.filter((item)=>discount.includes(item.offer)))
    }
  },[discount,allProducts])

  // Rating //
  useEffect(()=>{
    if(rateing.length === 0) {
      setProduct(allProducts)
    }else{
      setProduct(allProducts.filter((item)=>rateing.includes(item.rating)))
    }
  },[rateing,allProducts])

  // feautures // 
  useEffect(()=>{
    if(features.length === 0){
      setProduct(allProducts)
    }else{
      setProduct(allProducts.filter((item)=>features.includes(item.feature)))
    }
  },[features,allProducts])

  // type // 
  useEffect(()=>{
    if(type.length === 0){
      setProduct(allProducts)
    }else{
      setProduct(allProducts.filter((item)=>type.includes(item.type)))
    }
  },[type,allProducts])

  const navigate = useNavigate();

  return (
    <>
      <div className={style.productHeadsetMain}>
        {product.map((item, index) => (
          <div
            className={style.HeadsetProductsCard}
            key={index}
            onClick={() => navigate("/productCard")}
          >
            <div className={style.HeaderDetailsImage}>
              <img className={style.image} src={item.image} alt="" />
              <svg width="24" height="24" viewBox="0 0 256 256">
                <path fill="none" d="M0 0h256v256H0z"></path>
                <path
                  d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z"
                  fill="#fff"
                  stroke="#B8BBBF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="12"
                ></path>
              </svg>
            </div>
            <div className={style.HeadsetDetails}>
              <div>
                <p>Sponsored</p>
                <h2>{item.name}</h2>
                <h5>{item.subname}</h5>
              </div>
              <div className={style.HeaderDetailsSubImage}>
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z"
                    fill="#008C00"
                  ></path>
                </svg>
                <h5>{item.presentage}%</h5>
                <p>₹{item.discount}</p>
                <h4>₹{item.price}</h4>
              </div>
              <div>
                <img 
                  src="https://rukminim2.flixcart.com/www/76/32/promos/30/08/2023/59dc7885-72bf-4135-9099-025f074b0eb1.png?q=90"
                  alt=""
                />
                <span>$684 with 2 offers</span>
              </div>
              <div>
                <img
                  src="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%2326A541'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%20126.729%20126.73'%20xml:space='preserve'%20stroke='%2326A541'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3cpath%20d='M121.215,44.212l-34.899-3.3c-2.2-0.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101,0l-12.4,30.3%20c-0.8,2.1-2.8,3.5-5,3.7l-34.9,3.3c-5.2,0.5-7.3,7-3.4,10.5l26.3,23.1c1.7,1.5,2.4,3.7,1.9,5.9l-7.9,32.399%20c-1.2,5.101,4.3,9.3,8.9,6.601l29.1-17.101c1.9-1.1,4.2-1.1,6.1,0l29.101,17.101c4.6,2.699,10.1-1.4,8.899-6.601l-7.8-32.399%20c-0.5-2.2,0.2-4.4,1.9-5.9l26.3-23.1C128.615,51.212,126.415,44.712,121.215,44.212z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
                  alt=""
                />
                <img
                  src="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%2326A541'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%20126.729%20126.73'%20xml:space='preserve'%20stroke='%2326A541'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3cpath%20d='M121.215,44.212l-34.899-3.3c-2.2-0.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101,0l-12.4,30.3%20c-0.8,2.1-2.8,3.5-5,3.7l-34.9,3.3c-5.2,0.5-7.3,7-3.4,10.5l26.3,23.1c1.7,1.5,2.4,3.7,1.9,5.9l-7.9,32.399%20c-1.2,5.101,4.3,9.3,8.9,6.601l29.1-17.101c1.9-1.1,4.2-1.1,6.1,0l29.101,17.101c4.6,2.699,10.1-1.4,8.899-6.601l-7.8-32.399%20c-0.5-2.2,0.2-4.4,1.9-5.9l26.3-23.1C128.615,51.212,126.415,44.712,121.215,44.212z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
                  alt=""
                />
                <img
                  src="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%2326A541'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%20126.729%20126.73'%20xml:space='preserve'%20stroke='%2326A541'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3cpath%20d='M121.215,44.212l-34.899-3.3c-2.2-0.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101,0l-12.4,30.3%20c-0.8,2.1-2.8,3.5-5,3.7l-34.9,3.3c-5.2,0.5-7.3,7-3.4,10.5l26.3,23.1c1.7,1.5,2.4,3.7,1.9,5.9l-7.9,32.399%20c-1.2,5.101,4.3,9.3,8.9,6.601l29.1-17.101c1.9-1.1,4.2-1.1,6.1,0l29.101,17.101c4.6,2.699,10.1-1.4,8.899-6.601l-7.8-32.399%20c-0.5-2.2,0.2-4.4,1.9-5.9l26.3-23.1C128.615,51.212,126.415,44.712,121.215,44.212z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
                  alt=""
                />
                <img
                  src="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%2326A541'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%20126.729%20126.73'%20xml:space='preserve'%20stroke='%2326A541'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3cpath%20d='M121.215,44.212l-34.899-3.3c-2.2-0.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101,0l-12.4,30.3%20c-0.8,2.1-2.8,3.5-5,3.7l-34.9,3.3c-5.2,0.5-7.3,7-3.4,10.5l26.3,23.1c1.7,1.5,2.4,3.7,1.9,5.9l-7.9,32.399%20c-1.2,5.101,4.3,9.3,8.9,6.601l29.1-17.101c1.9-1.1,4.2-1.1,6.1,0l29.101,17.101c4.6,2.699,10.1-1.4,8.899-6.601l-7.8-32.399%20c-0.5-2.2,0.2-4.4,1.9-5.9l26.3-23.1C128.615,51.212,126.415,44.712,121.215,44.212z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`${style.sortMain} ${open ? style.open : style.sortMain}`}
      >
        <div className={style.sortHead}>
          <h1>SORT BY</h1>
        </div>
        <div className={style.SortingElement}>
          <div className={style.SortingType}>
            <label htmlFor="Popularity" className={style.radioLabel}>
              <input
                type="radio"
                id="Popularity"
                name="sort"
                value="popularity"
                onChange={handleValue}
              />
              Popularity
            </label>
          </div>
          <div className={style.SortingType}>
            <label htmlFor="lowToHigh" className={style.radioLabel}>
              <input
                type="radio"
                id="lowToHigh"
                name="sort"
                value="lowToHigh"
                onChange={handleValue}
              />
              Price -- Low to High
            </label>
          </div>
          <div className={style.SortingType}>
            <label htmlFor="highToLow" className={style.radioLabel}>
              <input
                type="radio"
                id="highToLow"
                name="sort"
                value="highToLow"
                onChange={handleValue}
              />
              Price -- High to Low
            </label>
          </div>
          <div className={style.SortingType}>
            <label htmlFor="NewestFirst" className={style.radioLabel}>
              <input
                type="radio"
                id="NewestFirst"
                name="sort"
                value="newest"
                onChange={handleValue}
              />
              Newest First
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderProductsCard;
