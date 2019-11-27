import React from 'react';
import { ImageComponent } from '../image-component/imageComponent';

const classes = require('./HelloWorldComponentStyles');


export const HelloWorldComponent = () => {
  return (
    <div className={classes.flexCenter}>
      <h1> Hello world component works! </h1>
      <h4> Running in <span className={classes.sampleClass}>'{process.env.NODE_ENV}'</span> mode 🚀 !</h4>
      <div>
        <ImageComponent />
      </div>
      <div className={classes.flexCenter}>
        <h3> Environment variable! </h3>
        <div> { process.env.BASE_API } </div>
      </div>
    </div>
  )
}

