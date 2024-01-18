import React from 'react';
import ReactModal from 'react-modal';

import style from "./Modal.module.scss";

export function Modal ({ isOpen, onRequestClose, children }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
    className={style.Modal}
    >
      {children}
    </ReactModal>
  );
};