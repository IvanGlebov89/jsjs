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
const catalogProduct = document.querySelector(".catalog");
const productBtn = document.querySelectorAll(".product-card__add-to-cart");
const productCard = document.querySelectorAll(".product-card");
const url = window.location.href;
console.log(url);
const ajax = fetch(url);
ajax
  .then((response) => {
    return response.json;
  })
  .then((card) => {
    console.log("card", card);
  })
  .catch((error) => {
    console.log("error", error);
  });

function openModal(elem) {
  elem.classList.add("_active");
}
function clearModal(elem) {
  elem.classList.add("hide");
}
productBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let data = e.target.dataset.modelOpen;
    productCard.forEach((modal) => {
      if (modal.dataset.modal == data) {
        openModal(modal);
        console.log(modal);
      } else {
        clearModal(modal);
      }
    });
  });
});
function catalogPush(elem, replace) {
  const catalog = document.createElement("div");
  catalog.className = "catalog";

  catalog.push(elem);
  replace.replaceWith(catalog);
}
