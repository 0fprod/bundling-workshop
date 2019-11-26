import React from "react"
const reactLogo = require('../../assets/images/react.jpg');

export const ImageComponent = (() => {
  console.log(reactLogo)
  return (
    <div> 
      Image component works
      <img src={reactLogo.default}></img>
    </div>
  );
})