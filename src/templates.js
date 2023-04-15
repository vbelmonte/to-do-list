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

export { createPageHeadline, createProjectDescription, clearMainContent, createModuleTitle, createModuleContainer, createTaskContainer, createSolidPlusButton };
