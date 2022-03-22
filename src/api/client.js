import axios from "axios";
import router from "@/router";
import store from "@/store";

export const defaultClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});

defaultClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      await store.dispatch("logout");
      router.push({ name: "Login" });
    }
    return Promise.reject(error);
  }
);

export const setAuthHeader = (authHeader) => {
  defaultClient.defaults.headers.common["Authorization"] = authHeader;
};

export const removeAuthHeader = () => {
  delete defaultClient.defaults.headers.common["Authorization"];
};
