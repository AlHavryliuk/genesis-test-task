import React from 'react';
import { CourseTitle, CustomCourseCard } from './CourseesCard.styled';

const CoursesCard = ({
  course: { previewImageLink, title, lessonsCount, rating, meta },
}) => {
  const { skills } = meta;
  return (
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
  );
};

export default CoursesCard;
