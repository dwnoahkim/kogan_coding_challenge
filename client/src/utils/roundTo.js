export default (num, decimal) => {
  const calcDecimal = Math.pow(10, decimal);
  return Math.round(num * calcDecimal) / calcDecimal;
};