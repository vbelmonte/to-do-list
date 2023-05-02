import Task from './tasks';
import Project from './projects';
import addItemToStorage, { allItemsArray, assignItemName, updateProjectItem } from './localstorage';
import { updateTaskList, updateProjectList, updateProjectNavColumn } from './templates';

export function processTaskForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due-date').value;
  const priority = document.getElementById('priority').value;
  /*const tagNumber = allItemsArray.length + 1;
  const itemTag = `tag-${tagNumber.toString()}`;*/
  const itemTag = assignItemName();
  const status = 'in-progress';

  const taskObj = new Task(name, description, dueDate, priority, itemTag, status);

  addItemToStorage(taskObj);
  updateTaskList(taskObj);
}

export function processProjectForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due-date').value;
  const priority = document.getElementById('priority').value;
  /*const tagNumber = allItemsArray.length + 1;
  const itemTag = `tag-${tagNumber.toString()}`;*/
  const itemTag = assignItemName();
  const status = 'in-progress';

  const projectObj = new Project(name, description, dueDate, priority, itemTag, status);

  addItemToStorage(projectObj);
  updateProjectList(projectObj);
  updateProjectNavColumn(projectObj);
}

export function processProjectTaskForm(event, projectObj) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due-date').value;
  const priority = document.getElementById('priority').value;
  const itemTag = assignItemName();
  const status = 'in-progress';

  const taskObj = new Task(name, description, dueDate, priority, itemTag, status);

  //push item to the project object's task array
  projectObj.inProgressTaskArray.push(taskObj);

  //update project object in local storage
  updateProjectItem(projectObj);

  addItemToStorage(taskObj);
  updateTaskList(taskObj);
}
