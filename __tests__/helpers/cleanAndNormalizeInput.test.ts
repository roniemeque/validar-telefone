import cleanAndNormalizeInput from "../../src/helpers/cleanAndNormalizeInput";

describe("CleanAndNormalizeInput tests", () => {
  test("should throw error when input is not a string or number", () => {
    // @ts-ignore
    expect(() => cleanAndNormalizeInput({})).toThrowError(
      "O input precisa ser string ou numérico"
    );
  });

  test("should return a valid string when input is numeric", () => {
    expect(cleanAndNormalizeInput(9999)).toBe("9999");
  });

  test("should return a string without common phone special chars", () => {
    expect(cleanAndNormalizeInput("+55 (99) 91234-4321")).toBe("5599912344321");
  });
});
