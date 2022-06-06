import React from 'react'
import ReactVivus from 'react-vivus'

import animatedFootprint from './img/footprint_animated.svg'

const MyComponent = () => (
  <ReactVivus
    id="foo"
    option={{
      file:  animatedFootprint,
      animTimingFunction: 'EASE',
      type: 'oneByOne',
      reverseStack: true,
      duration: 200,
      onReady: console.log
    }}
    style={{ height: '600px', width: '100%' }}
    callback={console.log}
  />
);
export default MyComponent;
 

