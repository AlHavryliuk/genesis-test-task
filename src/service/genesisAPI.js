import axios from 'axios';

const $privateHost = axios.create({});

$privateHost.interceptors.request.use(config => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchAuth = async () => {
  const { data } = await axios.get(
    'https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions'
  );

  console.log(data);
  return data;
};

export const fetchCourses = async () => {
  const {
    data: { courses },
  } = await $privateHost.get(
    'https://api.wisey.app/api/v1/core/preview-courses'
  );
  console.table(courses);
  return courses;
};
