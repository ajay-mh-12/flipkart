import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainBody from "./components/mainBody/MainBody";
import Headset from "./components/HeadsetProduct/Headset";
import HeadsetProductPage from "./components/HeadsetProductPage/HeadsetProductPage";
import HeaderProductsCard from "./components/HeaderProductsCard/HeaderProductsCard";

function App() {
  return (
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
        <Route path="/productList" element={
          <>
          <Headset />
          <HeadsetProductPage/>
          <HeaderProductsCard/> 
          </>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
