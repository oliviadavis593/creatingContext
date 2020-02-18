import React, { Component } from "react";
import Child from "./lang-context/Child";
import LangControls from "./lang-context/LangControls";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <LangControls />
        <Child />
      </div>
    );
  }
}

/*======== Setting up our starting point (#1) ====== */
//App will be the root our tree
//App is the parent of LangControls & Child
//Lang controls has no children & Child has a GrandChild & a great grandchild
//Objective:
//LangControls will contain buttons to change the current language
//GGC will render some text in the currently selected language
//App.js ===> GreatGrandChild.js

/*======== Setting up our starting point (#5) ====== */
//To connect all the tree together we can import Child Component into our App
//In chromeDevTools there shouldn't be errors & en-US title & body should show in HTML
//App.js ===> LangControl.js

/*=================================================== */
