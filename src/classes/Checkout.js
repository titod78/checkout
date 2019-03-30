import { applyDiscount, getDiscountAcumulated, resetDiscounts } from "../utils/discounts";

/**
 * Private methods
 */
function sum(price) {
  this.amount = this.amount + price;
}

function reset() {
  this.amount = 0;
  resetDiscounts();
}

export default class {
  constructor(pricingRules) {
    this.pricingRules = pricingRules;
    this.amount = 0;
  }

  scan(value) {
    const currentProduct = this.pricingRules.find(({ code }) => value === code);
    const price = applyDiscount(currentProduct);
    price && sum.call(this, price);
    return this;
  }

  total() {
    const amount = this.amount - getDiscountAcumulated();
    reset.call(this);
    return `${amount.toFixed(2)}€`;
  }
}
