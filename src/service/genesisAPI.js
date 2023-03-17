import axios from 'axios';

const $privateHost = axios.create({});

// ========= Set token =============

$privateHost.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ========= Get token =============

export const fetchAuth = async () => {
  try {
    const { data } = await axios.get(
      'https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions'
    );
    return data;
  } catch (error) {
    console.log(error.response.data);
  }
};

// ========= Get courses list =============

export const fetchCourses = async () => {
  try {
    const {
      data: { courses },
    } = await $privateHost.get(
      'https://api.wisey.app/api/v1/core/preview-courses'
    );
    return courses;
  } catch (error) {
    console.log(error.response.data);
  }
};

// ========= Get more details about course =============

export const fetchCoursesById = async id => {
  try {
    const { data } = await $privateHost.get(
      `https://api.wisey.app/api/v1/core/preview-courses/${id}`
    );
    return data;
  } catch (error) {
    console.log(error.response.data);
  }
};
