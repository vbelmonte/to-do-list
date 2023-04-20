export default class Project {
  constructor(projectName, projectDescription, dueDate, priority) {
    this.classname = this.constructor.name;
    this.name = projectName;
    this.description = projectDescription;
    this.dueDate = dueDate;
    this.priority = priority;
    this.inProgressTaskArray = [];
    this.completedTaskArray = [];
  }

  get classname() {
    return this._classname;
  }

  set classname(value) {
    this._classname = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(value) {
    this._dueDate = value;
  }

  get priority() {
    return this._priority;
  }

  set priority(value) {
    this._priority = value;
  }
}
