export const numberFormatted = (count) => {
  const numberFormat = new Intl.NumberFormat('en-US', { style: 'decimal' });
  return numberFormat.format(count);
};
