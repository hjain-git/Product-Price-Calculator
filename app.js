import { calculate } from "./core/calc.js";
import { fetchProductImage } from "./core/fetchImage.js";

window.calculate = calculate; // optional if needed globally

// On page load, setup initial listeners for existing product block
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");

  // Attach listeners to existing product(s)
  grid.querySelectorAll(".calculator").forEach(setupProductBlock);

  // Add Product button
  document.getElementById("add_prod").addEventListener("click", addProduct);

  // Remove Product button (event delegation)
  grid.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-button")) {
      const productDiv = e.target.closest(".calculator");
      if (productDiv) productDiv.remove();
    }
  });
});

// Setup event listeners inside a product block div
function setupProductBlock(productDiv) {
  // Calculate button
  const calcBtn = productDiv.querySelector(".calculate-btn");
  if (calcBtn) {
    calcBtn.addEventListener("click", () => calculate(productDiv));
  }

  // Product name - clear on first click
  const prodName = productDiv.querySelector(".prod_name");
  if (prodName) {
    prodName.addEventListener("click", function () {
      if (this.textContent.trim() === "") {
        this.textContent = "";
        this.focus();
      }
    });

    // Also clear on focus if empty
    prodName.addEventListener("focus", function () {
      if (this.textContent.trim() === "") {
        this.textContent = "";
      }
    });
  }

  // Product URL input - fetch image on input (debounced)
  const urlInput = productDiv.querySelector(".prod_url");
  const prodImage = productDiv.querySelector(".prod_image");

  if (urlInput && prodImage) {
    let timeoutId;
    urlInput.addEventListener("input", () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(async () => {
        const url = urlInput.value.trim();
        if (!url) {
          prodImage.src = "";
          return;
        }
        const imgUrl = await fetchProductImage(url);
        if (imgUrl) prodImage.src = imgUrl;
        else prodImage.src = "";
      }, 500); // 500ms debounce to avoid too many fetches
    });
  }

  // Add event listeners to update labels dynamically
  const prodUnit = productDiv.querySelector(".prod_unit");
  const userQty = productDiv.querySelector(".user_qty");
  const prodXUnit = productDiv.querySelector(".prod_x_unit");
  const prodUnitQty = productDiv.querySelector(".prod_unit_qty");

  if (prodUnit) {
    prodUnit.addEventListener("change", () => updateLabels(productDiv));
  }

  if (userQty) {
    userQty.addEventListener("input", () => updateLabels(productDiv));
  }

  if (prodXUnit && prodUnitQty) {
    prodXUnit.addEventListener("input", () => updateDisplayedQuantity(productDiv));
    prodUnitQty.addEventListener("input", () => updateDisplayedQuantity(productDiv));
  }

  updateLabels(productDiv);
  updateDisplayedQuantity(productDiv);
}

function updateDisplayedQuantity(productDiv) {
  const prodXUnit = productDiv.querySelector(".prod_x_unit");
  const prodUnitQty = productDiv.querySelector(".prod_unit_qty");
  const prodQty = productDiv.querySelector(".prod_qty");

  if (prodXUnit && prodUnitQty && prodQty) {
    const xUnit = parseFloat(prodXUnit.value) || 1;
    const unitQty = parseFloat(prodUnitQty.value) || 0;
    prodQty.value = xUnit * unitQty;
  }
}

function updateLabels(productDiv) {
  const prodUnitSelect = productDiv.querySelector(".prod_unit");
  const userQtyInput = productDiv.querySelector(".user_qty");
  const costPerUnitLabel = productDiv.querySelector(".cost_per_unit_price").previousElementSibling;
  const costPer100UnitLabel = productDiv.querySelector(".cost_per_100unit_price").previousElementSibling;
  const userQtyPriceLabel = productDiv.querySelector(".user_qty_price").previousElementSibling;

  if (prodUnitSelect && costPerUnitLabel && costPer100UnitLabel) {
    const selectedOption = prodUnitSelect.options[prodUnitSelect.selectedIndex];
    const unitText = selectedOption.text;
    costPerUnitLabel.textContent = `Cost per 1 ${unitText}:`;
    costPer100UnitLabel.textContent = `Cost per 100 ${unitText}:`;
  }

  if (userQtyInput && userQtyPriceLabel) {
    const userQty = userQtyInput.value || '<user input>';
    const selectedOption = prodUnitSelect.options[prodUnitSelect.selectedIndex];
    const unitText = selectedOption.text;
    userQtyPriceLabel.textContent = `Cost per ${userQty} ${unitText.split(' ')[0]} (as required by User):`;
  }
}

// Add a new product block to the grid
function addProduct() {
  const grid = document.getElementById("grid");
  const newDiv = document.createElement("div");
  newDiv.classList.add("calculator");

  newDiv.innerHTML = `
    <div class="remove_product">
      <button class="remove-button">
        <span class="btn-icon">🗑️</span>
        Remove Product
      </button>
    </div>
    <section>
      <div class="row">
        <h2 contenteditable="true" class="prod_name" placeholder="Enter Product Name"></h2>
      </div>

      <div class="row">
        <label>Product URL:</label>
        <input type="text" class="prod_url" placeholder="https://example.com/product" />
      </div>

      <div class="row">
        <div class="displayed_values">
          <label>x unit of product(op) shown:</label>
          <input type="number" class="prod_x_unit" placeholder="e.g. 1" value="1" />
        </div>

        <div class="displayed_values">
          <label>product quantity of 1 unit:</label>
          <input type="number" class="prod_unit_qty" placeholder="e.g. 10" />
        </div>

        <div class="displayed_values">
          <label>Displayed Product Quantity:</label>
          <div class="quantity-input-group">
            <input type="number" class="prod_qty" placeholder="e.g. 10" readonly />
            <select class="prod_unit">
              <option value="count">per piece</option>
              <option value="l">Liters (L)</option>
              <option value="ml">Milliliters (mL)</option>
              <option value="mg">Milligrams (mg)</option>
              <option value="gm">Grams (g)</option>
              <option value="kg">Kilograms (kg)</option>
            </select>
          </div>
        </div>

        <div class="displayed_values">
          <label>Displayed Price (₹):</label>
          <input type="number" class="prod_price" placeholder="e.g. 10" step="0.01" />
        </div>
      </div>

      <div class="row">
        <div class="displayed_values">
          <label>Required Quantity:</label>
          <input type="number" class="user_qty" placeholder="e.g. 4" />
        </div>
        <button class="calculate-btn">
          <span class="btn-icon">🧮</span>
          Calculate
        </button>
      </div>

      <div class="row">
        <div class="displayed_values">
          <label>Cost per 1 Unit:</label>
          <input type="number" class="cost_per_unit_price" readonly />
        </div>
        <div class="displayed_values">
          <label>Cost per 100 Unit:</label>
          <input type="number" class="cost_per_100unit_price" readonly />
        </div>
        <div class="displayed_values">
          <label>Cost as required by User:</label>
          <input type="number" class="user_qty_price" readonly />
        </div>
      </div>

      <div class="row">
        <img src="" alt="Product Image" class="prod_image" />
      </div>
    </section>
  `;

  grid.appendChild(newDiv);
  setupProductBlock(newDiv); // setup listeners on new block
}
