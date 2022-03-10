const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const quill = document.getElementById("quill");
const delBtn = document.getElementById("delBtn");
const li = document.querySelector("li");
let state = [];

//get local storage items
window.onload = function () {
  const storage = localStorage.getItem("items");
  if (storage) state = JSON.parse(storage);
  console.log("localstorage state: ", state);
  //renderState(state);
};
/*
//render local storage items
const renderState = function (state) {
  state.forEach(el => {
    //console.log(el);
    item = document.createElement("li");
    item.appendChild(document.createTextNode(`${el}`));
    item.addEventListener("click", function () {
      item.classList.toggle("done");
    });
    console.log(item);
    ul.appendChild(item);
  });
};
*/
const createListElement = function () {
  if (userInput.value.length > 0) {
    //create li element & append List ul
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(`- ${input.value}`));
    item.addEventListener("click", toggleDone);
    ul.appendChild(item);
    state.push(`- ${input.value}`);

    //empty inputField & remove focus
    input.value = "";

    //remove quill spin animation
    quill.classList.remove("spin");

    //toggle text strikethrough on item focus -- this should be refactored if possible
    function toggleDone() {
      item.classList.toggle("done");
    }
    localStorage.setItem("items", JSON.stringify(state));
  }
};

//delete all done items & clear text input inc quill animation
const ClearAndDelete = function () {
  const items = document.getElementsByClassName("done");
  input.value = "";
  quill.classList.remove("spin");
  while (items.length > 0) {
    items[0].parentNode.removeChild(items[0]);
  }
};

//animate quill while typing
input.addEventListener("keydown", function () {
  quill.classList.add("spin");
});

//add input field to list on enter
userInput.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    createListElement();
  }
});

//call delete marked items from list
delBtn.addEventListener("click", ClearAndDelete);
