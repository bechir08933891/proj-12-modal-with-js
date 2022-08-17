"use strict";

// bring all we need from html file
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const btnsShowModal = document.querySelectorAll(".show-modal");

// this function for close modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// this function for open modal
const openModal = function () {
  // remove a class from the modal div
  modal.classList.remove("hidden"); // we can do this modal.style.display = 'block'

  // remove hidden class from overlay
  overlay.classList.remove("hidden");
};

// tw we gonna loop through show modal btn and add event listner
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", openModal);
}

// work the close btn of modal
btnCloseModal.addEventListener("click", closeModal);

// work with overlay if we click it
overlay.addEventListener("click", closeModal);

// work with keyboard event
document.addEventListener("keydown", function (e) {
  // this help to know what key we press
  // console.log(e);

  if (e.key === "Escape") {
    // check if the modal class not contain hidden class
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
