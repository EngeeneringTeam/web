import React from 'react';
import PropTypes from 'prop-types';

const LocalizationSVG = (props) => (
  <svg width={props.width} height={props.height} viewBox="0 0 530.719 530.719">
    <circle cx="265.36" cy="197.619" r="89.304"/>
    <path d="M265.36,530.719c0,0,197.627-223.944,197.627-333.09C462.987,88.482,374.507,0,265.36,0
      C156.213,0,67.731,88.482,67.731,197.628C67.731,306.774,265.36,530.719,265.36,530.719z M265.36,61.171
      c75.352,0,136.448,61.085,136.448,136.448S340.712,334.066,265.36,334.066c-75.353,0-136.447-61.085-136.447-136.447
      S190.007,61.171,265.36,61.171z"/>
  </svg>
);

LocalizationSVG.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

export default LocalizationSVG;
