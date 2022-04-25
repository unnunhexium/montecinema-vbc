import { defaultClient } from "./client";

export const API_BASE_URL = "http://localhost:3000";

export const MOVIES_URL = "movies";
export const SCREENINGS_URL = "seances";
export const HALL_URL = "halls";
export const RESERVATIONS_URL = "reservations";
export const USER_URL = "user"

export const getMovies = async () => {
  return await defaultClient.get(`${API_BASE_URL}/${MOVIES_URL}`);
};

export const getScreenings = async () => {
  return await defaultClient.get(`${API_BASE_URL}/${SCREENINGS_URL}`);
};

export const getMovieDetails = async (id: number) => {
  return await defaultClient.get(`${API_BASE_URL}/${MOVIES_URL}/${id}`);
};

export const getHallDetails = async (id: number) => {
  return await defaultClient.get(`${API_BASE_URL}/${HALL_URL}/${id}`);
};

export const getScreeningDetails = async (id: number) => {
  return await defaultClient.get(`${API_BASE_URL}/${SCREENINGS_URL}/${id}`);
};

export const getReservations = async () => {
  return await defaultClient.get(`${API_BASE_URL}/${RESERVATIONS_URL}`);
};

export const getUserData = async () => {
  return await defaultClient.get(`${API_BASE_URL}/${USER_URL}`);
};


export const postReservation = async (body: object) =>
  defaultClient.post("/reservations/online", body);
