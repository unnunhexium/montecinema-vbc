import { imageAlt } from "@/helpers/index.js";

const movie = {
  id: 1,
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

describe("imageAlt", () => {
  test("to show movie title as part of alt attribute text", () => {
    expect(imageAlt(movie.title)).toBe(
      "An image from Harry Potter and the Philosopher's Stone film."
    );
  });
});
