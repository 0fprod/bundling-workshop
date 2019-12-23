import React from "react"
// import reactLogo from '../../assets/images/react.png';
const reactLogo = require('../../assets/images/react.png');
const parcelLogo = require('../../assets/images/parcel.png');

export const ImageComponent = (() => {
  return (
    <div> 
      <img src={parcelLogo}></img>
      <img src={reactLogo}></img>
    </div>
  );
})