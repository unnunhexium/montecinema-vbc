import { useGetters } from "vuex-composition-helpers";
import { getDate } from "@/helpers"

export const screeningsList = () => {
    const { screenings } = useGetters(["screenings"]);
    function filterByMovie(id) {
        return screenings.value.filter((screening) => screening.movie == id);
    }
    function filterByDay(id, date) {
        return filterByMovie(id).filter(
            (screening) => getDate(screening.datetime) === getDate(date)
        );
    }

    return {
        getDate,
        filterByMovie,
        filterByDay,
        screenings
    }
}
