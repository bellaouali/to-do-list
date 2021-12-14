// import function uuidv4 for give as randum by id
import { uuidv4 } from "../functions/uuidv4.fun.js";

// create class project
export class Project {
  constructor(name, dueDate) {
    this.id = uuidv4();
    this.name = name;
    this.dueDate = dueDate;
    this.tasks = [];
    this.creationDate = new Date();
  }


  // this is method for delete project
  Delete_Project() {}

  // this is method for edit our project
  Edit_Project() {}

  // this is method for add new task
  AddTaskToProject() {}

  // this is method delete task
  RemoveTaskFromProject() {}
}
