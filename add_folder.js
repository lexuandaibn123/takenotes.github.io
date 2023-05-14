import { item } from "./add_items.js";
import { push } from "./push_pull.js";
import { arr_name } from "./push_pull.js";

const form = document.getElementById("input_folder");
const input = document.getElementById("add_folder");
const text_content = document.getElementById("text_content");
const check = (text) => {
  if (arr_name.find((element) => element === text)) {
    alert("Invalid name!");
    return -1;
  }
};

let add = (text) => {
  arr_name.push(text);
  input.value = "";
  let new_div = document.createElement("div");
  new_div.id = text + "_div";
  text_content.appendChild(new_div);

  let new_folder = document.createElement("details");
  new_folder.id = text;
  new_div.appendChild(new_folder);

  let new_summary = document.createElement("summary");
  new_summary.textContent = text;
  new_folder.appendChild(new_summary);

  let new_ol = document.createElement("ol");
  new_ol.id = text + "_ol";
  new_folder.appendChild(new_ol);

  let new_form = document.createElement("form");
  new_form.id = text + "_form";
  new_div.appendChild(new_form);

  let new_input = document.createElement("input");
  new_input.type = "text";
  new_input.placeholder = "Add item for " + text;
  new_input.id = text + "_input";
  new_input.required = true;
  new_form.appendChild(new_input);

  let new_button = document.createElement("button");
  new_button.textContent = "Add";
  new_button.id = text + "_button";
  new_form.appendChild(new_button);

  let new_delete = document.createElement("button");
  new_delete.textContent = "Delete Folder";
  new_delete.id = text + "_delete";
  new_delete.style.backgroundColor = "red";
  new_delete.style.width = "8vw";
  new_form.appendChild(new_delete);
  new_delete.addEventListener("click", (event) => {
    event.preventDefault();
    text_content.removeChild(new_div);
    arr_name.forEach((value, index) => {
      if (value == text) arr_name[index] = null;
    });
  });

  item(text);
};

let folder = () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let text = input.value;
    if (check(text) === -1) {
      input.value = "";
      return -1;
    }

    add(text);
  });
};

window.addEventListener("beforeunload", () => {
  push(arr_name);
});
export { folder };
export { add };
