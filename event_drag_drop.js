let drag_to_drop = (id) => {
  let elem = document.getElementById(id);
  elem.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("id", id);
  });

  elem.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  elem.addEventListener("drop", (event) => {
    event.preventDefault();
    let id_drag = event.dataTransfer.getData("id");
    let elem_drag = document.getElementById(id_drag);
    let parent = elem.parentNode;
    let new_element = document.createElement("div");
    parent.appendChild(new_element);

    let next_elem = elem.nextSibling;
    let next_elem_drag = elem_drag.nextSibling;

    parent.insertBefore(elem_drag, next_elem);
    parent.insertBefore(elem, next_elem_drag);

    parent.removeChild(new_element);
  });
};

let delete_item = () => {
  let area_delete = document.getElementById("area_delete");
  area_delete.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  area_delete.addEventListener("drop", (event) => {
    event.preventDefault();
    let id = event.dataTransfer.getData("id");
    let elem = document.getElementById(id);
    let parent = elem.parentNode;
    parent.removeChild(elem);
  });
};

export { drag_to_drop, delete_item };
