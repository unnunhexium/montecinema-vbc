import { shallowMount } from "@vue/test-utils";
import ScreeningCard from "@/components/ScreeningCard.vue";
import { toIncludeAnyMembers } from "jest-extended";
expect.extend({ toIncludeAnyMembers });

const createComponent = () =>
  shallowMount(ScreeningCard, {
    propsData: { filteredScreenings, movie },
  });

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

const filteredScreenings = [];

describe("ScreeningCard,", () => {
  it("shows movie poster", () => {
    const wrapper = createComponent();
    expect(wrapper.find("img").attributes("src")).toBeTruthy;
  });

  it("shows error message when there is no screenings for today", () => {
    const wrapper = createComponent();
    expect(wrapper.find("screening-card__alert")).toBeTruthy;
  });
});
