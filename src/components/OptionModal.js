import React, { Component } from 'react';
import ReactModal from 'react-modal';

const OptionModal = (props) => {
  return (
    <ReactModal
      isOpen={!!props.selectedOption}
      onRequestClose={() => props.handleModalDismiss()}
      contentLabel="Selected Option"
      ariaHideApp={false}
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
      <button className="button" onClick={() => props.handleModalDismiss()}>Okay</button>
    </ReactModal>
  ) 
}

export default OptionModal;