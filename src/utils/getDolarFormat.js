const getCurrencySystem = labelValue => {
  return `$${
    Math.abs(labelValue) >= 1.0e9
      ? (Math.abs(labelValue) / 1.0e9).toFixed(2) + 'b'
      : // Six Zeroes for Millions
      Math.abs(labelValue) >= 1.0e6
      ? (Math.abs(labelValue) / 1.0e6).toFixed(2) + 'm'
      : // Three Zeroes for Thousands
      Math.abs(labelValue) >= 1.0e3
      ? (Math.abs(labelValue) / 1.0e3).toFixed(2) + 'k'
      : Math.abs(labelValue)
  }`
}

const getCurrencyInDollar = priceUsd => {
  return Number(priceUsd).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}
export { getCurrencyInDollar, getCurrencySystem }
