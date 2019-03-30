import Checkout from "../../src/classes/Checkout";
import pricingRules from "../../src/config/pricingRules";
import { applyDiscount, getDiscountAcumulated } from "../../src/utils/discounts";

describe("discounts utilities functionality", () => {
  const TSHIRT = "TSHIRT";

  test("Check if applyDiscount returns correct value", () => {
    expect(applyDiscount({ code: TSHIRT, price: 20 })).toBe(20);
  });

  test("Check if getDiscountAcumulated returns correct value", () => {
    const co = new Checkout(pricingRules);
    co.scan(TSHIRT).scan(TSHIRT);
    expect(getDiscountAcumulated()).toBe(3);
  });
});
