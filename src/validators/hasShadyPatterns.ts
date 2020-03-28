const hasShadyPatterns = (
  phone: string,
  { maxRepeatingDigits = 6 } = {}
): boolean => {
  // checking for repeating numbers
  // overall 6 impossible sequential numbers should not be possible
  if (/(.)\1{5,}/g.test(phone)) {
    return true;
  }

  return false;
};

export default hasShadyPatterns;
