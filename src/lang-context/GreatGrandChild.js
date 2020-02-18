import React, { Component } from "react";
import languageSpecificCopy from "./languageSpecificCopy";
import LanguageContext from "./LanguageContext";

class GreatGrandChild extends Component {
  static contextType = LanguageContext;
  render() {
    //const copy = languageSpecificCopy["en-US"] || {};
    const copy = languageSpecificCopy[this.context.lang] || {};
    return (
      <section>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
      </section>
    );
  }
}

export default GreatGrandChild;

/*======== Setting up our starting point (#2) ====== */
//In order to use context this will need to be a class component
//We're using the languageSpecificCopy object and hardcoding a selection for the 'en-US' language
//We're using an 'or an empty object' logic when creating copy constant with the syntax || {}
//It's similar to defaultProps but languageSpecificCopy isn't a prop so we can't use defaultProps
//If we attempt to select a key inside the lSC object that doesn't exist it could return uindefined
//if copy === undefined = when attempting to do copy.title * body our app could throw errors
// || {} = gives us a safety net to aviod dealing with undefined & instead use and empty {} in worst case
//GGC.js ==-> GrandChild.js

/*================================================ */

/*======== Creating Context (#2) ======= */
//Now we can refactor GGC to use the language from context
// How to do this:
//Import LanguageContext
// Assign our cotext to a static property called contextType = wull give us a new instance property this.context
//In RDT we'll see a new prop listed = context (object) w/ a key of lang
//We can now swap the hardcoded string of 'en-US' inside render for this value inside context
//GGC.js ===> LanguageControls.js
