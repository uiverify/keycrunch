const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const wholeMoney = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function formatPrice(amount: number): string {
  return Number.isInteger(amount) ? wholeMoney.format(amount) : money.format(amount);
}

export function formatTotal(amount: number): string {
  return money.format(amount);
}
