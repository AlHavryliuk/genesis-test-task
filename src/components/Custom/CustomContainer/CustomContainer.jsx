import PropTypes from 'prop-types'
import { StyledContainer } from './CustomContainer.styled';

const CustomContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

CustomContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomContainer;
