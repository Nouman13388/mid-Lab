var addButton = document.getElementById("add-btn");

addButton.addEventListener("click", () => {
  var add_item = document.getElementById("book-list");
  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.className = "form-check-input";
  var new_item = document.createElement("li");
  var editButton = document.createElement("button");
  editButton.type = "button";
  editButton.textContent = "Edit";
  editButton.className = "btn btn-primary btn-sm float-end";
  var removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = "Remove";
  removeButton.className = "btn btn-danger btn-sm float-end";
  new_item.className = "d-flex justify-content-between align-items-center list-group-item";
  new_item.textContent = "Title: " + document.getElementById("title").value + "   Author: " + document.getElementById("author").value;
  new_item.appendChild(checkBox);
  new_item.appendChild(editButton);
  new_item.appendChild(removeButton);
  add_item.appendChild(new_item);
});

var remove_btn = document.getElementById("book-list");

remove_btn.addEventListener("click", (e) => {
  if (e.target.className == "btn btn-danger btn-sm float-end") {
    var li = e.target.parentElement;
    remove_btn.removeChild(li);
  }
});

var editButton = document.getElementById("book-list");

editButton.addEventListener("click", (e) => {
    if (e.target.className == "btn btn-primary btn-sm float-end") {
      var li = e.target.parentElement;
      var addSection = document.createElement("section");
      addSection.className = "d-flex align-items-center";
      addSection.id = "add-section";
      addSection.innerHTML = '\
        <form class="container text-center">\
          <h3>Edit book</h3>\
          <div class="mb-3">\
            <input type="text" class="form-control" placeholder="Title" id="title">\
          </div>\
          <div class="mb-3">\
            <input type="text" class="form-control" placeholder="Author" id="author">\
          </div>\
          <button type="button" class="btn btn-primary d-flex justify-content-start" id="inner-edit-btn">Edit</button>\
        </form>\
      ';
      li.innerHTML = "";
      li.appendChild(addSection);
      li.getElementById('inner-edit-btn').addEventListener("click", () 
        
    }
  });

var checkBox = document.getElementById("book-list");
checkBox.addEventListener("change", (e) => {
  if (e.target.className == "form-check-input") {
    var li = e.target.parentElement;
    if (e.target.checked) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
  }
});
