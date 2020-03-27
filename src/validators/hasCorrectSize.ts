const hasCorrectSize = (
  phone: string,
  {
    canHaveNinthDigit = true,
    hasArea = true,
    hasCountry = false,
    canHaveArea = false,
    canHaveCountry = false
  } = {}
) => {
  const minimum = [
    {
      enabled: hasArea,
      value: 2
    },
    {
      enabled: hasCountry,
      value: 2
    }
  ].reduce((total, { enabled, value }) => (enabled ? total + value : total), 8);

  const maximum = [
    {
      enabled: canHaveNinthDigit,
      value: 1
    },
    {
      enabled: canHaveArea,
      value: 2
    },
    {
      enabled: canHaveCountry,
      value: 2
    }
  ].reduce(
    (total, { enabled, value }) => (enabled ? total + value : total),
    minimum
  );

  return phone.length >= minimum && phone.length <= maximum;
};

export default hasCorrectSize;
