import { closeForm, closeFormModal } from './templates';
import {
  processDeleteTaskForm,
  processModifyProjectForm, processModifyProjectTaskForm, processModifyTaskForm, processProjectForm, processProjectTaskForm, processTaskForm,
} from './form-processor';

function createCounter(input, maxLength) {
  const span = document.createElement('span');

  const counter = document.createElement('span');
  counter.id = 'counter';
  counter.innerHTML = maxLength;

  const max = document.createElement('span');
  max.innerHTML = `/${maxLength}`;

  span.appendChild(counter);
  span.appendChild(max);

  input.addEventListener('input', () => {
    counter.innerHTML = input.maxLength - input.value.length;
  });

  return span;
}

function createNameInput(type) {
  const nameDiv = document.createElement('div');
  const inputName = 'name';

  const nameSpan = document.createElement('span');
  nameSpan.classList.add('required');
  nameSpan.innerHTML = `${type} Name`;

  const nameLabel = document.createElement('label');
  nameLabel.htmlFor = inputName;
  nameLabel.appendChild(nameSpan);

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.maxLength = 50;
  nameInput.name = inputName;
  nameInput.id = inputName;
  nameInput.required = true;
  nameInput.placeholder = `${type} Name`;

  const nameCounter = createCounter(nameInput, nameInput.maxLength);
  nameLabel.appendChild(nameCounter);

  nameDiv.appendChild(nameLabel);
  nameDiv.appendChild(nameInput);

  return nameDiv;
}

function createNameInputEdit(type, taskObj) {
  const nameDiv = document.createElement('div');
  const inputName = 'name-edit';

  const nameSpan = document.createElement('span');
  nameSpan.classList.add('required');
  nameSpan.innerHTML = `${type} Name`;

  const nameLabel = document.createElement('label');
  nameLabel.htmlFor = inputName;
  nameLabel.appendChild(nameSpan);

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.maxLength = 50;
  nameInput.name = inputName;
  nameInput.id = inputName;
  nameInput.required = true;
  nameInput.value = taskObj.name;

  const nameCounter = createCounter(nameInput, nameInput.maxLength);
  nameLabel.appendChild(nameCounter);

  nameDiv.appendChild(nameLabel);
  nameDiv.appendChild(nameInput);

  return nameDiv;
}

function createDescriptionInput(type) {
  const descriptionDiv = document.createElement('div');
  const inputName = 'description';

  const descLabel = document.createElement('label');
  descLabel.htmlFor = inputName;
  descLabel.innerHTML = `${type} Description`;

  const descInput = document.createElement('textarea');
  descInput.maxLength = 140;
  descInput.name = inputName;
  descInput.id = inputName;
  descInput.placeholder = `${type} Description`;

  const descCounter = createCounter(descInput, descInput.maxLength);
  descLabel.appendChild(descCounter);

  descriptionDiv.appendChild(descLabel);
  descriptionDiv.appendChild(descInput);

  return descriptionDiv;
}

function createDescriptionInputEdit(type, taskObj) {
  const descriptionDiv = document.createElement('div');
  const inputName = 'description-edit';

  const descLabel = document.createElement('label');
  descLabel.htmlFor = inputName;
  descLabel.innerHTML = `${type} Description`;

  const descInput = document.createElement('textarea');
  descInput.maxLength = 140;
  descInput.name = inputName;
  descInput.id = inputName;
  descInput.value = taskObj.description;

  const descCounter = createCounter(descInput, descInput.maxLength);
  descLabel.appendChild(descCounter);

  descriptionDiv.appendChild(descLabel);
  descriptionDiv.appendChild(descInput);

  return descriptionDiv;
}

function createDueDateInput() {
  const dueDateDiv = document.createElement('div');
  const inputName = 'due-date';

  const dueDateSpan = document.createElement('span');
  dueDateSpan.classList.add('required');
  dueDateSpan.innerHTML = 'Due Date';

  const dueDateLabel = document.createElement('label');
  dueDateLabel.htmlFor = inputName;
  dueDateLabel.appendChild(dueDateSpan);

  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute('type', 'date');

  const minDate = new Date().toLocaleDateString('fr-ca');
  dueDateInput.min = minDate;
  dueDateInput.name = inputName;
  dueDateInput.id = inputName;
  dueDateInput.required = true;

  dueDateDiv.appendChild(dueDateLabel);
  dueDateDiv.appendChild(dueDateInput);

  return dueDateDiv;
}

function createDueDateInputEdit(taskObj) {
  const dueDateDiv = document.createElement('div');
  const inputName = 'due-date-edit';

  const dueDateSpan = document.createElement('span');
  dueDateSpan.classList.add('required');
  dueDateSpan.innerHTML = 'Due Date';

  const dueDateLabel = document.createElement('label');
  dueDateLabel.htmlFor = inputName;
  dueDateLabel.appendChild(dueDateSpan);

  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute('type', 'date');

  const minDate = new Date().toLocaleDateString('fr-ca');
  dueDateInput.min = minDate;
  dueDateInput.name = inputName;
  dueDateInput.id = inputName;
  dueDateInput.required = true;
  dueDateInput.value = taskObj.dueDate;

  dueDateDiv.appendChild(dueDateLabel);
  dueDateDiv.appendChild(dueDateInput);

  return dueDateDiv;
}

function createPriorityInput() {
  const priorityDiv = document.createElement('div');
  const inputName = 'priority';

  const prioritySpan = document.createElement('span');
  prioritySpan.classList.add('required');
  prioritySpan.innerHTML = 'Priority Level';

  const priorityLabel = document.createElement('label');
  priorityLabel.htmlFor = inputName;
  priorityLabel.appendChild(prioritySpan);

  const priorityInput = document.createElement('select');
  priorityInput.name = inputName;
  priorityInput.id = inputName;
  priorityInput.required = true;

  const low = document.createElement('option');
  low.value = 'low';
  low.text = 'Low';

  const medium = document.createElement('option');
  medium.value = 'medium';
  medium.text = 'Medium';

  const high = document.createElement('option');
  high.value = 'high';
  high.text = 'High';

  priorityInput.appendChild(low);
  priorityInput.appendChild(medium);
  priorityInput.appendChild(high);

  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(priorityInput);

  return priorityDiv;
}

function createPriorityInputEdit(taskObj) {
  const priorityDiv = document.createElement('div');
  const inputName = 'priority-edit';

  const prioritySpan = document.createElement('span');
  prioritySpan.classList.add('required');
  prioritySpan.innerHTML = 'Priority Level';

  const priorityLabel = document.createElement('label');
  priorityLabel.htmlFor = inputName;
  priorityLabel.appendChild(prioritySpan);

  const priorityInput = document.createElement('select');
  priorityInput.name = inputName;
  priorityInput.id = inputName;
  priorityInput.required = true;

  const low = document.createElement('option');
  low.value = 'low';
  low.text = 'Low';

  const medium = document.createElement('option');
  medium.value = 'medium';
  medium.text = 'Medium';

  const high = document.createElement('option');
  high.value = 'high';
  high.text = 'High';

  priorityInput.appendChild(low);
  priorityInput.appendChild(medium);
  priorityInput.appendChild(high);

  priorityInput.value = taskObj.priority;

  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(priorityInput);

  return priorityDiv;
}

function clearFormValues() {
  const name = document.getElementById('name');
  const description = document.getElementById('description');
  const dueDate = document.getElementById('due-date');
  const priority = document.getElementById('priority');
  const blank = '';

  name.value = blank;
  description.value = blank;
  dueDate.value = blank;
  priority.value = 'low';
}

function createCancelButton() {
  const cancelButton = document.createElement('button');
  cancelButton.classList.add('btn-outline');
  cancelButton.innerHTML = 'Cancel';
  cancelButton.onclick = function (event) {
    closeForm(event);
    clearFormValues();
  };

  return cancelButton;
}

function createCancelButtonEdit() {
  const cancelButton = document.createElement('button');
  cancelButton.classList.add('btn-outline');
  cancelButton.innerHTML = 'Cancel';
  cancelButton.onclick = function (event) {
    closeFormModal(event);
  };

  return cancelButton;
}

function createAddButton() {
  const addButton = document.createElement('input');
  addButton.classList.add('button');
  addButton.classList.add('btn-solid');
  addButton.setAttribute('type', 'submit');
  addButton.value = 'Add';

  return addButton;
}

function createModifyButton() {
  const modifyButton = document.createElement('input');
  modifyButton.classList.add('button');
  modifyButton.classList.add('btn-solid');
  modifyButton.setAttribute('type', 'submit');
  modifyButton.value = 'Modify';

  return modifyButton;
}

function createDeleteButton() {
  const deleteButton = document.createElement('input');
  deleteButton.classList.add('button');
  deleteButton.classList.add('btn-orange');
  deleteButton.setAttribute('type', 'submit');
  deleteButton.value = 'Delete';

  return deleteButton;
}

function createButtonsDiv() {
  const div = document.createElement('div');
  const cancel = createCancelButton();
  const add = createAddButton();

  div.classList.add('buttons');
  div.appendChild(cancel);
  div.appendChild(add);

  return div;
}

function createButtonsEditDiv() {
  const div = document.createElement('div');
  const cancel = createCancelButtonEdit();
  const modify = createModifyButton();

  div.classList.add('buttons');
  div.appendChild(cancel);
  div.appendChild(modify);

  return div;
}

function createWarningMessage(obj) {
  const div = document.createElement('div');
  const message = document.createElement('p');
  const warning = document.createElement('b');
  warning.innerHTML = 'This action cannot be undone.';
  message.appendChild(warning);

  if (obj.classname === 'Project') {
    const addition = 'The item you are deleting is a Project and contains its own tasks. Deleting this project will also delete these tasks.';
    message.appendChild(addition);
  }

  div.appendChild(message);

  return div;
}

function assignFormMethod(form, type, projectObj) {
  if (type === 'Task') {
    form.onsubmit = function (event) {
      processTaskForm(event);
      clearFormValues();
      closeForm(event);
    };
  } else if (type === 'Project') {
    form.onsubmit = function (event) {
      processProjectForm(event);
      clearFormValues();
      closeForm(event);
    };
  } else if (type === 'Project Task') {
    form.onsubmit = function (event) {
      processProjectTaskForm(event, projectObj);
      clearFormValues();
      closeForm(event);
    };
  } else if (type === 'Edit Task') {
    form.onsubmit = function (event) {
      processModifyTaskForm(event, projectObj);
      closeFormModal(event);
    };
  } else if (type === 'Edit Project') {
    form.onsubmit = function (event) {
      processModifyProjectForm(event, projectObj);
      closeFormModal(event);
    };
  } else if (type === 'Edit Project Task') {
    form.onsubmit = function (event) {
      processModifyProjectTaskForm(event, projectObj);
      closeFormModal(event);
    };
  } else if (type === 'Delete Task') {
    form.onsubmit = function (event) {
      processDeleteTaskForm(event, projectObj);
      closeFormModal(event);
    };
  } else if (type === 'Delete Project') {
    form.onsubmit = function (event) {

    };
  } else {
    form.onsubmit = function (event) {

    };
  }
}

export default function createForm(type, projectObj) {
  const formDiv = document.createElement('div');
  formDiv.classList.add('form');

  const inputsDiv = document.createElement('div');
  inputsDiv.classList.add('inputs');

  const nameInput = createNameInput(type);
  const descriptionInput = createDescriptionInput(type);

  inputsDiv.appendChild(nameInput);
  inputsDiv.appendChild(descriptionInput);

  const rightDiv = document.createElement('div');
  rightDiv.classList.add('bottom');

  const priorityInput = createPriorityInput();
  const dueDateInput = createDueDateInput();

  rightDiv.appendChild(dueDateInput);
  rightDiv.appendChild(priorityInput);

  inputsDiv.appendChild(rightDiv);

  const buttonsDiv = createButtonsDiv();

  const form = document.createElement('form');
  assignFormMethod(form, type, projectObj);
  form.appendChild(inputsDiv);
  form.appendChild(buttonsDiv);

  formDiv.appendChild(form);

  return formDiv;
}

export function createEditForm(type, projectObj) {
  const fieldset = document.createElement('fieldset');

  const legend = document.createElement('legend');
  legend.innerHTML = `<h3>${type}</h3>`;
  fieldset.appendChild(legend);

  const formDiv = document.createElement('div');
  formDiv.classList.add('modal-form');

  const inputsDiv = document.createElement('div');
  inputsDiv.classList.add('inputs');

  const nameInput = createNameInputEdit(type, projectObj);
  const descriptionInput = createDescriptionInputEdit(type, projectObj);

  inputsDiv.appendChild(nameInput);
  inputsDiv.appendChild(descriptionInput);

  const rightDiv = document.createElement('div');
  rightDiv.classList.add('bottom');

  const priorityInput = createPriorityInputEdit(projectObj);
  const dueDateInput = createDueDateInputEdit(projectObj);

  rightDiv.appendChild(dueDateInput);
  rightDiv.appendChild(priorityInput);

  inputsDiv.appendChild(rightDiv);

  const buttonsDiv = createButtonsEditDiv();

  const form = document.createElement('form');
  assignFormMethod(form, type, projectObj);
  fieldset.appendChild(inputsDiv);
  fieldset.appendChild(buttonsDiv);

  form.appendChild(fieldset);
  formDiv.appendChild(form);

  return formDiv;
}

export function createDeleteForm(type, obj) {
  const warningImg = document.createElement('img');
  warningImg.src = '../src/assets/img/triangle-exclamation-solid.svg';
  warningImg.classList.add('warning');

  const warningImgDiv = document.createElement('div');
  warningImgDiv.appendChild(warningImg);

  const warningQuestion = document.createElement('h5');
  warningQuestion.innerHTML = `Are you sure you want to delete this <b>${obj.classname.toUpperCase()}</b>?`;

  const warningQuestionDiv = document.createElement('div');
  warningQuestionDiv.appendChild(warningQuestion);

  const warningHeadline = document.createElement('div');
  warningHeadline.appendChild(warningImgDiv);
  warningHeadline.appendChild(warningQuestionDiv);
  warningHeadline.classList.add('flex');

  const warningMessage = createWarningMessage(obj);

  const cancelButton = createCancelButtonEdit();
  cancelButton.classList.add('btn-orange-outline');
  cancelButton.classList.remove('btn-outline');

  const deleteButton = createDeleteButton();

  const buttonsDiv = document.createElement('div');
  buttonsDiv.appendChild(cancelButton);
  buttonsDiv.appendChild(deleteButton);
  buttonsDiv.classList.add('buttons');

  const form = document.createElement('form');
  assignFormMethod(form, type, obj);
  form.appendChild(warningHeadline);
  form.appendChild(warningMessage);
  form.appendChild(buttonsDiv);

  const formDiv = document.createElement('div');
  formDiv.classList.add('modal-form');
  formDiv.classList.add('warning-modal');
  formDiv.appendChild(form);

  return formDiv;
}
