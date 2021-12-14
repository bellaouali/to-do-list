import checkElementExist from "./checkElementExist.js";
import { Project } from "../classes/Project.class.js";

export default function projectDOM() {
  // getting data from localStorage
  let projects = JSON.parse(localStorage.getItem("projects"));
  // VARIABLES
  let buttonAddProject;
  let buttonEditProject;
  let deleteProjectButton;
  let cancelDeleteButton;
  let addnameValue;
  let editnameValue;
  let addDateValue;
  let editDateValue;
  let projects_list;
  let projectBread;
  let projectTitle;
  let projectTasks;
  let project;

  // add elements
  if (checkElementExist("btn-add-p")) {
    buttonAddProject = document.getElementById("btn-add-p");
  }
  // this is input for add name project
  if (checkElementExist("p-name")) {
    addnameValue = document.getElementById("p-name");
  }
  // this is input for add date project
  if (checkElementExist("p-date")) {
    addDateValue = document.getElementById("p-date");
  }

  // edit elements
  if (checkElementExist("btn-edit-p")) {
    buttonEditProject = document.getElementById("btn-edit-p");
  }
  // this is input for edit name project
  if (checkElementExist("p-edit-name")) {
    editnameValue = document.getElementById("p-edit-name");
  }
  // this is input for edit date project
  if (checkElementExist("p-edit-date")) {
    editDateValue = document.getElementById("p-edit-date");
  }

  // delete elements

  if (checkElementExist("popup-btn-delete")) {
    deleteProjectButton = document.getElementById("popup-btn-delete");
  }

  if (checkElementExist("popup-btn-cancel")) {
    cancelDeleteButton = document.getElementById("popup-btn-cancel");
  }

  if (checkElementExist("projects-table")) {
    projects_list = document.getElementById("projects-table");
  }

  // --------------------------------------
  // showing project data in project.html page
  // --------------------------------------
  const urlParams = new URLSearchParams(window.location.search);
  let projectID;
  if (urlParams.get("id") !== null) {
    projectID = urlParams.get("id");
  }

  if (projects !== null) {
    project = projects.filter((prj) => prj.id === projectID);
  }
  
  if (checkElementExist("project-breadcrump")) {
    projectBread = document.getElementById("project-breadcrump");
    projectBread.innerHTML = `&nbsp;/ ${project[0].name}`;
  }

  if (checkElementExist("project-title")) {
    projectTitle = document.getElementById("project-title");
    projectTitle.innerHTML = `${project[0].name}`;
    editnameValue.value = `${project[0].name}`;
  }
  
  // ---------------------------------------
  // delete project (including localStorage)
  if (checkElementExist("popup-btn-delete")) {
    deleteProjectButton.onclick = () => {
      localStorage.setItem("projects", JSON.stringify(projects.filter((prj) => prj.id !== project[0].id)));
      window.location.assign("http://127.0.0.1:5501/views/projects.html");
    };
  }

  // this function for check inputs value
  if(checkElementExist("btn-add-p")){

  // Empty Array To Store the projects
  let arrayOfProjects = [];

  // Check If There Data In LocalStorage
  if (localStorage.getItem("projects")) {
    arrayOfProjects = JSON.parse(localStorage.getItem("projects"));
  }
  getDataLocalFrom();

  // ---------------------------------------
  // Check If Element Exist
  if (checkElementExist("btn-add-p")) {
    // Botton Add Project
    buttonAddProject.onclick = function () {
      // Check If Not Empty Value
      if (addnameValue.value !== "" && addDateValue.value !== "") {
        // Add Project To Array Of Projects
        addProjectToArray(addnameValue.value, addDateValue.value);
        // Empty Input Field
        addnameValue.value = addDateValue.value = "";
      }

      // Add Projects To Empty Array Of Project
      function addProjectToArray(name, duedate) {
        // Data Project
        let project = new Project(name, duedate);
        // Push Project Data To Array Of Projects
        arrayOfProjects.push(project);
        // Add Project To Localstorage
        addToLocalStorage(arrayOfProjects);
        //
        getDataLocalFrom();
      }
    };
  }

  // Add Project Data To Localstorage
  function addToLocalStorage(arrayOfProjects) {
    // format data to srting  and stor it to local storge
    window.localStorage.setItem("projects", JSON.stringify(arrayOfProjects));
  }

  // Get Data From Local
  function getDataLocalFrom() {
    // Get Data
    let data = localStorage.getItem("projects");
    // Chech Data
    if (data !== null) {
      // Parse Data To Object Javascript
      arrayOfProjects = JSON.parse(data);
    }
    let htmlCode = `
                  <tr>
                    <th>Name</th>
                    <th>Created at</th>
                    <th>Finished tasks</th>
                    <th>Total tasks</th>
                    <th>Deadline</th>
                    <th>More</th>
                  </tr>
                  `;
    arrayOfProjects.forEach((project) => {
      htmlCode += `
                  <tr> 
                    <td><a href="./project.html?id=${project.id}">${project.name}</a></td>
                    <td>${project.creationDate}</td>
                    <td>27 tasks</td>
                    <td>${project.tasks.length} tasks</td>
                    <td class="dline">Today</td>
                    <td><img src="../assets/icons/more.svg" alt="all projects" width="18" height="5"></td>
                  </tr> 
                 `;
    });
      htmlCode += `
                  <tr>
                    <td id="Add-project"><img src="../assets/icons/add-svgrepo-com.svg" alt="all projects" width="17" height="18" class="mr-2">Add a project</td>
                  </tr>
                  `;

    if (checkElementExist("projects-table")) {
      projects_list.innerHTML = htmlCode;
    }
  }
}
}