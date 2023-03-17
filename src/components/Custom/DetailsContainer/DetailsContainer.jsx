import PropTypes from 'prop-types';
import { StyledDetails } from './DetailsContainer.styled';

const DetailsContainer = ({ children }) => {
    return (
        <StyledDetails>{children}</StyledDetails>
    )
}

DetailsContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DetailsContainer