import { CustomNavLink } from 'components/Custom/CustomNavLink/CustomNavLink.styled';
import PropTypes from 'prop-types';
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

CoursesCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.string.isRequired,
    previewImageLink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    lessonsCount: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    meta: PropTypes.shape({
      skills: PropTypes.arrayOf(PropTypes.string)
    })
  }).isRequired
};

export default CoursesCard;
