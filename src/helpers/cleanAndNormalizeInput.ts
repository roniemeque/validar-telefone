const cleanAndNormalizeInput = (phone: string | number): string => {
  if (typeof phone === "number") {
    return `${phone}`;
  }

  if (typeof phone === "string") {
    return phone.replace(/\D/g, "");
  }

  throw new Error("O input precisa ser string ou numérico");
};

export default cleanAndNormalizeInput;
