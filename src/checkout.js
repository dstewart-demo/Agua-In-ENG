// src/checkout.js
// Demo checkout logic (Agua Inc. demo)
function applyDiscount(total, discountPercent) {
  if (!discountPercent) return total;
  return Number((total * (1 - discountPercent / 100)).toFixed(2));
}

module.exports = { applyDiscount };
