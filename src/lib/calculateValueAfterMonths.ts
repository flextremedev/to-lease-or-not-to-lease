export const calculateValueAfterMonths = (
  value: number | undefined,
  months: number | undefined
) => {
  if (value && months) {
    const years = Math.round(months / 12);
    let valueTemp = value;
    for (let i = 1; i <= years; i++) {
      valueTemp = i === 1 ? valueTemp * 0.75 : valueTemp * 0.95;
    }
    return valueTemp;
  }
  return NaN;
};
