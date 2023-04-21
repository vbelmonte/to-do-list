import {
  createPageHeadline, clearMainContent, createModuleTitle, createModuleContainer, createTaskContainer, createTaskList,
} from './templates';

import { dueThisWeekArray } from './localstorage';

export default function loadWeek() {
  clearMainContent();

  const mainContentDiv = document.getElementById('main-content');
  const pageHeadline = createPageHeadline('Week');
  const moduleContainerDiv = createModuleContainer('week');
  const moduleTitleDiv = createModuleTitle('Due This Week');
  const taskContainerDiv = createTaskContainer();
  const taskListDiv = createTaskList(dueThisWeekArray, 'week');

  moduleContainerDiv.appendChild(moduleTitleDiv);
  moduleContainerDiv.appendChild(taskContainerDiv);

  taskContainerDiv.appendChild(taskListDiv);

  mainContentDiv.appendChild(pageHeadline);
  mainContentDiv.appendChild(moduleContainerDiv);
}
