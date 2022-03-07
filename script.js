var form = document.querySelector("form");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.addEventListener("click", toggleDone);
  ul.appendChild(li);
  input.value = "";

  const delBtn = document.createElement("button");
  const xBtn = document.createElement("i");
  delBtn.classList.add("cust_delete");
  xBtn.classList.add("fa", "fa-times");
  delBtn.appendChild(xBtn);
  li.append(delBtn);

  function toggleDone() {
    li.classList.toggle("done");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (inputLength() > 0) {
    createListElement();
  }
});

li.addEventListener("click", function () {});

//function createListItem(){
// Create li element, style it and append it to ul
// Create delete button, style it and append it to li
// Hide empty list text if li's exist
// Toggle line-through on click
// Delete item
//}

//1. 1. If you click on the list item, it toggles the .done  class on and off.

//2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

//3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)

/*
function createListItem() {
  // Create li element, style it and append it to ul
  var li = document.createElement('li');
  li.classList.add('listItem');
  li.append(document.createTextNode(input.value));
  li.addEventListener('click', toggleDone);
  ul.appendChild(li);
  input.value = "";
  
  // Create delete button, style it and append it to li
  var delBtn = document.createElement('button');
  var delX = document.createElement('i');
  delX.classList.add('fas', 'fa-times');
  delBtn.classList.add('custBtn');
  delBtn.appendChild(delX);
  delBtn.addEventListener('click', delItem);
  li.append(delBtn);
  
  // Hide empty list text if li's exist
  if(checkLis() > 0) {
    var emptyList = document.querySelector('h2');
    emptyList.style.display = "none";
  }
  
  // Toggle line-through on click
  function toggleDone() {
    li.classList.toggle('done');
  }
  
  // Delete item
  function delItem() {
    li.remove();
    if(checkLis() == 0) {
      var emptyList = document.querySelector('h2');
      emptyList.style.display = "block";
    }
  }
}
*/
