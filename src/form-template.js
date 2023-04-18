function createNameInput() {
  const nameDiv = document.createElement('div');
  const inputName = 'name';

  const nameLabel = document.createElement('label');
  nameLabel.classList.add('required');
  nameLabel.htmlFor = inputName;

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.name = inputName;
  nameInput.id = inputName;
  nameInput.required = true;

  nameDiv.appendChild(nameLabel);
  nameDiv.appendChild(nameInput);

  return nameDiv;
}

function createDescriptionInput() {
  const descriptionDiv = document.createElement('div');
  const inputName = 'description';

  const descLabel = document.createElement('label');
  descLabel.htmlFor = inputName;

  const descInput = document.createElement('input');
  descInput.setAttribute('type', 'text');
  descInput.name = inputName;
  descInput.id = inputName;

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

export default function createForm() {
  const formDiv = document.createElement('div');
  formDiv.classList.add('form');

  const inputsDiv = document.createElement('div');
  inputsDiv.classList.add('inputs');

  const leftDiv = document.createElement('div');
  leftDiv.classList.add('left');

  const nameInput = createNameInput();
  const descriptionInput = createDescriptionInput();

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

  const form = document.createElement('form');
  form.appendChild(inputsDiv);

  formDiv.appendChild(form);

  return formDiv;
}
