import { drag_to_drop } from "./event_drag_drop.js";

let item = (id) => {
  const new_form = document.getElementById(id + "_form");
  const new_input = document.getElementById(id + "_input");
  const new_ol = document.getElementById(id + "_ol");
  const new_folder = document.getElementById(id);

  new_form.addEventListener("submit", (event) => {
    event.preventDefault();

    const arr = [...new_folder.getElementsByTagName("li")];
    let length = arr.length;

    length++;
    let text = new_input.value;
    new_input.value = "";

    let new_item = document.createElement("li");
    new_item.id = id + length;
    new_item.textContent = text;
    new_ol.appendChild(new_item);
    new_item.draggable = "true";

    drag_to_drop(new_item.id);
  });
};

export { item };
