const card = document.querySelector(".card");
const rating = document.querySelectorAll(".rating");
const btn = document.querySelector("button");

let selected = false;
let getVal = "";

rating.forEach((r) => {
  r.addEventListener("click", () => {

    rating.forEach((el) => el.classList.remove("active"));

    r.classList.add("active");
    // r.style.backgroundColor = "red";
    selected = true;
    const label = r.querySelector("small");
    getVal = label.textContent;
    console.log(label.textContent);
  });
});

btn.addEventListener("click", () => {
  if (selected == true) {
    btn.style.cursor = "pointer";
    card.innerHTML = `<p class="heart">💖</p>
          <strong class="thanks">Thank You! </strong>
          <br>
          <strong>Feedback: ${getVal} </strong>
          `;
  } else {
    btn.style.cursor = "not-allowed";
  }
});
