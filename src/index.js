import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers";
import { Toaster } from "react-hot-toast";

// import { Route,Routes } from "react-router-dom";

const store=configureStore({
  reducer:rootReducer,
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>

    <BrowserRouter>
    <App />
    <Toaster/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
