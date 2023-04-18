import {
  createPageHeadline, clearMainContent, createModuleTitle, createModuleContainer, createTaskContainer, createSolidPlusButton, createTaskList, showForm
} from './templates';

import createForm from './form-template';

export default function loadInbox() {
  clearMainContent();

  const mainContentDiv = document.getElementById('main-content');
  const pageHeadline = createPageHeadline('Inbox');
  const moduleContainerDiv = createModuleContainer('my-tasks');
  const moduleTitleDiv = createModuleTitle('My Tasks');
  const taskContainerDiv = createTaskContainer();
  const addTaskButtonDiv = document.createElement('div');
  const addTaskButton = createSolidPlusButton();
  const taskArray = [];
  const taskListDiv = createTaskList(taskArray);
  const formDiv = createForm('Task');

  formDiv.style.display = 'none';

  addTaskButton.id = 'add-button';
  addTaskButton.onclick = showForm;

  addTaskButtonDiv.appendChild(addTaskButton);

  moduleContainerDiv.appendChild(moduleTitleDiv);
  moduleContainerDiv.appendChild(taskContainerDiv);

  taskContainerDiv.appendChild(addTaskButton);
  taskContainerDiv.appendChild(formDiv);
  taskContainerDiv.appendChild(taskListDiv);

  mainContentDiv.appendChild(pageHeadline);
  mainContentDiv.appendChild(moduleContainerDiv);
}
