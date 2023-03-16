import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from 'store/authReducer/authOperation';
import { getCourses } from 'store/coursesReducer/coursesOperations';
import { reselect, select } from 'store/selectors/selectors';
import CoursesCard from './../CoursesCard/CoursesCard';
import { CustomCoursesGallery } from './CoursesGallery.styled';

const CoursesGallery = () => {
  const dispatch = useDispatch();
  const courses = useSelector(reselect.coursePagination);
  const isLoading = useSelector(select.courseIsLoading)

  useEffect(() => {
    dispatch(getToken())
      .unwrap()
      .then(() => dispatch(getCourses()));
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {courses && (
        <CustomCoursesGallery>
          {courses
            .map(course => {
              return (
                <CoursesCard key={course.id} course={course} />
              )
            })
          }
        </CustomCoursesGallery>
      )}
    </>
  );
};

export default CoursesGallery;
