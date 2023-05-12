import { format, parseISO } from 'date-fns';
import { markAsComplete } from './localstorage';

function assignPriorityClass(priority) {
  if (priority === 'low') {
    return 'low-p';
  }
  if (priority === 'medium') {
    return 'med-p';
  }

  return 'high-p';
}

function assignPriorityImage(priority) {
  if (priority === 'low') {
    return '<img src=\'../src/assets/img/priority-low.svg\'>';
  }
  if (priority === 'medium') {
    return '<img src=\'../src/assets/img/priority-med.svg\'>';
  }

  return '<img src=\'../src/assets/img/priority-high.svg\'>';
}

function assignPriorityColorClass(priority) {
  if (priority === 'low') {
    return 'task-blue';
  }
  if (priority === 'medium') {
    return 'task-orange';
  }
  return 'task-red';
}

function assignCheckBoxID(obj) {
  const checkboxID = obj.itemTag;

  return checkboxID;
}

function createCheckBoxDiv(obj) {
  const div = document.createElement('div');
  const checkboxDiv = document.createElement('div');
  const roundDiv = document.createElement('div');
  const checkboxInput = document.createElement('input');
  const label = document.createElement('label');
  const checkboxID = assignCheckBoxID(obj);

  label.setAttribute('for', checkboxID);

  checkboxInput.id = checkboxID;
  checkboxInput.setAttribute('type', 'checkbox');
  checkboxInput.addEventListener('click', markAsComplete);

  roundDiv.classList.add('round');
  roundDiv.appendChild(checkboxInput);
  roundDiv.appendChild(label);

  checkboxDiv.appendChild(roundDiv);
  checkboxDiv.classList.add('checkbox-container');

  div.appendChild(checkboxDiv);

  return div;
}

function createTaskIconsDiv(colorClass) {
  const iconsDiv = document.createElement('div');
  const trashIconDiv = document.createElement('div');
  const trashIconImg = document.createElement('img');
  trashIconImg.src = '../src/assets/img/trash-can-solid.svg';
  trashIconImg.classList.add('task-icon');
  trashIconImg.classList.add(colorClass);
  trashIconDiv.appendChild(trashIconImg);

  const editIconDiv = document.createElement('div');
  const editIconImg = document.createElement('img');
  editIconImg.src = '../src/assets/img/pen-to-square-solid.svg';
  editIconImg.classList.add('task-icon');
  editIconImg.classList.add(colorClass);
  editIconDiv.appendChild(editIconImg);

  iconsDiv.appendChild(trashIconDiv);
  iconsDiv.appendChild(editIconDiv);
  iconsDiv.classList.add('icons');

  return iconsDiv;
}

function createTaskName(taskName) {
  const taskNameDiv = document.createElement('div');
  taskNameDiv.innerHTML = `<h4>${taskName}</h4>`;

  return taskNameDiv;
}

function createPriority(taskPriority) {
  const priorityDiv = document.createElement('div');
  const priorityImg = assignPriorityImage(taskPriority);
  priorityDiv.innerHTML = `${priorityImg}`;

  return priorityDiv;
}

function createChevron(colorClass) {
  const chevronDiv = document.createElement('div');
  const chevronImg = document.createElement('img');
  chevronImg.src = '../src/assets/img/chevron-up-solid.svg';
  chevronImg.classList.add('task-icon');
  chevronImg.classList.add(colorClass);
  chevronDiv.appendChild(chevronImg);

  return chevronDiv;
}

function createDueDate(dueDate, colorClass) {
  const div = document.createElement('div');

  const dueDateTitle = document.createElement('div');
  dueDateTitle.classList.add('uppercase');
  dueDateTitle.classList.add(colorClass);
  dueDateTitle.innerHTML = '<h5>Due Date</h5>';
  div.appendChild(dueDateTitle);

  const dueDateDiv = document.createElement('div');
  const taskDueDate = format(parseISO(dueDate), 'MM/dd/yyyy');
  dueDateDiv.innerHTML = `<p>${taskDueDate}</p>`;
  dueDateDiv.classList.add('deadline');
  div.appendChild(dueDateDiv);

  return div;
}

function createTaskDescription(description, colorClass) {
  const div = document.createElement('div');

  const descriptionTitle = document.createElement('div');
  descriptionTitle.classList.add('uppercase');
  descriptionTitle.classList.add(colorClass);
  descriptionTitle.innerHTML = '<h5>Description</h5>';
  div.appendChild(descriptionTitle);

  const taskDescDiv = document.createElement('div');
  taskDescDiv.classList.add('description');
  taskDescDiv.innerHTML = `<p>${description}</p>`;
  div.appendChild(taskDescDiv);

  return div;
}

function createTopRowTaskDiv(taskObject, colorClass) {
  const topRowDiv = document.createElement('div');

  const checkBoxDiv = createCheckBoxDiv(taskObject);
  topRowDiv.appendChild(checkBoxDiv);

  const rightDiv = document.createElement('div');
  rightDiv.classList.add('top-row-right');

  const nameAndPriorityDiv = document.createElement('div');
  nameAndPriorityDiv.classList.add('name-priority');

  const taskNameDiv = createTaskName(taskObject.name);
  nameAndPriorityDiv.appendChild(taskNameDiv);

  const priorityDiv = createPriority(taskObject.priority);
  nameAndPriorityDiv.appendChild(priorityDiv);

  rightDiv.appendChild(nameAndPriorityDiv);

  const iconsDiv = createTaskIconsDiv(colorClass);
  rightDiv.appendChild(iconsDiv);

  const chevronDiv = createChevron(colorClass);
  rightDiv.appendChild(chevronDiv);

  topRowDiv.appendChild(rightDiv);
  topRowDiv.classList.add('task-top-row');

  return topRowDiv;
}

function createBottomRowTaskDiv(taskObject, colorClass) {
  const bottomDiv = document.createElement('div');
  bottomDiv.classList.add('task-bottom-row');

  const dueDateDiv = createDueDate(taskObject.dueDate, colorClass);
  bottomDiv.appendChild(dueDateDiv);

  const taskDescriptionDiv = createTaskDescription(taskObject.description, colorClass);
  bottomDiv.appendChild(taskDescriptionDiv);

  return bottomDiv;
}

export default function createTaskDiv(taskObject) {
  const taskDiv = document.createElement('div');
  const taskTag = taskObject.itemTag;
  taskDiv.classList.add('task');
  taskDiv.classList.add(assignPriorityClass(taskObject.priority));
  taskDiv.classList.add(taskTag);

  const colorClass = assignPriorityColorClass(taskObject.priority);

  const topRow = createTopRowTaskDiv(taskObject, colorClass);
  taskDiv.appendChild(topRow);

  const bottomRow = createBottomRowTaskDiv(taskObject, colorClass);
  taskDiv.appendChild(bottomRow);

  return taskDiv;
}
