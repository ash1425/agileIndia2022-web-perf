import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Contributors from "./components/Contributors";
import { TwitterTimelineEmbed } from "react-twitter-embed";

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
        <div>Demo : Performance Matters</div>
      </header>
      <main>
        <div className={"Twitter-Feed"}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="agileindia"
            options={{
              height: 300,
            }}
          />
        </div>
        <hr />
        <div>
          <h2>
            Github Contributors for &nbsp;
            <a
              className="App-link"
              href={"https://github.com/facebook/react"}
              target="_blank"
              rel={"noopener"}
            >
              ReactJs
            </a>
          </h2>
          <Contributors repo={"react"} owner={"facebook"} />
        </div>
      </main>
    </div>
  );
}

export default App;
