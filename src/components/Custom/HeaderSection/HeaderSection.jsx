import LightMode from 'components/LightMode/LightMode';
import React from 'react';
import CustomContainer from '../CustomContainer/CustomContainer';
import { CustomHeader, CustomTitle } from './HeaderSection.styled';

const HeaderSection = () => {
  return (
    <CustomHeader>
      <CustomContainer>
        <CustomTitle >
          <h1>Genesis Courses</h1>
          <LightMode />
        </CustomTitle>
      </CustomContainer>
    </CustomHeader>
  );
};

export default HeaderSection;
