import { item } from "./add_items.js";
import { drag_to_drop } from "./event_drag_drop.js";
import { add } from "./add_folder.js";

let push = async (arr_name) => {
  let length = arr_name.length;
  let text = "";
  for (let i = 0; i < length; i++) {
    if (!arr_name[i]) {
      continue;
    }
    let element = document.getElementById(arr_name[i] + "_ol");
    text += arr_name[i] + "*" + element.outerHTML;
    if (i !== length - 1) text += "#";
  }
  await localStorage.setItem("update", text);
};

let arr_name = [];
let pull = async () => {
  const text_content = document.getElementById("text_content");

  let text = await localStorage.getItem("update");
  if (!text) return 0;
  let arr = text.split("#");

  arr.forEach((txt) => {
    let element = txt.split("*");
    add(element[0]);
    const new_ol = document.getElementById(element[0] + "_ol");
    let arr_text = element[1].split("</li>");
    arr_text.pop();
    if (arr_text.length > 1) {
      arr_text.forEach((value, index) => {
        let length = value.length;
        let i;
        for (i = length - 1; ; i--) {
          if (value[i] == ">") break;
        }
        let value_text = value.slice(i + 1);
        let new_item = document.createElement("li");
        new_item.id = element[0] + (index + 1);
        new_item.textContent = value_text;
        new_ol.appendChild(new_item);
        new_item.draggable = "true";

        drag_to_drop(new_item.id);
      });
    }
  });
};
export { push, pull, arr_name };
