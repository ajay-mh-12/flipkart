import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainBody from "./components/mainBody/MainBody";
import Headset from "./components/HeadsetProduct/Headset";
import HeadsetProductPage from "./components/HeadsetProductPage/HeadsetProductPage";
import HeaderProductsCard from "./components/HeaderProductsCard/HeaderProductsCard";
// import ProductDetails from "./components/ProductDetails/ProductDetailsAddSection/ProductDetails";
import ProductDetailsMain from "./components/ProductDetails/ProductDetailsMain";
// import Sorting from "./components/SortProduct/Sorting";
import { createContext, useState } from "react";
import FilterPage from "./FilterPage/FilterPage";
export const sortOpenContext = createContext();
export const brandFiltercontext = createContext();
export const colorFiltercontext = createContext();
export const connectFiltercontext = createContext();
export const discountFiltercontext = createContext();
export const ratingFiltercontext = createContext();
export const featuresFiltercontext = createContext();
export const typesFiltercontext = createContext();
function App() {
  const [open, setOpen] = useState(false);
  const [brand, setBrand] = useState([]);
  const [color, setColor] = useState([]);
  const [connect, setConnect] = useState([]);
  const [discount, setDiscount] = useState([]);
  const [rateing, setRateing] = useState([]);
  const [features, setFeatures] = useState([]);
  const [type, setType] = useState([]);

  return (
    <brandFiltercontext.Provider value={{ brand, setBrand }}>
      <sortOpenContext.Provider value={{ open, setOpen }}>
        <colorFiltercontext.Provider value={{ color, setColor }}>
          <connectFiltercontext.Provider value={{ connect, setConnect }}>
            <discountFiltercontext.Provider value={{ discount, setDiscount }}>
              <ratingFiltercontext.Provider value={{ rateing, setRateing }}>
                <featuresFiltercontext.Provider
                  value={{ features, setFeatures }}
                >
                  <typesFiltercontext.Provider value={{ type, setType }}>
                    <BrowserRouter>
                      <Routes>
                        <Route
                          path="/"
                          element={
                            <>
                              <Header></Header>
                              <MainBody />
                            </>
                          }
                        />

                        {/* Product page */}
                        <Route
                          path="/productList"
                          element={
                            <>
                              <Headset />
                              <HeadsetProductPage />
                              <HeaderProductsCard />
                            </>
                          }
                        />

                        {/* {product card} */}
                        <Route
                          path="/productCard"
                          element={
                            <>
                              <ProductDetailsMain />
                            </>
                          }
                        />
                        <Route
                          path="/Filter"
                          element={
                            <>
                              <FilterPage />
                            </>
                          }
                        />
                      </Routes>
                    </BrowserRouter>
                  </typesFiltercontext.Provider>
                </featuresFiltercontext.Provider>
              </ratingFiltercontext.Provider>
            </discountFiltercontext.Provider>
          </connectFiltercontext.Provider>
        </colorFiltercontext.Provider>
      </sortOpenContext.Provider>
    </brandFiltercontext.Provider>
  );
}
export default App;
