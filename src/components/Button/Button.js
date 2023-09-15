import { LoadMore } from "./Button.styled";
import { Circles } from 'react-loader-spinner';
import PropTypes from 'prop-types';


export const Button = ({ onClick, loading }) => {
    return (
        <LoadMore type="button" onClick={onClick} disabled={loading}>
            { loading ? <Circles height="20px" width="100%" color="white"/> : <p>Load more</p>}</LoadMore>
    )
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
}