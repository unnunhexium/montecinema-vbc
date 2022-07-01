import { useGetters } from "vuex-composition-helpers";
import { getDate } from "@/helpers"

export const useScreeningsList = () => {
    const { screenings } = useGetters("movies", ["screenings"]);
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
