import Task from './tasks';
import Project from './projects';
import addItemToStorage, { allItemsArray } from './localstorage';
import { updateTaskList } from './templates';

export function processTaskForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due-date').value;
  const priority = document.getElementById('priority').value;
  const tagNumber = allItemsArray.length + 1;
  const itemTag = `tag-${tagNumber.toString()}`;
  const status = 'in-progress';

  const taskObj = new Task(name, description, dueDate, priority, itemTag, status);

  addItemToStorage(taskObj);
  updateTaskList(taskObj);
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
