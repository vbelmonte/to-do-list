import Task from './tasks';
import Project from './projects';
import addItemToStorage from './localstorage';
import { updateTaskList } from './templates';

export function processTaskForm(event) {
  event.preventDefault();
  const name = document.getElementById('name');
  const description = document.getElementById('description');
  const dueDate = document.getElementById('due-date');
  const priority = document.getElementById('priority');

  const taskObj = new Task(name.value, description.value, dueDate.value, priority.value);

  addItemToStorage(taskObj);
  updateTaskList(taskObj);
  /** updateTaskList() */
}

export function processProjectForm(event) {
  event.preventDefault();
  const name = document.getElementById('name');
  const description = document.getElementById('description');
  const dueDate = document.getElementById('due-date');
  const priority = document.getElementById('priority');

  const projectObj = new Project(name.value, description.value, dueDate.value, priority.value);

  addItemToStorage(projectObj);
  /** updateProjectList() */
}
