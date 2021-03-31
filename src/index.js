let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  function fetchToys() {
    fetch("http://localhost:3000/toys")
    .then(response => response.json())
    .then(json => createToyCard(json))
  }

  function createToyCard(json) {
    let toyCollection = document.getElementById("toy-collection")

    json.forEach(toy => {
      let cardDiv = document.createElement("div")
      cardDiv.className = "card"
      toyCollection.appendChild(cardDiv)
    })
  }

  fetchToys()
});