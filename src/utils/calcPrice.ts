export function calcPrice(price: number, discount_percentage: number) {
  const fullPrice = (price - (price * discount_percentage) / 100).toFixed(2);
  return fullPrice;
}
