import Task from './tasks';
import Project from './projects';
import addItemToStorage, { assignItemName, updateProjectItem, updateItemToStorage } from './localstorage';
import { updateTaskList, updateTaskListEdit, updateProjectList, updateProjectNavColumn, removeItemFromTaskList } from './templates';

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

  //push item to the project object's task array
  projectObj.inProgressTaskArray.push(taskObj);

  //update project object in local storage
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
  const itemTag = taskObj.itemTag;
  const status = taskObj.status;
  const associatedProject = taskObj.associatedProject;

  const editedTaskObj = new Task(name, description, dueDate, priority, itemTag, status, associatedProject);

  const updateResultArray = updateItemToStorage(editedTaskObj);

  // then update the task list with the edited task object
  updateTaskListEdit(editedTaskObj, updateResultArray);
}

export function processModifyProjectForm(event, projObj) {
  event.preventDefault();
  const name = document.getElementById('name-edit').value;
  const description = document.getElementById('description-edit').value;
  const dueDate = document.getElementById('due-date-edit').value;
  const priority = document.getElementById('priority-edit').value;
  const itemTag = projObj.itemTag;
  const status = projObj.status;

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
  const itemTag = taskObj.itemTag;
  const status = taskObj.status;
  const associatedProject = taskObj.associatedProject;

  const editedSubTask = new Task(name, description, dueDate, priority, itemTag, status, associatedProject);

  const updateResultArray = updateItemToStorage(editedSubTask);

  updateTaskListEdit(editedSubTask, updateResultArray);
}
