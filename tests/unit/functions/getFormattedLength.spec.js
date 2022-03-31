import { getFormattedLength } from "@/helpers/index.js";

describe("getFormattedLength", () => {
  test("get formatted movie length", () => {
    expect(getFormattedLength("134")).toBe("2h 14min");
  });
});
