import hasShadyPatterns from "../../src/validators/hasShadyPatterns";

describe("hasShadyPatterns tests", () => {
  test("should return false when there are too many repeated numbers", () => {
    expect(hasShadyPatterns("17988999999")).toBeTruthy();
    expect(hasShadyPatterns("17999999999")).toBeTruthy();
  });

  test("should return true when there are not too many repeated numbers", () => {
    expect(hasShadyPatterns("17988949949")).toBeFalsy();
    expect(hasShadyPatterns("17999494999")).toBeFalsy();
  });
});
