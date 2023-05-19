import createTaskDiv from './task-templates';
import loadProjectPage from './project-page';
import { inboxTaskArray } from './localstorage';

function createPageHeadline(pageName) {
  const pageNameDiv = document.createElement('div');

  pageNameDiv.classList.add('page-name');

  pageNameDiv.innerHTML = `<h1>${pageName}</h1>`;

  return pageNameDiv;
}

export function createPageDescription(description) {
  const descriptionDiv = document.createElement('div');

  descriptionDiv.innerHTML = `<h2>${description}</h2>`;

  return descriptionDiv;
}

function createModuleTitle(moduleTitle) {
  const moduleTitleDiv = document.createElement('div');

  moduleTitleDiv.innerHTML = `<h3>${moduleTitle}</h3>`;

  return moduleTitleDiv;
}

function createModuleContainer(moduleID) {
  const moduleContainerDiv = document.createElement('div');

  moduleContainerDiv.classList.add('module-container');
  moduleContainerDiv.id = moduleID;

  return moduleContainerDiv;
}

function createTaskContainer() {
  const taskContainerDiv = document.createElement('div');

  taskContainerDiv.classList.add('task-container');

  return taskContainerDiv;
}

function assignTaskListImg(page) {
  if (page === 'inbox' || page === 'project-tasks') {
    return '<img src="../src/assets/img/no-tasks-yet.svg">';
  }
  if (page === 'today' || page === 'week') {
    return '<img src="../src/assets/img/nothing-due.svg">';
  }
  if (page === 'completed') {
    return '<img src="../src/assets/img/no-tasks-projects-completed.svg">';
  }

  return '<img src="../src/assets/img/no-projects-yet.svg">';
}

function createTaskList(taskArray, page) {
  const taskListDiv = document.createElement('div');
  taskListDiv.classList.add('task-list');

  if (taskArray.length === 0) {
    taskListDiv.id = 'empty-list';

    const imgDiv = document.createElement('div');
    const img = assignTaskListImg(page);
    /* const img = '<img src="../src/assets/img/no-tasks-yet.svg">'; */

    imgDiv.innerHTML = `${img}`;
    imgDiv.id = 'empty-img';

    taskListDiv.appendChild(imgDiv);
  } else {
    for (let i = 0; i < taskArray.length; i += 1) {
      const task = createTaskDiv(taskArray[i]);
      taskListDiv.appendChild(task);
    }
  }

  return taskListDiv;
}

function createProjectListItem(taskObj) {
  const li = document.createElement('li');
  li.classList.add('nav-link');

  const svgDiv = document.createElement('div');
  svgDiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="nav-icon"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z"></path></svg>';
  li.appendChild(svgDiv);

  const projectNameDiv = document.createElement('div');
  const h6 = document.createElement('h6');

  h6.innerHTML = taskObj.name;
  projectNameDiv.appendChild(h6);
  li.appendChild(projectNameDiv);

  return li;
}

function assignProjectIDName(projectObj) {
  return `nav-${projectObj.itemTag}`;
}

export function populateProjectsNavList(projectsArray) {
  const projectsNavList = document.getElementById('projects-list');

  if (projectsArray.length > 0) {
    for (let i = 0; i < projectsArray.length; i += 1) {
      const projectListItem = createProjectListItem(projectsArray[i]);
      projectListItem.id = assignProjectIDName(projectsArray[i]);

      projectsNavList.appendChild(projectListItem);
      projectListItem.addEventListener('click', () => {
        loadProjectPage(projectsArray[i]);
      });
    }
  }
}

function updateTaskList(taskObj) {
  const taskListDiv = document.getElementsByClassName('task-list')[0];
  const task = createTaskDiv(taskObj);

  if (taskListDiv.id === 'empty-list') {
    taskListDiv.removeAttribute('id');
    const emptyImg = document.getElementById('empty-img');
    emptyImg.remove();
  }

  taskListDiv.appendChild(task);
}

export function removeItemFromTaskList(obj) {
  const task = document.getElementsByClassName(obj.itemTag)[0];
  const taskListDiv = document.getElementsByClassName('task-list')[0];

  taskListDiv.removeChild(task);
}

export function updateProjectList(projectObj) {
  const taskListDiv = document.getElementsByClassName('task-list')[0];
  const project = createTaskDiv(projectObj);

  if (taskListDiv.id === 'empty-list') {
    taskListDiv.removeAttribute('id');
    const emptyImg = document.getElementById('empty-img');
    emptyImg.remove();
  }

  taskListDiv.appendChild(project);
}

export function updateProjectNavColumn(projectObj) {
  const projectItem = createProjectListItem(projectObj);
  const projectsList = document.getElementById('projects-list');

  projectItem.addEventListener('click', () => {
    loadProjectPage(projectObj);
  });

  projectItem.id = assignProjectIDName(projectObj);
  projectsList.appendChild(projectItem);
}

export function removeItemFromProjectNavColumn(obj) {
  if (obj.classname === 'Project') {
    const projectsList = document.getElementById('projects-list');
    const projectItem = document.getElementById(assignProjectIDName(obj));

    projectsList.removeChild(projectItem);
  }
}

/** BUTTON TEMPLATES * */

function createSolidTextButton(text) {
  const button = document.createElement('button');

  button.classList.add('btn-solid');
  button.textContent = text;

  return button;
}

function createOutlineTextButton(text) {
  const button = document.createElement('button');

  button.classList.add('btn-outline');
  button.textContent = text;

  return button;
}

function createSolidPlusButton() {
  const button = document.createElement('button');

  button.classList.add('btn-solid');
  button.classList.add('btn-plus');

  button.innerHTML = '<img src="../src/assets/img/plus-solid.svg">';

  return button;
}

/** NOTIFICATION TEMPLATES * */

function createTaskCounterButton(type, number) {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.id = `${type}-notification`;

  if (type === 'today') {
    notification.classList.add('urgent');
  }

  const counter = document.createElement('h5');
  counter.classList.add('counter');
  counter.id = `${type}-counter`;

  counter.innerHTML = number;
  notification.appendChild(counter);

  const typeDiv = document.getElementById(type);
  typeDiv.appendChild(notification);
}

function removeTaskCounterButton(type) {
  const notification = document.getElementById(`${type}-notification`);
  notification.remove();
}

function incrementCounterButton(type, number) {
  const counter = document.getElementById(`${type}-counter`);

  switch (type) {
    case 'today':
      counter.innerHTML = number;
      break;
    case 'week':
      counter.innerHTML = number;
      break;
    case 'inbox':
      counter.innerHTML = number;
      break;
    default:
      break;
  }
}

export function updateTaskCounterButton(type, number) {
  if (document.getElementById(`${type}-counter`) === null || document.getElementById(`${type}-counter`) === undefined) {
    createTaskCounterButton(type, number);
  } else if (number === 0) {
    // remove the counter
    removeTaskCounterButton(type);
  } else {
    incrementCounterButton(type, number);
  }
}

/** BACK-END FUNCTIONS * */

function clearMainContent() {
  const mainContentDiv = document.getElementById('main-content');

  mainContentDiv.innerHTML = '';
}

export function clearProjectsNavList() {
  const projectsList = document.getElementById('projects-list');

  projectsList.innerHTML = '';
}

function closeForm(event) {
  event.preventDefault();

  const form = document.getElementsByClassName('form')[0];
  const addButton = document.getElementById('add-button');
  const emptyImgDiv = document.getElementById('empty-img');

  if (emptyImgDiv !== null) {
    emptyImgDiv.style.display = 'block';
  }
  addButton.style.display = 'block';
  form.style.display = 'none';
}

function showForm() {
  const form = document.getElementsByClassName('form')[0];
  const addbutton = document.getElementById('add-button');
  const emptyImgDiv = document.getElementById('empty-img');

  if (emptyImgDiv !== null) {
    emptyImgDiv.style.display = 'none';
  }
  addbutton.style.display = 'none';
  form.style.display = 'block';
}

export {
  createPageHeadline, clearMainContent, createModuleTitle, createModuleContainer, createTaskContainer, createSolidPlusButton, createTaskList, closeForm, showForm, updateTaskList,
};
