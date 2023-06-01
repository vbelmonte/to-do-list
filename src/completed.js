import {
  createPageHeadline, clearMainContent, createModuleTitle, createModuleContainer, createTaskContainer, createTaskList,
} from './templates';

import { completedArray } from './localstorage';

export default function loadCompleted() {
  clearMainContent();

  const mainContentDiv = document.getElementById('main-content');
  const pageHeadline = createPageHeadline('Completed');
  const moduleContainerDiv = createModuleContainer('completed');
  const moduleTitleDiv = createModuleTitle('My Completed Tasks');
  const taskContainerDiv = createTaskContainer();
  const taskListDiv = createTaskList(completedArray, 'completed');

  moduleContainerDiv.appendChild(moduleTitleDiv);
  moduleContainerDiv.appendChild(taskContainerDiv);

  taskContainerDiv.appendChild(taskListDiv);

  mainContentDiv.appendChild(pageHeadline);
  mainContentDiv.appendChild(moduleContainerDiv);
}
