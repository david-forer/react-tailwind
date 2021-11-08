import React from "react";
import ReactDOM from "react-dom";
import "./static/css/index.css";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.render(
  <Auth0Provider
    domain="import.meta.env.VITE_DOMAIN_KEY"
    clientId="import.meta.env.VITE_CLIENT_ID_KEY"
        redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
