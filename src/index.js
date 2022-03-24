import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CategoryProvider } from "./Context/CategoryContext";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./Context/ProductContext";

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ProductProvider>
        <CategoryProvider>
          <App />
        </CategoryProvider>
      </ProductProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
