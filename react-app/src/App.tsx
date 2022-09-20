import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Contributors from "./components/Contributors";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          width={100}
          height={100}
        />
        Github Contributors for
        <a
          className="App-link"
          href={"https://github.com/facebook/react"}
          target="_blank"
          rel={"noopener"}
        >
          ReactJs
        </a>
      </header>
      <main>
        <Contributors repo={"react"} owner={"facebook"} />
      </main>
    </div>
  );
}

export default App;
