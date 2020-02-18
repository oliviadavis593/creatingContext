import React from "react";
import LanguageContext from "./LanguageContext";

//console.log(LanguageContext)
export default function LangControls(props) {
  return (
    <LanguageContext.Consumer>
      {/*{function renderProp() {*/}
      {value => {
        //console.log(value)
        return (
          <>
            <button disabled={value.lang === "en-GB"}>
              British{" "}
              <span role="img" aria-label="en-GB">
                🇬🇧
              </span>
            </button>{" "}
            <button disabled={value.lang === "en-US"}>
              American{" "}
              <span role="img" aria-label="en-US">
                🇺🇸
              </span>
            </button>{" "}
            <button disabled={value.lang === "ko"}>
              Korean{" "}
              <span role="img" aria-label="ko">
                🇰🇷
              </span>
            </button>
          </>
        );
      }}
    </LanguageContext.Consumer>
  );
}

/*======== Setting up our starting point (#6) ====== */
//Created component that contains buttons to switch to current language
//And import it into App.js
//LangControls.js ===> LanguageContext.js

/*================================================ */

/*======== Reading Context w. render props (#2) ======= */
//We can combine context w. render props to read out data out of the context
//How to do this:
//Import LanguageContext
//Console.log context (temporarily)
//In CDT we can see the LanguageContext has many properties (remove console.log)
//Use LanguageContext.Consumer  and wrap it around the content
//What's happening:
//LanguageContext.Consumer is a component
//It has a children prop which is a function that returns more JSX
//render prop here is like a mix between callback prop & a children prop
//We've moved the JSX we want to return into the return from the render prop

/*======== Reading Context w. render props (#3) ======= */
//The doesn't output any new elements in the DOM (only the result of the render prop)
//To get the value of the consumer - we accept it as an argument to the render prop
//We'll refactor it to an arrow function to make it more terse (short)
//Looking in DevTools console = it's logging the object inside the context
//We have access to the value inside context in the function component

/*======== Reading Context w. render props (#4) ======= */
//We can now remove the value console.log()
//And use the value to disable the active button
//Now the disabled button is fully implemented now & the current language button is disabled
//Note:
//Context consumers aren't the only time we use render props
//...but they're the only way we'll look at render props for now
