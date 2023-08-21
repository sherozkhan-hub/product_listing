import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Carts from "./components/Carts";
import productReducer from "./reducers/productReducer";
import { useReducer } from "react";
import { cartReducer, initialStates } from "./reducers/cartReducer";

const productInitial = {
  productList: [],
  singleProduct: {},
};

function App() {
  const [product, productDispatch] = useReducer(productReducer, productInitial);
  const [cart, cartDispatch] = useReducer(cartReducer, initialStates);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/products"
            element={
              <ProductList
                products={product.productList}
                productDispatch={productDispatch}
              />
            }
          />
          <Route
            path="/products/:id"
            element={
              <Product
                product={product.singleProduct}
                productDispatch={productDispatch}
                cartDispatch={cartDispatch}
              />
            }
          />
          <Route
            path="/carts"
            element={
              <Carts
                cart={cart}
                cartDispatch={cartDispatch}
                product={product.singleProduct}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
