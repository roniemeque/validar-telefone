import validator from "../src";

describe("validator tests", () => {
  test("should return true for common use cases", () => {
    expect(validator("(17) 99399-9393")).toBeTruthy();
    expect(validator("(17) 3399-9393")).toBeTruthy();
  });

  test("should return false for invalid phones", () => {
    expect(validator("")).toBeFalsy();
    expect(validator("aa")).toBeFalsy();
    expect(validator("9999-9999")).toBeFalsy();
    expect(
      validator("(17) 99399-9393", { permitirCelular: false })
    ).toBeFalsy();
    expect(validator("(17) 29399-9393")).toBeFalsy();
  });

  test("should skip lenght validation", () => {
    expect(
      validator("9999-9999", {
        validarTamanho: false
      })
    ).toBeTruthy();
  });
});
