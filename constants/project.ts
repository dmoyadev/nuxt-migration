export const PROJECT_API_URL = Object.freeze({
  GET_MANY: () => '/projects',
  CREATE_ONE: () => '/projects',
  GET_ONE: (id: number) => `/projects/${id}`,
  UPDATE_ONE: (id: number) => `/projects/${id}`,
  DELETE_ONE: (id: number) => `/projects/${id}`,
});
