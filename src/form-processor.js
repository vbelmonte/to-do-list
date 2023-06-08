import Task from './tasks';
import Project from './projects';
import addItemToStorage, {
  assignItemName, updateProjectItem, updateItemToStorage, deleteItemFromStorage,
} from './localstorage';
import {
  updateTaskList, updateTaskListEdit, updateProjectList, updateProjectNavColumn, deleteItem,
} from './templates';

export function processTaskForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due-date').value;
  const priority = document.getElementById('priority').value;
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
  const associatedProject = projectObj.itemTag;

  const taskObj = new Task(name, description, dueDate, priority, itemTag, status, associatedProject);

  projectObj.inProgressTaskArray.push(taskObj);

  updateProjectItem(projectObj);
  addItemToStorage(taskObj);
  updateTaskList(taskObj);
}

export function processModifyTaskForm(event, taskObj) {
  event.preventDefault();
  const name = document.getElementById('name-edit').value;
  const description = document.getElementById('description-edit').value;
  const dueDate = document.getElementById('due-date-edit').value;
  const priority = document.getElementById('priority-edit').value;
  const { itemTag } = taskObj;
  const { status } = taskObj;
  const { associatedProject } = taskObj;

  const editedTaskObj = new Task(name, description, dueDate, priority, itemTag, status, associatedProject);

  const updateResultArray = updateItemToStorage(editedTaskObj);

  updateTaskListEdit(editedTaskObj, updateResultArray);
}

export function processModifyProjectForm(event, projObj) {
  event.preventDefault();
  const name = document.getElementById('name-edit').value;
  const description = document.getElementById('description-edit').value;
  const dueDate = document.getElementById('due-date-edit').value;
  const priority = document.getElementById('priority-edit').value;
  const { itemTag } = projObj;
  const { status } = projObj;

  const editedProjectObj = new Project(name, description, dueDate, priority, itemTag, status);

  const updateResultArray = updateItemToStorage(editedProjectObj);

  updateTaskListEdit(editedProjectObj, updateResultArray);
}

export function processModifyProjectTaskForm(event, taskObj) {
  event.preventDefault();

  const name = document.getElementById('name-edit').value;
  const description = document.getElementById('description-edit').value;
  const dueDate = document.getElementById('due-date-edit').value;
  const priority = document.getElementById('priority-edit').value;
  const { itemTag } = taskObj;
  const { status } = taskObj;
  const { associatedProject } = taskObj;

  const editedSubTask = new Task(name, description, dueDate, priority, itemTag, status, associatedProject);

  const updateResultArray = updateItemToStorage(editedSubTask);

  updateTaskListEdit(editedSubTask, updateResultArray);
}

export function processDeleteTaskForm(event, taskObj) {
  event.preventDefault();

  deleteItem(taskObj);
  deleteItemFromStorage(taskObj);
}

export function processDeleteProjectForm(event, projObj) {
  event.preventDefault();

  deleteItem(projObj);
  deleteItemFromStorage(projObj);
}

export function processDeleteProjectTaskForm(event, subTaskObj) {
  event.preventDefault();

  deleteItem(subTaskObj);
  deleteItemFromStorage(subTaskObj);
}
