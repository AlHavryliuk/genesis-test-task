import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from 'store/authReducer/authOperation';
import { getCourses } from 'store/coursesReducer/coursesOperations';
import { reselect, select } from 'store/selectors/selectors';
// import CoursesCard from './../CoursesCard/CoursesCard';
import { CustomCoursesGallery } from './CoursesGallery.styled';



const CoursesGallery = () => {
  const dispatch = useDispatch();
  const courses = useSelector(reselect.coursePagination);
  const isLoading = useSelector(select.courseIsLoading)
  const LazyCoursesCard = lazy(() =>
    import('./../CoursesCard/CoursesCard'))

  useEffect(() => {
    if (courses) return
    dispatch(getToken())
      .unwrap()
      .then(() => dispatch(getCourses()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {courses && (
        <CustomCoursesGallery>
          <Suspense fallback={<Loader />}>
            {courses
              .map(course => {
                return (
                  <LazyCoursesCard key={course.id} course={course} />
                )
              })
            }
          </Suspense>
        </CustomCoursesGallery>
      )}
    </>
  );
};

export default CoursesGallery;
