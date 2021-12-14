import { uuidv4 } from "../functions/uuidv4.fun.js";
// Task class
export default class Task {
    constructor(title,deadline,description,priority) {
        this.id = uuidv4();
        this.title = title;
        this.deadline = deadline;
        this.description = description;
        this.status = "todo";
        this.priority = priority;
    }

    editTask() {

    }

    changePriority() {

    }

    changeStatus() {

    }
}