import { createPageHeadline, createProjectDescription, clearMainContent, createModuleTitle, createModuleContainer, createTaskContainer, createSolidPlusButton } from './templates';

export function loadInbox() {
  clearMainContent();

  const mainContentDiv = document.getElementById('main-content');
  const pageHeadline = createPageHeadline('Inbox');
  const moduleContainerDiv = createModuleContainer('my-tasks');
  const moduleTitleDiv = createModuleTitle('My Tasks');
  const taskContainerDiv = createTaskContainer();
  const addTaskButton = createSolidPlusButton();

  moduleContainerDiv.appendChild(moduleTitleDiv);
  moduleContainerDiv.appendChild(taskContainerDiv);

  taskContainerDiv.appendChild(addTaskButton);

  mainContentDiv.appendChild(pageHeadline);
  mainContentDiv.appendChild(moduleContainerDiv);
}
