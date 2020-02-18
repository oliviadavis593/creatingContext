import React from "react";
import GrandChild from "./GrandChild";

export default function Child() {
  return (
    <main role="main" className="Child">
      <GrandChild />
    </main>
  );
}

/*======== Setting up our starting point (#4) ====== */
//Now we're simply nesting GC into Child
//To connect all the tree together we can import Child Component into our App
//Child.js ===> App.js
