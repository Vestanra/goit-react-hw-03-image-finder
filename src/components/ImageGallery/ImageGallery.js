import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";
import PropTypes from 'prop-types';


export const ImageGallery = ({items}) => {
    return (
        <div>
            <Gallery>
                {items.map((item) => (<ImageGalleryItem
                    key={item.id}
                    item={item}
                    />)
                )}
            </Gallery>            
        </div>
    )
}

ImageGallery.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
}