const todos = ["eating", "sleeping", "working", "studying"];

const header = document.createElement("h1");
header.innerHTML = "Interactive Todo List";

const toDoList = todos.map((item) => {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.gap = "6px";
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkBox");
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      checkbox.style.accentColor = "#62de66";
      li.style.color = "#62de66";
    } else {
      checkbox.style.accentColor = "";
      li.style.color = "#2b2b2b";
    }
  });
  const ul = document.createElement("ul");

  //   const onclick = () => {
  //     li.style.color = "#62de66";
  //     checkbox.style.accentColor = "#62de66";
  //   };

  const li = document.createElement("li");
  li.innerHTML = item;
  li.setAttribute("key", item);
  li.style.color = "#2b2b2b";
  //   li.addEventListener("click", onclick);
  //   container.addEventListener("click", onclick);
  ul.appendChild(li);
  container.appendChild(ul);
  container.appendChild(checkbox);

  return container;
});

document.body.appendChild(header);
// document.body.appendChild(toDoList);
toDoList.forEach((item) => {
  return document.body.appendChild(item);
});
