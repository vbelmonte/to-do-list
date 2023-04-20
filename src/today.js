import {
  createPageHeadline, clearMainContent, createModuleTitle, createModuleContainer, createTaskContainer, createSolidPlusButton, createTaskList, showForm,
} from './templates';

import { dueTodayArray } from './localstorage';

export default function loadToday() {
  clearMainContent();

  const mainContentDiv = document.getElementById('main-content');
  const pageHeadline = createPageHeadline('Today');
  const moduleContainerDiv = createModuleContainer('today');
  const moduleTitleDiv = createModuleTitle('Due Today');
  const taskContainerDiv = createTaskContainer();
  const taskListDiv = createTaskList(dueTodayArray);

  moduleContainerDiv.appendChild(moduleTitleDiv);
  moduleContainerDiv.appendChild(taskContainerDiv);

  taskContainerDiv.appendChild(taskListDiv);

  mainContentDiv.appendChild(pageHeadline);
  mainContentDiv.appendChild(moduleContainerDiv);
}
