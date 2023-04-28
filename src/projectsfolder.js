import {
  createPageHeadline, clearMainContent, createModuleTitle, createModuleContainer, createTaskContainer, createSolidPlusButton, createTaskList, showForm, clearProjectsNavList, populateProjectsNavList,
} from './templates';

import createForm from './form-template';

import { projectArray } from './localstorage';

export function loadProjectsNavList() {
  clearProjectsNavList();

  populateProjectsNavList(projectArray);
}

export default function loadProjects() {
  clearMainContent();

  const mainContentDiv = document.getElementById('main-content');
  const pageHeadline = createPageHeadline('Projects');
  const moduleContainerDiv = createModuleContainer('my-projects');
  const moduleTitleDiv = createModuleTitle('My Projects');
  const taskContainerDiv = createTaskContainer();
  const addTaskButtonDiv = document.createElement('div');
  const addTaskButton = createSolidPlusButton();
  const taskListDiv = createTaskList(projectArray, 'projects');
  const formDiv = createForm('Project');

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
