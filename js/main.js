// import class project and array list for insert our projects
import checkElementExist from "./functions/checkElementExist.js";
import projectDOM from "./functions/project.dom.js"
import Task from "./classes/Task.class.js";

// calling projectDOM function
projectDOM();

// -----------------------------------------------------
// Everything related to popups
// -----------------------------------------------------

let popup = document.querySelector(".popup");

popup.onclick = (e) => {
  // toogling for the d-none class
  if (e.target.classList.contains("popup")) {
    e.target.classList.toggle("d-none");
    if (checkElementExist("add-project-pop")) {
      document.getElementById("add-project-pop").style.display = "none";
    }
    if (checkElementExist("delete-project-pop")) {
      document.getElementById("delete-project-pop").style.display = "none";
    }
    if (checkElementExist("edit-project-pop")) {
      document.getElementById("edit-project-pop").style.display = "none";
    }
  }
};

if (checkElementExist("Add-project")) {
  document.getElementById("Add-project").onclick = (e) => {
    // toogling for the d-none class
    popup.classList.toggle("d-none");
    document.getElementById("add-project-pop").style.display = "block";
    
  }
}

// delete project button
if (checkElementExist("delete-project")) {
  document.getElementById("delete-project").onclick = (e) => {
    console.log("delete");
    // toogling for the d-none class
    popup.classList.toggle("d-none");
    document.getElementById("delete-project-pop").style.display = "block";
  };
}

// edit project button
if (checkElementExist("edit-project")) {
  document.getElementById("edit-project").onclick = (e) => {
    console.log("edit");
    // toogling for the d-none class
    popup.classList.toggle("d-none");
    document.getElementById("edit-project-pop").style.display = "block";
  };
}
