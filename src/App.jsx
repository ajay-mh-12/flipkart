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

function App() {
  const [open, setOpen] = useState(false);
  return (
    <sortOpenContext.Provider value={{ open, setOpen }}>
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
          path="/Filter" element={
            <>
            <FilterPage/>
            </>
          }/>
        </Routes>
      </BrowserRouter>
    </sortOpenContext.Provider>
  );
}

export default App;
