import { getDayOfWeek } from "@/helpers/index.js";
import { toIncludeAnyMembers } from "jest-extended";
expect.extend({ toIncludeAnyMembers });

describe("getDayOfWeek", () => {
  test("get day of week based on date", () => {
    expect(getDayOfWeek("March 28, 2022")).toBe("Monday");
  });
});

describe("getDayOfWeek", () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  test("the output is a day of week", () => {
    expect([getDayOfWeek(new Date())]).toIncludeAnyMembers(days);
  });
});
