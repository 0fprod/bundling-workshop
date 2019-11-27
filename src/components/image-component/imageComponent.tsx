import React from "react"
// import reactLogo from '../../assets/images/react.png';
const reactLogo = require('../../assets/images/react.png');
const webpackLogo = require('../../assets/images/webpack.png');

export const ImageComponent = (() => {
  return (
    <div> 
      <img src={webpackLogo.default}></img>
      <img src={reactLogo.default}></img>
    </div>
  );
})