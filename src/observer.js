import { updateTaskCounterButton } from "./templates";

export default class Observer {
  constructor(type, counter) {
    this.type = type;
    this.counter = counter;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }

  get counter() {
    return this._counter;
  }

  set counter(value) {
    this._counter = value;
  }

  notify(value) {
    this._counter = value;
  }

  updateDOM(type, value) {
    updateTaskCounterButton(type, value);
  }
}
