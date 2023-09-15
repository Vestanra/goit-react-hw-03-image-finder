import { Component } from "react";
import { Modal } from "../Modal/Modal";
import { Img, ImgWrapper } from "./ImageGalleryItem.styled";
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
    state = {
        modalImg: '',
        modalIsOpen: false,
    }

    openModal = (modalImg) => {
        this.setState({ modalImg, modalIsOpen: true });
    }
    closeModal = () => {
        this.setState({ modalIsOpen: false });
    } 
    onBackdropeClick = (evt) => {
        if (evt.target === evt.currentTarget) {
            this.closeModal();
        }
    }


    render() {
        const { item: { tags, webformatURL, largeImageURL } } = this.props;
        const { modalImg, modalIsOpen} = this.state;
        return (
            <ImgWrapper>
                <Img
                    alt={tags}
                    src={webformatURL}
                    onClick={()=>this.openModal(largeImageURL, tags)}
                    loading="lazy"></Img>
                <Modal img={modalImg}
                    modalIsOpen={modalIsOpen}
                    closeModal={this.closeModal}
                    onBackdropeClick={this.onBackdropeClick}
                     />
            </ImgWrapper>
        )
    }
}

ImageGalleryItem.propTypes = {
    tags: PropTypes.string,
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
}

