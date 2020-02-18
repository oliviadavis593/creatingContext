import React from "react";

const LanguageContext = React.createContext({
  lang: window.navigator.language
});

export default LanguageContext;

/*======== Creating Context (#1) ======= */
//React supplies a function called createContext = what we can use to make our context
//We can supply a default value as an argument (w.n.l)
//Note: This context is in its own file so it can be directly imported into any other file
//LanguageContext.js ===> GreatGrandChild.js
