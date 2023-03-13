import { useEffect } from 'react';
import { fetchCourses } from 'service/genesisAPI';
import Header from './Header/Header';

export const App = () => {
  useEffect(() => {
    // fetchCourses();
    fetchCourses();
  }, []);

  return (
    <>
      <Header />
    </>
  );
};
