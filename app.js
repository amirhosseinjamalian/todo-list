const input = document.querySelector("input");
const addBtn = document.querySelector(".addBtn");
const taskList = document.querySelector(".taskList");

let mytaskArray;
let doneArray;

function addStorage(text) {
  mytaskArray.push(text);
  localStorage.setItem("mytask", mytaskArray);

  doneArray.push(false);
  localStorage.setItem("donetask", doneArray);
}

function createTask(text) {
  let li = document.createElement("li");
  li.textContent = text;
  li.innerHTML +=
    '<span class="trash"><i class="fa fa-trash"></i></span><span class="fa fa-check check"></span>';
  return li;
}

function addList() {
  if (input.value !== "") {
    let text = input.value;
    addStorage(text);
    let li = createTask(text);
    taskList.appendChild(li);
    input.value = "";
  }
}

addBtn.addEventListener("click", addList);
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addList();
  }
});

taskList.addEventListener("click", (e) => {
  if (e.target.nodeName === "I") {
    let target = e.target.parentElement.parentElement;
    mytaskArray.splice(mytaskArray.indexOf(target.textContent), 1);
    localStorage.setItem("mytask", mytaskArray);

    target.classList.add("remove");

    let children = Array.from(taskList.children);
    children.forEach((li, index) => {
      if (li.classList.contains("remove")) {
        doneArray.splice(index, 1);
      }
    });

    localStorage.setItem("donetask", doneArray);

    taskList.removeChild(target);
  }

  if (e.target.nodeName === "LI") {
    e.target.classList.toggle("done");
    let childrenArray = Array.from(taskList.children);

    childrenArray.forEach((li, index) => {
      if (li.classList.contains("done")) {
        doneArray[index] = true;
      } else {
        doneArray[index] = false;
      }
    });
    localStorage.setItem("donetask", doneArray);
  }
});

window.addEventListener("load", () => {
  if (localStorage.getItem("mytask")) {
    mytaskArray = localStorage.getItem("mytask").split(",");
    mytaskArray.forEach((text) => taskList.appendChild(createTask(text)));

    doneArray = localStorage.getItem("donetask").split(",");
    let children = Array.from(taskList.children);
    doneArray.forEach(
      (a, index) => a === "true" && children[index].classList.add("done")
    );
  } else {
    mytaskArray = [];
    doneArray = [];
  }
});
