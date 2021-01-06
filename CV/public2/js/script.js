document.querySelector(".main__skills").addEventListener("click", (e) => {
  if (e.target.classList.contains("main__card")) {
    e.target.firstElementChild.classList.add("active");
  }

  if (e.target.classList.contains("main__card__info-close")) {
    e.target.parentElement.parentElement.classList.remove("active");
  }

});

