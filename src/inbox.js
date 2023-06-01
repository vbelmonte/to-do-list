import {
  createPageHeadline, clearMainContent, createModuleTitle, createPageDescription, createModuleContainer, createTaskContainer, createSolidPlusButton, createTaskList, showForm
} from './templates';

import createForm from './form-template';

import { inboxTaskArray } from './localstorage';

export default function loadInbox() {
  clearMainContent();

  const mainContentDiv = document.getElementById('main-content');
  const pageHeadline = createPageHeadline('Inbox');
  const pageDescription = createPageDescription('General list of tasks not belonging to any category or project.');
  const moduleContainerDiv = createModuleContainer('inbox');
  const moduleTitleDiv = createModuleTitle('My Tasks');
  const taskContainerDiv = createTaskContainer();
  const addTaskButtonDiv = document.createElement('div');
  const addTaskButton = createSolidPlusButton();
  const taskListDiv = createTaskList(inboxTaskArray, 'inbox');
  const formDiv = createForm('Task');

  addTaskButtonDiv.appendChild(addTaskButton);
  addTaskButton.id = 'add-button';
  addTaskButton.onclick = showForm;

  moduleContainerDiv.appendChild(moduleTitleDiv);
  moduleContainerDiv.appendChild(taskContainerDiv);

  taskContainerDiv.appendChild(addTaskButtonDiv);
  taskContainerDiv.appendChild(formDiv);
  formDiv.style.display = 'none';
  taskContainerDiv.appendChild(taskListDiv);

  const titleAndDescription = document.createElement('div');
  titleAndDescription.appendChild(pageHeadline);
  titleAndDescription.appendChild(pageDescription);
  titleAndDescription.classList.add('title-description');

  mainContentDiv.appendChild(titleAndDescription);
  mainContentDiv.appendChild(moduleContainerDiv);
}
