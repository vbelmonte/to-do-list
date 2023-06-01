export default class Project {
  constructor(projectName, projectDescription, dueDate, priority, itemTag, status) {
    this.classname = this.constructor.name;
    this.name = projectName;
    this.description = projectDescription;
    this.dueDate = dueDate;
    this.priority = priority;
    this.itemTag = itemTag;
    this.status = status;
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

  get itemTag() {
    return this._itemTag;
  }

  set itemTag(value) {
    this._itemTag = value;
  }

  get status() {
    return this._status;
  }

  set status(value) {
    this._status = value;
  }

  get inProgressTaskArray() {
    return this._inProgressTaskArray;
  }

  set inProgressTaskArray(value) {
    this._inProgressTaskArray = value;
  }

  get completedTaskArray() {
    return this._completedTaskArray;
  }

  set completedTaskArray(value) {
    this._completedTaskArray = value;
  }

  updateInProgressTaskArray(task) {
    const index = this.inProgressTaskArray.map().indexOf(task.itemTag);
    this.inProgressTaskArray[index] = task;
  }

  retrieveProjectSubTask(itemTag) {
    
  }
}
