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
        <img
          className={"Hero-Image"}
          src="//images.ctfassets.net/hq4skgadvikw/2uoHgORYxo5CctauG9R2Ag/96e26ac72f77e7208a37b12f1c5a104d/IMG_0809.JPG"
          alt={"hero"}
        />
      </header>
      <main>
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
        <hr />
        <div>
          <h2>Images</h2>
          <img
            src="//images.ctfassets.net/hq4skgadvikw/1eSEj3DFlbUsp05pAkxgcf/60c6993816eb836b4f0d51cbd871478f/IMG_2863.JPG"
            alt={"dog-indian"}
            height={100}
            width={100}
          />
          <img
            src="//images.ctfassets.net/hq4skgadvikw/4ibqcQmP42Zwt9RuSazWJ9/bcc5b889f3efd3273ae1c93027ea6ad5/PXL_20220304_022408641.jpg"
            alt={"dog-labrador"}
            height={100}
            width={100}
          />
          <img
            src="//images.ctfassets.net/hq4skgadvikw/1gN8oA6ZbFNhVJXDwSdvY7/ed35a84cf3a8539ec3366913dfcfdbca/PXL_20220822_085517527.jpg"
            alt={"landscape1"}
            height={100}
            width={100}
          />
          <img
            src="//images.ctfassets.net/hq4skgadvikw/7qvvsxv3NbJAuyM1rLmNQK/24646f482060cb33db7640a8db1c5c8a/PXL_20220921_023221646_2.jpg"
            alt={"landscape2"}
            height={100}
            width={100}
          />
        </div>
        <hr />
        <div className={"Twitter-Feed"}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="agileindia"
            options={{
              height: 300,
            }}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
