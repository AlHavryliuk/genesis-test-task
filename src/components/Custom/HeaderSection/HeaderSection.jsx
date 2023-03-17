import PropTypes from 'prop-types'
import { CustomHeader } from './HeaderSection.styled';

const HeaderSection = ({ children }) => {
  return (
    <CustomHeader>
      {children}
    </CustomHeader>
  );
};

HeaderSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderSection;
