import jest from "jest-mock";
import Checkout from "../../src/classes/Checkout";
import pricingRules from "../../src/config/pricingRules";

describe("Checkout class methods functionality", () => {
  const VOUCHER = "VOUCHER";
  const TSHIRT = "TSHIRT";
  let co;

  beforeEach(() => {
    co = new Checkout(pricingRules);
  });

  afterEach(() => {
    co = null;
  });

  test("Check if scan is called with correct param", () => {
    const spy = jest.spyOn(co, "scan");
    co.scan(VOUCHER);
    expect(spy).toBeCalledWith(VOUCHER);
  });

  test("Check if scan returns instance", () => {
    const checkout = co.scan(VOUCHER);
    expect(checkout).toEqual(co);
  });

  test("Check if total returns data", () => {
    const data = pricingRules.find(item => item.code === TSHIRT);
    const price = `${data.price.toFixed(2)}€`;
    co.scan(TSHIRT);
    const total = co.total();
    expect(total).toEqual(price);
  });
});
