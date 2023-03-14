import React, { useEffect } from 'react';
import { CustomCoursesGallery } from './CoursesGallery.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from 'store/coursesReducer/coursesOperations';
import { getToken } from 'store/authReducer/authOperation';
import { reselect, select } from 'store/selectors/selectors';
import CoursesCard from './../CoursesCard/CoursesCard';
import Loader from 'components/Loader/Loader';

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
              console.log(course);
              console.log(courses);
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
