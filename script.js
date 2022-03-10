const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const quill = document.getElementById("quill");
const delBtn = document.getElementById("delBtn");
const li = document.querySelector("li");
let state = [];
let doned = [];

//get local storage items
window.onload = function () {
  const storage = localStorage.getItem("items");
  if (storage) state = JSON.parse(storage);
  renderState(state);
};

//event delegation
ul.addEventListener("click", function (e) {
  if (e.target.classList.contains("item")) {
    e.target.classList.toggle("done");
  }
});

//render local storage items
const renderState = function (state) {
  state.forEach((el) => {
    item = document.createElement("li");
    item.classList.add("item");
    item.appendChild(document.createTextNode(`${el}`));
    ul.appendChild(item);
  });
};

const createListElement = function () {
  if (userInput.value.length > 0) {
    //create li element & append List ul
    const item = document.createElement("li");
    item.classList.add("item");
    item.appendChild(document.createTextNode(`- ${input.value}`));
    ul.appendChild(item);
    state.push(`- ${input.value}`);

    //empty inputField & remove focus
    input.value = "";

    //remove quill spin animation
    quill.classList.remove("spin");

    localStorage.setItem("items", JSON.stringify(state));
  }
};

//delete all done items & clear text input inc quill animation
const ClearAndDelete = function () {
  const items = document.getElementsByClassName("done");
  input.value = "";
  quill.classList.remove("spin");

  //find items to delete
  while (items.length > 0) {
    const targetItem = items[0].innerHTML;
    items[0].parentNode.removeChild(items[0]);
    const localStorageState = JSON.parse(localStorage.getItem("items"));
    const itemIndex = localStorageState.indexOf(targetItem);

    //delete done items from local storage
    localStorageState.splice(itemIndex, 1);
    state.splice(itemIndex, 1);

    // refesh state to local storage
    localStorage.setItem("items", JSON.stringify(state));
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
