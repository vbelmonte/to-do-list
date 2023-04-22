export default class Task {
  constructor(taskName, taskDescription, dueDate, priority, itemTag) {
    this.classname = this.constructor.name;
    this.name = taskName;
    this.description = taskDescription;
    this.dueDate = dueDate;
    this.priority = priority;
    this.itemTag = itemTag;
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
}
