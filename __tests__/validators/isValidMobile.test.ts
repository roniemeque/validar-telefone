import isValidMobile from "../../src/validators/isValidMobile";

describe("isValidMobile tests", () => {
  test("should return true when ninth digit is presente without area code", () => {
    expect(isValidMobile("981814545")).toBeTruthy();
  });
  test("should return true when ninth digit is presente with area code", () => {
    expect(isValidMobile("17993999393")).toBeTruthy();
  });
  test("should return true when ninth digit is presente with area and country code", () => {
    expect(isValidMobile("5517981814545")).toBeTruthy();
  });

  test("should return false when ninth digit is not present without area code", () => {
    expect(isValidMobile("281814545")).toBeFalsy();
  });
  test("should return false when ninth digit is not present with area code", () => {
    expect(isValidMobile("17281814545")).toBeFalsy();
  });
  test("should return false when ninth digit is not present with area and country code", () => {
    expect(isValidMobile("5517281814545")).toBeFalsy();
  });
});
