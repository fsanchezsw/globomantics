/** @todo Change the locale & currency to the user's ones accordingly */
const currencyFormatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export { currencyFormatter };
