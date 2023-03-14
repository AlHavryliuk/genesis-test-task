import CoursesGallery from 'components/CoursesGallery/CoursesGallery';
import PaginationButton from 'components/Paginations/PaginationButton';
import React from 'react';
import CustomContainer from './../../components/Custom/CustomContainer/CustomContainer';

const HomePage = () => {
  return (
    <CustomContainer>
      <CoursesGallery />
      <PaginationButton />
    </CustomContainer>
  );
};

export default HomePage;
