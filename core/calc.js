// calculate.js
export function calculate(productDiv) {
  try {
    const qty = parseFloat(productDiv.querySelector(".prod_qty").value);
    const price = parseFloat(productDiv.querySelector(".prod_price").value);
    const userQty = parseFloat(productDiv.querySelector(".user_qty").value);

    if (isNaN(qty) || isNaN(price) || isNaN(userQty) || qty === 0) {
      alert(
        "Please enter valid numbers for quantity, price, and required quantity."
      );
      return;
    }

    const costPerUnit = price / qty;
        const costPer100Unit = (price / qty)*100;
    const userCost = costPerUnit * userQty;

    productDiv.querySelector(".cost_per_unit_price").value =
      costPerUnit.toFixed(2);
          productDiv.querySelector(".cost_per_100unit_price").value =
      costPer100Unit.toFixed(2);
    productDiv.querySelector(".user_qty_price").value = userCost.toFixed(2);
  } catch (error) {
    console.error("Calculation error:", error);
  }
}
