/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Option = props => (
  <div className="option">
    <p className="option__text">{props.count}. {props.optionText}</p>
    <button
      className="button button--link"
      // eslint-disable-next-line no-unused-vars
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
  </div>
);

export default Option;
