import {
  createPageHeadline, clearMainContent, createModuleTitle, createModuleContainer, createTaskContainer, createTaskList,
} from './templates';

import { dueTodayArray, projectsDueTodayArray, tasksDueTodayArray } from './localstorage';

function loadProjectsToday() {
  const projectsListDiv = createTaskList(projectsDueTodayArray, 'today');
  const taskContainerDiv = document.getElementsByClassName('task-container')[0];

  taskContainerDiv.innerHTML = '';
  taskContainerDiv.appendChild(projectsListDiv);
}

function loadTasksToday() {
  const tasksListDiv = createTaskList(tasksDueTodayArray, 'today');
  const taskContainerDiv = document.getElementsByClassName('task-container')[0];

  taskContainerDiv.innerHTML = '';
  taskContainerDiv.appendChild(tasksListDiv);
}

function loadAll() {
  const allListDiv = createTaskList(dueTodayArray, 'today');
  const taskContainerDiv = document.getElementsByClassName('task-container')[0];

  taskContainerDiv.innerHTML = '';
  taskContainerDiv.appendChild(allListDiv);
}

function loadInitial(div) {
  loadAll();
  div.classList.add('active');
}

export default function loadToday() {
  clearMainContent();

  const mainContentDiv = document.getElementById('main-content');
  const pageHeadline = createPageHeadline('Today');
  const moduleContainerDiv = createModuleContainer('today');
  const projectsDiv = createModuleTitle('Projects');
  const tasksDiv = createModuleTitle('Tasks');
  const allDiv = createModuleTitle('All');
  const taskContainerDiv = createTaskContainer();
  const taskListDiv = createTaskList(dueTodayArray, 'today');

  projectsDiv.classList.add('category');
  tasksDiv.classList.add('category');
  allDiv.classList.add('category');

  allDiv.addEventListener('click', loadAll);
  projectsDiv.addEventListener('click', loadProjectsToday);
  tasksDiv.addEventListener('click', loadTasksToday);

  const categoriesDiv = document.createElement('div');
  categoriesDiv.classList.add('categories');
  categoriesDiv.appendChild(allDiv);
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
