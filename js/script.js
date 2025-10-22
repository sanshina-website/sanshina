
const azButtons = document.querySelectorAll("#manufacturers-tab .az-btn");
const lists = document.querySelectorAll("#manufacturers-tab .manufacturer-list");

azButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    azButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const letter = btn.dataset.letter;
    lists.forEach(list => {
      list.classList.toggle("active", list.dataset.letter === letter);
    });
  });
});

document.querySelector("#manufacturers-tab .az-btn.active").click();
