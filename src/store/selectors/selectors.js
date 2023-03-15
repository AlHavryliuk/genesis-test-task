import { createSelector } from 'reselect';

export const select = {
  courses: state => state.courses.courses,
  darkmode: state => state.theme.darkmode,
  page: state => state.page.page,
  maxpage: state => state.page.maxpage,
  courseIsLoading: state => state.courses.isLoading,
  details: state => state.details.details,
  detailsIsLoading: state => state.details.isLoading,
  currentVideo: state => state.video.currentVideo,
};

export const reselect = {
  coursePagination: createSelector(
    [select.page, select.courses, select.maxpage], // Arguments
    (page, courses) => {
      if (courses === null) return;
      const startPoint = (page - 1) * 10;
      const endPoint = page * 10;
      if (page === 1) {
        return courses.filter((el, index) => index < 10);
      }
      if (page > 1) {
        return courses.filter((el, index) => {
          return index >= startPoint && index < endPoint;
        });
      }
    }
  ),
};
