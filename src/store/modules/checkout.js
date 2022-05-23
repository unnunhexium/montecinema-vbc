import { getReservations } from "@/api/movies";


const checkout = {
    namespaced: true,
    state: {
        seatsAndTickets: [],
        reservations: [],
    },
    mutations: {
        setSeatsAndTickets(state, seatsAndTickets) {
            state.seatsAndTickets = seatsAndTickets;
        },
        setReservations(state, reservations) {
            state.reservations = reservations;
        },
    },
    actions: {
        async setSeatsAndTickets({ commit }, payload) {
            commit("setSeatsAndTickets", payload)
        },
        async fetchReservations({ commit }) {
            const { data } = await getReservations();
            commit("setReservations", data);
        },
    },
    getters: {
        seatsAndTickets: (state) => state.seatsAndTickets,
        reservations: (state) => state.reservations,
    },
}

export default checkout;
