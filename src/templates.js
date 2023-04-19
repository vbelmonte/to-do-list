import createTaskDiv from './task-templates';

function createPageHeadline(pageName) {
  const pageNameDiv = document.createElement('div');

  pageNameDiv.classList.add('page-name');

  pageNameDiv.innerHTML = `<h1>${pageName}</h1>`;

  return pageNameDiv;
}

function createProjectDescription(projDescription) {
  const projectDescH2 = document.createElement('h2');

  projectDescH2.innerHTML = `${projDescription}`;

  return projectDescH2;
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

function createTaskList(taskArray) {
  const taskListDiv = document.createElement('div');
  taskListDiv.classList.add('task-list');

  if (taskArray.length === 0) {
    taskListDiv.id = 'empty-list';

    const imgDiv = document.createElement('div');
    const img = '<img src="../src/assets/img/no-tasks-yet.svg">';

    imgDiv.innerHTML = `${img}`;
    imgDiv.id = 'empty-img';

    taskListDiv.appendChild(imgDiv);
  }
  else {
    for (let i = 0; i < taskArray.length; i += 1) {
      const task = createTaskDiv(taskArray[i]);
      taskListDiv.appendChild(task);
    }
  }

  return taskListDiv;
}

function updateTaskList(taskObj) {
  const taskListDiv = document.getElementsByClassName('task-list')[0];
  const task = createTaskDiv(taskObj);

  if (taskListDiv.id === 'empty-list') {
    taskListDiv.removeAttribute('id');
  }

  taskListDiv.appendChild(task);
}

/** BUTTON TEMPLATES **/

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

function clearMainContent() {
  const mainContentDiv = document.getElementById('main-content');

  mainContentDiv.innerHTML = '';
}

function closeForm() {
  const form = document.getElementsByClassName('form')[0];
  const addButton = document.getElementById('add-button');
  const emptyImgDiv = document.getElementById('empty-img');

  addButton.style.display = 'block';
  emptyImgDiv.style.display = 'block';
  form.style.display = 'none';
}

function showForm() {
  const form = document.getElementsByClassName('form')[0];
  const addbutton = document.getElementById('add-button');
  const emptyImgDiv = document.getElementById('empty-img');

  addbutton.style.display = 'none';
  emptyImgDiv.style.display = 'none';
  form.style.display = 'block';
}

export { createPageHeadline, createProjectDescription, clearMainContent, createModuleTitle, createModuleContainer, createTaskContainer, createSolidPlusButton, createTaskList, closeForm, showForm, updateTaskList };
