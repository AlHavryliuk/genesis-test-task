import axios from 'axios';
import { $privateHost } from './hosts';

export const fetchCourses = async () => {
  //   token.set();
  const data = await $privateHost.get(`auth/anonymous?platform=subscriptions`);
  console.log(data);
  return data;
};

export const getData = async () => {
  const data = await axios.get(
    `http://api.wisey.app/api/v1/core/preview-courses`
  );
  return data;
};
