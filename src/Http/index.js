import * as axios from "axios";
import store from "../Redux/reduxStore.js";
import { refreshToken, isAuth } from "../Redux/Reducers/userReducer.js";
export const API_URL = "https://greencosmic-api.vercel.app/api";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

/**
 * Прикрепляем токены к запросам
 */
$api.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer " + store.getState().user.token;

  return config;
});
/**
 * Перезагрузка токена
 */
$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.response.config;
    console.log(error.response.status);
    // store.dispatch(isAuth(false));
    if (
      error.response.status === 401 &&
      error.response.config &&
      !error.response.config.retry
    ) {
      originalRequest.retry = true;
      try {
        const response = await axios.get("http://localhost:3001/api/refresh", {
          withCredentials: true,
        });

        store.dispatch(refreshToken(response.data));
        store.dispatch(isAuth(true));
        return $api.request(originalRequest);
      } catch (error) {
        console.log(error);
        return;
      }
    }
    throw error;
  }
);
export default $api;