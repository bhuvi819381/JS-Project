const minRange = document.querySelector(".min-range");
const maxRange = document.querySelector(".max-range");
const minInput = document.querySelector(".min-input");
const maxInput = document.querySelector(".max-input");
const range = document.querySelector(".range");
const errorMsg = document.querySelector(".error-msg");

const maxPrice = 10000;
const priceGap = 500;

function updateSlider() {
  const minVal = parseInt(minRange.value);
  const maxVal = parseInt(maxRange.value);

  if (maxVal - minVal < priceGap) {
    errorMsg.textContent = `Minimum difference should be ₹${priceGap}`;
    return;
  }

  errorMsg.textContent = "";
  minInput.value = minVal;
  maxInput.value = maxVal;

  const percentMin = (minVal / maxPrice) * 100;
  const percentMax = (maxVal / maxPrice) * 100;

  range.style.left = `${percentMin}%`;
  range.style.right = `${100 - percentMax}%`;
}

function updateInput() {
  let minVal = parseInt(minInput.value);
  let maxVal = parseInt(maxInput.value);

  if (minVal < 0) minVal = 0;
  if (maxVal > maxPrice) maxVal = maxPrice;

  if (maxVal - minVal < priceGap) {
    errorMsg.textContent = `Minimum difference should be ₹${priceGap}`;
    return;
  }

  errorMsg.textContent = "";
  minRange.value = minVal;
  maxRange.value = maxVal;
  updateSlider();
}

[minRange, maxRange].forEach(input => {
  input.addEventListener("input", updateSlider);
});

[minInput, maxInput].forEach(input => {
  input.addEventListener("input", updateInput);
});

updateSlider();
