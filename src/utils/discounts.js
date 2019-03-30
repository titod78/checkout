import discounts from "../config/discounts";

const TWOFORONE = "twoforone";
const ACUMULATE = "acumulate";

let twoForOneDiscount = 0;
let acumulateDiscount = 0;
let discountAcumulated = 0;
let discountType;

function applyTwoForOneDiscount(price) {
  const discount = discounts[discountType];
  twoForOneDiscount++;
  if (twoForOneDiscount === discount.items) {
    price = 0;
    twoForOneDiscount = 0;
  }
  return price;
}

function updateDiscountAcumulated() {
  acumulateDiscount++;
}

function getDiscountAcumulated() {
  const discount = discounts[discountType];
  if (acumulateDiscount >= discount.items) {
    for (let i = 0; i < acumulateDiscount; i++) {
      discountAcumulated += discount.discount;
    }
  }
  return discountAcumulated;
}

function applyDiscount({ code, price }) {
  const type = discounts[code] && discounts[code].type;
  type && (discountType = code);
  type === TWOFORONE && (price = applyTwoForOneDiscount(price));
  type === ACUMULATE && updateDiscountAcumulated();
  return price;
}

function resetDiscounts() {
  twoForOneDiscount = 0;
  acumulateDiscount = 0;
  discountAcumulated = 0;
}

export { applyDiscount, getDiscountAcumulated, resetDiscounts };
