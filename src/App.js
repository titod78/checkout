/**
 * Data object
 */
import pricingRules from "./config/pricingRules";

/**
 * Checkout class
 * @type {Class}
 */
import Checkout from "./classes/Checkout";

(function() {
  "use strict";

  /**
   * Checkout instance
   * We can use the same instance or a new instance for each case
   */
  const co = new Checkout(pricingRules);

  /**
   * Initialitze method
   * @return {void}
   */
  const init = () => {
    initExample1();
    initExample2();
    initExample3();
    initExample4();
  };

  const initExample1 = () => {
    co.scan("VOUCHER")
      .scan("TSHIRT")
      .scan("MUG");
    document.querySelector("#example-1").innerHTML = co.total();
  };

  const initExample2 = () => {
    co.scan("VOUCHER")
      .scan("TSHIRT")
      .scan("VOUCHER");
    document.querySelector("#example-2").innerHTML = co.total();
  };

  const initExample3 = () => {
    co.scan("TSHIRT")
      .scan("TSHIRT")
      .scan("TSHIRT")
      .scan("VOUCHER")
      .scan("TSHIRT");
    document.querySelector("#example-3").innerHTML = co.total();
  };

  const initExample4 = () => {
    co.scan("VOUCHER")
      .scan("TSHIRT")
      .scan("VOUCHER")
      .scan("VOUCHER")
      .scan("MUG")
      .scan("TSHIRT")
      .scan("TSHIRT");
    document.querySelector("#example-4").innerHTML = co.total();
  };

  init();
})();
