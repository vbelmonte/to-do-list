export default class Task {
  constructor(taskName, taskDescription, dueDate, priority, itemTag, status, associatedProject) {
    this.classname = this.constructor.name;
    this.name = taskName;
    this.description = taskDescription;
    this.dueDate = dueDate;
    this.priority = priority;
    this.itemTag = itemTag;
    this.status = status;
    this.associatedProject = associatedProject;
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

  get associatedProject() {
    return this._associatedProject;
  }

  set associatedProject(value) {
    this._associatedProject = value;
  }
}
