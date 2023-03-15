import React from 'react';
import { CustomHeader } from './HeaderSection.styled';

const HeaderSection = ({ children }) => {
  return (
    <CustomHeader>
      {children}
    </CustomHeader>
  );
};

export default HeaderSection;
