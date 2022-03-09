const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const quill = document.getElementById("quill");
const delBtn = document.getElementById("delBtn");

function createListElement() {
  if (userInput.value.length > 0) {
    //create li element & append List ul
    const list = document.createElement("li");
    list.appendChild(document.createTextNode(`- ${input.value}`));
    list.addEventListener("click", toggleDone);
    ul.appendChild(list);

    //empty inputField & remove focus
    input.value = "";

    //remove quill spin animation
    quill.classList.remove("spin");

    //toggle text strikethrough on item focus -- this should be refactored if possible
    function toggleDone() {
      list.classList.toggle("done");
    }
  }
}

//delete all done items
const delDone = function () {
  const items = document.getElementsByClassName("done");
  while (items.length > 0) {
    items[0].parentNode.removeChild(items[0]);
  }
};

//animate quill while typing
input.addEventListener("keydown", function () {
  quill.classList.add("spin");
});

//add input filed to list on enter
userInput.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    createListElement();
  }
});

//call delete marked items from list
delBtn.addEventListener("click", function () {
  delDone();
});
