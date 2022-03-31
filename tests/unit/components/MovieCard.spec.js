import { shallowMount } from "@vue/test-utils";
import MovieCard from "@/components/MovieCard.vue";

const createComponent = () =>
  shallowMount(MovieCard, { propsData: { movie }, stubs: ["router-link"] });

const movie = {
  title: "Harry Potter and the Philosopher's Stone",
  genre: {
    id: 3,
    name: "Fantasy",
  },
  poster_url:
    "https://images-na.ssl-images-amazon.com/images/I/713KEd-8jyL._AC_SL1500_.jpg",
  length: 159,
  release_date: "2001-11-16",
  description:
    "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
};

describe("MovieCard", () => {
  it("shows movie title", () => {
    const wrapper = createComponent();
    expect(wrapper.find("h3").text()).toMatch(
      movie.title
    );
  });

  it("shows movie formatted movie length", () => {
    const wrapper = createComponent();
    expect(wrapper.find(".movie-card__length").text()).toMatch("2h 39min");
  });

  it("shows movie genre", () => {
    const wrapper = createComponent();
    expect(wrapper.find(".movie-card__genre").text()).toMatch("Fantasy");
  });
});
