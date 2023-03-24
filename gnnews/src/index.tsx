import React from "react";
import { render } from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/store";
import Content from "./components/Content/Content";

const root = document.getElementById("root");

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
