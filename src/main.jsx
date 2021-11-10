import React from "react";
import ReactDOM from "react-dom";
import "./static/css/index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import CartState from "./context/cart/CartState";

ReactDOM.render(
  <Auth0Provider
    domain={import.meta.env.VITE_DOMAIN_KEY}
    clientId={import.meta.env.VITE_CLIENT_ID_KEY}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <CartState>
      <App />
    </CartState>
  </Auth0Provider>,
  document.getElementById("root")
);
