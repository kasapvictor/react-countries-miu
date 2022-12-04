export const buildCurrenciesStr = (currencies) =>
  Object.entries(currencies)
    .map(([key, value]) => {
      return `${value.symbol} - ${value.name} (${key})`;
    })
    .join(', ');
