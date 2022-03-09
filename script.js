const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const quill = document.getElementById("quill");
const delBtn = document.getElementById("delBtn");

/*function inputLength() {
  return input.value.length;
}*/

//animate quill on userInput focus
input.addEventListener("focus", function () {
  quill.classList.add("spin");
});

function createListElement() {
  if (userInput.value.length > 0) {
    //create li element & append List ul
    const list = document.createElement("li");
    list.appendChild(document.createTextNode(`- ${input.value}`));
    list.addEventListener("click", toggleDone);
    ul.appendChild(list);
    //empty input field & remove focus
    input.value = "";
    input.blur();
    //remove quill spin animation
    quill.classList.remove("spin");

    function toggleDone() {
      list.classList.toggle("done");
    }
  }
}

//delete all done items
const delDone = function () {
  const elements = document.getElementsByClassName("done");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
};

delBtn.addEventListener("click", function () {
  delDone();
});

userInput.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    createListElement();
  }
});
