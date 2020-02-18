import React from "react";
import GreatGrandChild from "./GreatGrandChild";

export default function GrandChild() {
  return (
    <div className="GrandChild">
      <GreatGrandChild />
    </div>
  );
}

/*======== Setting up our starting point (#3) ====== */
//Now we're simply nesting GGC into GC
//GC.js ===> Child.js
