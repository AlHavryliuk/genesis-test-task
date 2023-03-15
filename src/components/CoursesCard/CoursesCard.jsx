import { CustomNavLink } from 'components/Custom/CustomNavLink/CustomNavLink.styled';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { CourseTitle, CustomCourseCard } from './CourseesCard.styled';

const CoursesCard = ({
  course: { id, previewImageLink, title, lessonsCount, rating, meta },
}) => {
  const { skills } = meta;
  return (
    <CustomNavLink to={`/details/${id}`}>
      <CustomCourseCard>
        <ul className="top-slider">
          <li>

            {skills && <span>
              <b>Skills:</b> {skills.map(skill => skill).join(', ')}
            </span>}

          </li>
          <li>
            <span>
              <b>Number of lessons:</b> {lessonsCount}
            </span>
            <span>
              <b>Rating:</b> {rating}
            </span>
          </li>
        </ul>
        <img src={`${previewImageLink}/cover.webp`} alt="courses__image" />
        <CourseTitle>{title}</CourseTitle>
      </CustomCourseCard>
    </CustomNavLink>
  );
};

export default CoursesCard;
