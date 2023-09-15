import ReactModal from 'react-modal'; 
import { ModalWrapper, ModalImg } from './Modal.styled';
import { Component } from 'react';
import PropTypes from 'prop-types';
ReactModal.setAppElement('#modal-root');

export class Modal extends Component {
  render() {
    const { img, modalIsOpen, onBackdropeClick, closeModal } = this.props;
    
    return (
      <ReactModal
        contentLabel="Modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
          <ModalWrapper onClick={onBackdropeClick}>
            <ModalImg src={img} />
          </ModalWrapper>
        </ReactModal>
    )
  }
}

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  onBackdropeClick: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
}