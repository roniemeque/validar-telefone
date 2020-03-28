import cleanAndNormalizeInput from "./helpers/cleanAndNormalizeInput";
import hasCorrectSize from "./validators/hasCorrectSize";

const validator = (
  phone: string | number,
  { mostrarLogs = false, validarTamanho = true } = {}
) => {
  try {
    const cleansed = cleanAndNormalizeInput(phone);

    if (validarTamanho && !hasCorrectSize(cleansed)) {
      return false;
    }

    return true;
  } catch (error) {
    if (mostrarLogs) {
      console.error(error);
    }
  }
  return false;
};

export default validator;
