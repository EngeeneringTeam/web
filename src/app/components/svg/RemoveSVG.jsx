import React from 'react';
import {number} from 'prop-types';

const RemoveSVG = (props) => (
  <svg width={props.width} height={props.height} viewBox="0 0 70 70">
    <polygon points="45.96,20.504 35,31.464 24.04,20.504 20.504,24.04 31.464,35 20.504,45.96 24.04,49.496 35,38.536 45.96,49.496   49.496,45.96 38.536,35 49.496,24.04 "/>
  </svg>
);

RemoveSVG.propTypes = {
  height: number,
  width: number,
};

export default RemoveSVG;
