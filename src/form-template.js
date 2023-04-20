import { closeForm } from './templates';
import { processProjectForm, processTaskForm } from './form-processor';

function createNameInput(type) {
  const nameDiv = document.createElement('div');
  const inputName = 'name';

  const nameLabel = document.createElement('label');
  nameLabel.classList.add('required');
  nameLabel.htmlFor = inputName;
  nameLabel.innerHTML = `${type} Name`;

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.name = inputName;
  nameInput.id = inputName;
  nameInput.required = true;
  nameInput.placeholder = `${type} Name`;

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

  const descInput = document.createElement('input');
  descInput.setAttribute('type', 'text');
  descInput.name = inputName;
  descInput.id = inputName;
  descInput.placeholder = `${type} Description`;

  descriptionDiv.appendChild(descLabel);
  descriptionDiv.appendChild(descInput);

  return descriptionDiv;
}

function createDueDateInput() {
  const dueDateDiv = document.createElement('div');
  const inputName = 'due-date';

  const dueDateLabel = document.createElement('label');
  dueDateLabel.classList.add('required');
  dueDateLabel.htmlFor = inputName;
  dueDateLabel.innerHTML = 'Due Date';

  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.name = inputName;
  dueDateInput.id = inputName;
  dueDateInput.required = true;

  dueDateDiv.appendChild(dueDateLabel);
  dueDateDiv.appendChild(dueDateInput);

  return dueDateDiv;
}

function createPriorityInput() {
  const priorityDiv = document.createElement('div');
  const inputName = 'priority';

  const priorityLabel = document.createElement('label');
  priorityLabel.classList.add('required');
  priorityLabel.htmlFor = inputName;
  priorityLabel.innerHTML = 'Priority Level';

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

function createAddButton() {
  const addButton = document.createElement('input');
  addButton.classList.add('button');
  addButton.classList.add('btn-solid');
  addButton.setAttribute('type', 'submit');
  addButton.value = 'Add';

  return addButton;
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

function assignFormMethod(form, type) {
  if (type === 'Task') {
    form.onsubmit = function (event) {
      processTaskForm(event);
      clearFormValues();
    };
  } else {
    form.onsubmit = function (event) {
      processProjectForm(event);
    };
  }
}

export default function createForm(type) {
  const formDiv = document.createElement('div');
  formDiv.classList.add('form');

  const inputsDiv = document.createElement('div');
  inputsDiv.classList.add('inputs');

  const leftDiv = document.createElement('div');
  leftDiv.classList.add('left');

  const nameInput = createNameInput(type);
  const descriptionInput = createDescriptionInput(type);

  leftDiv.appendChild(nameInput);
  leftDiv.appendChild(descriptionInput);

  inputsDiv.appendChild(leftDiv);

  const rightDiv = document.createElement('div');
  rightDiv.classList.add('right');

  const priorityInput = createPriorityInput();
  const dueDateInput = createDueDateInput();

  rightDiv.appendChild(dueDateInput);
  rightDiv.appendChild(priorityInput);

  inputsDiv.appendChild(rightDiv);

  const buttonsDiv = createButtonsDiv();

  const form = document.createElement('form');
  assignFormMethod(form, type);
  form.appendChild(inputsDiv);
  form.appendChild(buttonsDiv);

  formDiv.appendChild(form);

  return formDiv;
}
