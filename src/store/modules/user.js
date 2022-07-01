import * as authApi from "@/api/auth";
import { setAuthHeader, removeAuthHeader } from "@/api/client";
import { getUserData } from "@/api/movies";

const AUTH_HEADER_STORAGE_KEY = "auth-header";
const AUTH_TOKEN = localStorage.getItem(AUTH_HEADER_STORAGE_KEY);

const user = {
    namespaced: true,
    state: { authHeader: AUTH_TOKEN, userData: {} },
    mutations: {
        setAuthHeader(state, { authHeader }) {
            state.authHeader = authHeader;
            localStorage.setItem(AUTH_HEADER_STORAGE_KEY, authHeader);
        },
        resetAuthHeader(state) {
            state.authHeader = null;
            localStorage.removeItem(AUTH_HEADER_STORAGE_KEY);
        },
        setUserData(state, userData) {
            state.userData = userData;
        },
    },
    actions: {
        async login({ commit, dispatch, getters }, credentials) {
            if (getters.isLoggedIn) await dispatch("logout");
            const response = await authApi.login(credentials);
            const authHeader = response.headers["authorization"];
            setAuthHeader(authHeader);
            commit("setAuthHeader", { authHeader });
            commit("setUserData", response.data)
        },
        async logout({ commit, getters }) {
            if (!getters.isLoggedIn) return;
            removeAuthHeader();
            commit("resetAuthHeader");
        },
        async register(_, credentials) {
            await authApi.register(credentials);
        },
        async fetchUserData({ commit }) {
            const { data } = await getUserData();
            commit("setUserData", data);
        },
        restoreUserSession() {
            if (AUTH_TOKEN) {
                setAuthHeader(AUTH_TOKEN);
            }
        }
    },
    getters: {
        userData: (state) => state.userData,
        isLoggedIn: (state) => !!state.authHeader,
    }
}

export default user;
