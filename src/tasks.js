export default class Task {
  type = 'task';

  constructor(taskName, taskDescription, dueDate, priority) {
    this.name = taskName;
    this.description = taskDescription;
    this.dueDate = dueDate;
    this.priority = priority;
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
