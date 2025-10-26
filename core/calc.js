// calculate.js
export function calculate(productDiv) {
  try {
    const prod_x_unit = parseFloat(
      productDiv.querySelector(".prod_x_unit").value
    );
    const qty = parseFloat(productDiv.querySelector(".prod_qty").value);
    const price = parseFloat(productDiv.querySelector(".prod_price").value);
    const userQty = parseFloat(productDiv.querySelector(".user_qty").value);

    const costPerUnit = price / qty;
    const costPer100Unit = (price / qty) * 100;

    productDiv.querySelector(".cost_per_unit_price").value =
      costPerUnit.toFixed(2);
    productDiv.querySelector(".cost_per_100unit_price").value =
      costPer100Unit.toFixed(2);

    if (!isNaN(userQty)) {
      const userCost = costPerUnit * userQty;
      productDiv.querySelector(".user_qty_price").value = userCost.toFixed(2);
    } else {
      productDiv.querySelector(".user_qty_price").value = "";
    }
  } catch (error) {
    console.error("Calculation error:", error);
  }
}
