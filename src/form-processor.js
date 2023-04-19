import Task from './tasks';
import Project from './projects';

import addItemToStorage from './localstorage';

export function processTaskForm() {
  const name = document.getElementById('name');
  const description = document.getElementById('description');
  const dueDate = document.getElementById('due-date');
  const priority = document.getElementById('priority');

  const taskObj = new Task(name.value, description.value, dueDate.value, priority.value);

  addItemToStorage(taskObj);
}

export function processProjectForm() {
  const name = document.getElementById('name');
  const description = document.getElementById('description');
  const dueDate = document.getElementById('due-date');
  const priority = document.getElementById('priority');

  const projectObj = new Project(name.value, description.value, dueDate.value, priority.value);

  addItemToStorage(projectObj);
}
