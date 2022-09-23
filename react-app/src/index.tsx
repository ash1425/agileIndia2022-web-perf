import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Partytown } from "@builder.io/partytown/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Partytown
      debug={true}
      forward={["dataLayer.push"]}
      resolveUrl={function (url, location, type) {
        if (type === "script") {
          const proxyUrl = new URL("https://cdn.builder.codes/api/v1/js-proxy");
          proxyUrl.searchParams.append("url", url.href);
          proxyUrl.searchParams.append(
            "apiKey",
            "d431478b1d0b4d15b3f3642e7a50e0b7"
          );
          return proxyUrl;
        }
        return url;
      }}
    />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
