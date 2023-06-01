import {
  createPageHeadline, clearMainContent, createModuleTitle, createModuleContainer, createTaskContainer, createTaskList,
} from './templates';

import { dueThisWeekArray, projectsDueThisWeekArray, tasksDueThisWeekArray } from './localstorage';

function loadProjectsWeek() {
  const projectsListDiv = createTaskList(projectsDueThisWeekArray, 'week');
  const taskContainerDiv = document.getElementsByClassName('task-container')[0];

  taskContainerDiv.innerHTML = '';
  taskContainerDiv.appendChild(projectsListDiv);
}

function loadTasksWeek() {
  const tasksListDiv = createTaskList(tasksDueThisWeekArray, 'week');
  const taskContainerDiv = document.getElementsByClassName('task-container')[0];

  taskContainerDiv.innerHTML = '';
  taskContainerDiv.appendChild(tasksListDiv);
}

function loadAll() {
  const allListDiv = createTaskList(dueThisWeekArray, 'week');
  const taskContainerDiv = document.getElementsByClassName('task-container')[0];

  taskContainerDiv.innerHTML = '';
  taskContainerDiv.appendChild(allListDiv);
}

function loadInitial(div) {
  loadAll();
  div.classList.add('active');
}

export default function loadWeek() {
  clearMainContent();

  const mainContentDiv = document.getElementById('main-content');
  const pageHeadline = createPageHeadline('Week');
  const moduleContainerDiv = createModuleContainer('week');
  const projectsDiv = createModuleTitle('Projects');
  const tasksDiv = createModuleTitle('Tasks');
  const allDiv = createModuleTitle('All');
  const taskContainerDiv = createTaskContainer();
  const taskListDiv = createTaskList(dueThisWeekArray, 'week');

  projectsDiv.classList.add('category');
  tasksDiv.classList.add('category');
  allDiv.classList.add('category');

  allDiv.addEventListener('click', loadAll);
  projectsDiv.addEventListener('click', loadProjectsWeek);
  tasksDiv.addEventListener('click', loadTasksWeek);

  const categoriesDiv = document.createElement('div');
  categoriesDiv.appendChild(allDiv);
  categoriesDiv.classList.add('categories');
  categoriesDiv.appendChild(projectsDiv);
  categoriesDiv.appendChild(tasksDiv);
  moduleContainerDiv.appendChild(categoriesDiv);
  moduleContainerDiv.appendChild(taskContainerDiv);

  taskContainerDiv.appendChild(taskListDiv);

  mainContentDiv.appendChild(pageHeadline);
  mainContentDiv.appendChild(moduleContainerDiv);

  function toggleActiveOff() {
    const categories = document.getElementsByClassName('category');
    for (let i = 0; i < categories.length; i += 1) {
      categories[i].classList.remove('active');
    }
  }

  (function toggleActiveClass() {
    const categories = document.getElementsByClassName('category');
    for (let i = 0; i < categories.length; i += 1) {
      categories[i].addEventListener('click', () => {
        toggleActiveOff();
        categories[i].classList.add('active');
      });
    }
  }());

  loadInitial(allDiv);
}
