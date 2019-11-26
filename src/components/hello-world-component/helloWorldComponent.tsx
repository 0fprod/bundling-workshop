import React from 'react';
import { ImageComponent } from '../image-component/imageComponent';

export const HelloWorldComponent = () => {
  return (
    <div>
      <h1> Hello world component works! </h1>
      <h4> Running in '<strong>{process.env.NODE_ENV}</strong>' mode</h4>
      <div>
        <ImageComponent/>
      </div>
    </div>
  )
}

