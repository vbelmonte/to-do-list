import {
  createModuleTitle, createPageHeadline, createModuleContainer, createTaskContainer, createSolidPlusButton, createTaskList, showForm, clearMainContent,
} from './templates';

import createForm from './form-template';

export default function loadProjectPage(projectObj) {
  clearMainContent();

  const projectName = projectObj.name;
  const projectInProgressTasks = projectObj.inProgressTaskArray;

  const mainContentDiv = document.getElementById('main-content');
  const pageHeadline = createPageHeadline(projectName);
  const moduleContainerDiv = createModuleContainer('my-tasks');
  const moduleTitleDiv = createModuleTitle('My Tasks');
  const taskContainerDiv = createTaskContainer();
  const addTaskButtonDiv = document.createElement('div');
  const addTaskButton = createSolidPlusButton();
  const taskListDiv = createTaskList(projectInProgressTasks, 'project-tasks');
  const formDiv = createForm('Project Task', projectObj);

  addTaskButtonDiv.appendChild(addTaskButton);
  addTaskButton.id = 'add-button';
  addTaskButton.onclick = showForm;

  moduleContainerDiv.appendChild(moduleTitleDiv);
  moduleContainerDiv.appendChild(taskContainerDiv);

  taskContainerDiv.appendChild(addTaskButtonDiv);
  taskContainerDiv.appendChild(formDiv);
  formDiv.style.display = 'none';
  taskContainerDiv.appendChild(taskListDiv);

  mainContentDiv.appendChild(pageHeadline);
  mainContentDiv.appendChild(moduleContainerDiv);
}
