import React, {useState, useEffect} from 'react';

function Feature(props) {
  console.log(props)
  return (
    <div>
      {props.features.map(feature => (
        <div key={feature.feature}>{feature.feature}: {feature.value}</div>
      ))}
    </div>
  );
}

export default Feature;