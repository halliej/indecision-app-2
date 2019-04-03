/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => (
  <Modal
    // eslint-disable-next-line react/jsx-boolean-value
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleCloseModal}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleCloseModal}>Ok</button>
  </Modal>
);

export default OptionModal;
