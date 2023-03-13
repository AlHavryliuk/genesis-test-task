import axios from 'axios';

export const $publicHost = axios.create({
  baseURL: `http://api.wisey.app`,
});

export const $privateHost = axios.create({
  baseURL: `http://api.wisey.app/api/v1/`,
  headers:
    'Bearer ' +
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Zjk5MTdhNy0wMjVhLTQ0NGUtYjg0Zi03NjdiYzA5Yjg3NWUiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MjczNjUsImV4cCI6MTY3OTYyNzM2NX0.9MZ2vtQbXXLZrP4Ega2M0ja2-isl7wxLD1dxkt7F4Pc',
});

export const token = {
  set: token => {
    $privateHost.defaults.headers.common.Authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Zjk5MTdhNy0wMjVhLTQ0NGUtYjg0Zi03NjdiYzA5Yjg3NWUiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MjczNjUsImV4cCI6MTY3OTYyNzM2NX0.9MZ2vtQbXXLZrP4Ega2M0ja2-isl7wxLD1dxkt7F4Pc`;
  },
  unSet: () => {
    $privateHost.defaults.headers.common.Authorization = ``;
  },
};
