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
    '/api/v1/auth/anonymous?platform=subscriptions'
  );
  return data;
};

export const fetchCourses = async () => {
  const {
    data: { courses },
  } = await $privateHost.get('/api/v1/core/preview-courses');
  return courses;
};

export const fetchCoursesById = async id => {
  const { data } = await $privateHost.get(`/api/v1/core/preview-courses/${id}`);
  return data;
};