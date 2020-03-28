import cleanAndNormalizeInput from "./helpers/cleanAndNormalizeInput";
import hasCorrectSize from "./validators/hasCorrectSize";
import isValidMobile from "./validators/isValidMobile";
import hasShadyPatterns from "./validators/hasShadyPatterns";

const validator = (
  phone: string | number,
  {
    mostrarLogs = false,
    validarTamanho = true,
    codigoAreaPresente = true,
    codigoAreaPossivel = false,
    codigoPaisPresente = false,
    codigoPaisPossivel = false,
    permitirCelular = true,
    bloquearPadroesIncomuns = true
  } = {}
) => {
  try {
    const cleansed = cleanAndNormalizeInput(phone);

    if (
      validarTamanho &&
      !hasCorrectSize(cleansed, {
        hasArea: codigoAreaPresente,
        canHaveArea: codigoAreaPossivel,
        hasCountry: codigoPaisPresente,
        canHaveCountry: codigoPaisPossivel,
        canHaveNinthDigit: permitirCelular
      })
    ) {
      return false;
    }

    if (permitirCelular && !isValidMobile(cleansed)) {
      return false;
    }

    if (bloquearPadroesIncomuns && hasShadyPatterns(cleansed)) {
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
