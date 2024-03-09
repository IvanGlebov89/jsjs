const counters = document.querySelectorAll("[data-counter]");
if (counters) {
  counters.forEach((counter) => {
    counter.addEventListener("click", (e) => {
      const target = e.target;
      if (target.closest(".counter__button")) {
        let value = parseInt(
          target.closest(".counter").querySelector("input").value
        );
        if (target.classList.contains("counter__increase")) {
          value++;
        } else {
          --value;
        }
        if (value <= 0) {
          value = 0;
        }
        target.closest(".counter").querySelector("input").value = value;
      }
    });
  });
}
const catalogHidden = document.querySelector(".catalog");
const productBtn = document.querySelectorAll(".product-card__add-to-cart");
const productCard = document.querySelectorAll(".product-card");
function openModal(elem) {
  elem.classList.add("_active");
}
productBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let data = e.target.dataset.modelOpen;
    productCard.forEach((modal) => {
      if (modal.dataset.modal == data) {
        console.log(modal);
        openModal(modal);
      }
    });
  });
});
