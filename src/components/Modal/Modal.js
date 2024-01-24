import ReactModal from 'react-modal'; 
import { ModalImg, StyledReactModal } from './Modal.styled';
import { Component } from 'react';
import PropTypes from 'prop-types';
ReactModal.setAppElement('#modal-root');

export class Modal extends Component {
  render() {
    const { img, modalIsOpen, closeModal } = this.props;
    
    return (
      <StyledReactModal
        contentLabel="Modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
        }}
      >
        <ModalImg src={img} />
      </StyledReactModal>
    );
  }
};

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
}