"use strict";

const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const quill = document.getElementById("quill");
const delBtn = document.getElementById("delBtn");
const li = document.querySelector("li");
let state = [];

////----- FUNCTIONS ---\\\\
//get local storage items
window.onload = () => {
  const storage = localStorage.getItem("items");
  if (storage) state = JSON.parse(storage);
  renderState(state);
};

//render local storage items
const renderState = state => {
  state.forEach(el => {
    createElement(`${el}`);
  });
};

//create new items from user input and set to local storage
const createListElement = () => {
  if (userInput.value.length > 0) {
    //call createElement
    createElement(`- ${input.value}`);

    //push new item to state
    state.push(`- ${input.value}`);

    //empty inputField & remove focus
    input.value = "";

    //remove quill spin animation
    quill.classList.remove("spin");

    //set local storage with new item
    localStorage.setItem("items", JSON.stringify(state));
  }
};

//create li element & append List ul
const createElement = textItem => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.appendChild(document.createTextNode(textItem));
  ul.appendChild(item);
};

//delete all done items & clear text input inc quill animation
const ClearAndDelete = () => {
  const items = document.getElementsByClassName("done");
  input.value = "";
  quill.classList.remove("spin");

  //find items to delete
  while (items.length > 0) {
    const targetItem = items[0].innerHTML;
    items[0].parentNode.removeChild(items[0]);
    const localStorageState = JSON.parse(localStorage.getItem("items"));
    const itemIndex = localStorageState.indexOf(targetItem);

    //delete done items from local storage & state
    localStorageState.splice(itemIndex, 1);
    state.splice(itemIndex, 1);

    // refesh state to local storage
    localStorage.setItem("items", JSON.stringify(state));
  }
};

///---- eventListeners ---\\\\

//event delegation --toggle done on selected item
ul.addEventListener("click", function (e) {
  if (e.target.classList.contains("item")) {
    e.target.classList.toggle("done");
  }
});

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
