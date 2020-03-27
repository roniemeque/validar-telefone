import hasCorrectSize from "../../src/validators/hasCorrectSize";

describe("hasCorrectSize tests", () => {
  test("should assert house or mobile phone lengths on default config", () => {
    expect(hasCorrectSize("1132324545")).toBeTruthy();
    expect(hasCorrectSize("11981817878")).toBeTruthy();

    expect(hasCorrectSize("2222")).toBeFalsy();
    expect(hasCorrectSize("11981817878111")).toBeFalsy();
  });

  test("should assert house or mobile phone lengths when hasCountry is on", () => {
    expect(
      hasCorrectSize("5532324545", {
        hasCountry: true,
        hasArea: false
      })
    ).toBeTruthy();

    expect(
      hasCorrectSize("32324545", {
        hasCountry: true,
        hasArea: false
      })
    ).toBeFalsy();
  });

  test("should assert house or mobile phone lengths when hasArea is on", () => {
    expect(
      hasCorrectSize("1132324545", {
        hasCountry: false,
        hasArea: true
      })
    ).toBeTruthy();

    expect(
      hasCorrectSize("32324545", {
        hasCountry: false,
        hasArea: true
      })
    ).toBeFalsy();
  });

  test("should assert house or mobile phone lengths when both hasArea and hasCountry is on", () => {
    expect(
      hasCorrectSize("551132324545", {
        hasCountry: true,
        hasArea: true
      })
    ).toBeTruthy();

    expect(
      hasCorrectSize("32324545", {
        hasCountry: true,
        hasArea: true
      })
    ).toBeFalsy();
  });

  test("should assert house or mobile phone lengths range when canHaveCountry is on", () => {
    expect(
      hasCorrectSize("32324545", {
        canHaveCountry: true,
        hasArea: false
      })
    ).toBeTruthy();

    expect(
      hasCorrectSize("5532324545", {
        canHaveCountry: true,
        hasArea: false
      })
    ).toBeTruthy();
  });

  test("should assert house or mobile phone lengths range when canHaveArea is on", () => {
    expect(
      hasCorrectSize("32324545", {
        canHaveArea: true,
        hasArea: false
      })
    ).toBeTruthy();

    expect(
      hasCorrectSize("1132324545", {
        canHaveArea: true,
        hasArea: false
      })
    ).toBeTruthy();
  });

  test("should return false when ninth digit is not allowed", () => {
    expect(
      hasCorrectSize("932324545", {
        canHaveNinthDigit: false,
        hasArea: false
      })
    ).toBeFalsy();
  });
});
