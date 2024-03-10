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
const modalOpen = document.querySelector(".modal");
const modalBox = document.querySelector(".modal__box");
const productBtn = document.querySelectorAll(".product-card__add-to-cart");
const productCard = document.querySelectorAll(".product-card");

const url = window.location.href;
// console.log(url);
function openModal() {
  modalOpen.classList.add("open");
}
const modalBtn = document
  .querySelector(".my__modal-close")
  .addEventListener("click", function () {
    modalOpen.classList.remove("open");
  });
productBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let data = e.target.dataset.modelOpen;
    let idActiveModal = "";
    const ajax = fetch(`${url}?id=${data}`);
    ajax
      .then((response) => {
        console.log(response);
        const searchParams = new URL(response.url).searchParams;
        const id = searchParams.get("id");
        idActiveModal = id;
        return response.text();
      })
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const activeModal = doc.querySelector(`[data-modal=${idActiveModal}]`);
        modalBox.appendChild(activeModal);
        openModal();
      })
      .catch((error) => {
        console.log("error", error);
      });

    // productCard.forEach((modal) => {
    //   if (modal.dataset.modal == data) {
    //     openModal(modal);
    //     console.log(modal);
    //   } else {
    //     clearModal(modal);
    //   }
    // });
  });
});
function newModal() {}
