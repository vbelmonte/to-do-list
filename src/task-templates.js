import { format, parseISO } from 'date-fns';
import { markAsComplete } from './localstorage';
import { createEditForm } from './form-template';

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

function createTaskIconsDiv(colorClass, taskObj) {
  const iconsDiv = document.createElement('div');
  const trashIconDiv = document.createElement('div');
  const trashIconImg = document.createElement('img');
  trashIconImg.src = '../src/assets/img/trash-can-solid.svg';
  trashIconImg.classList.add('task-icon');
  trashIconImg.classList.add(colorClass);
  trashIconDiv.appendChild(trashIconImg);

  const editIconDiv = document.createElement('div');
  editIconDiv.classList.add(taskObj.itemTag);
  const editIconImg = document.createElement('img');
  editIconImg.src = '../src/assets/img/pen-to-square-solid.svg';
  editIconImg.classList.add('task-icon');
  editIconImg.classList.add(colorClass);
  editIconDiv.appendChild(editIconImg);
  editIconDiv.addEventListener('click', () => {
    const modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'flex';
    const editModal = createEditForm(taskObj.classname, taskObj);
    modal.appendChild(editModal);
    console.log('you click the edit button!');
  });

  iconsDiv.appendChild(trashIconDiv);
  iconsDiv.appendChild(editIconDiv);
  iconsDiv.classList.add('icons');

  return iconsDiv;
}

function createTaskName(taskName) {
  const taskNameDiv = document.createElement('div');
  taskNameDiv.classList.add('task-name');
  taskNameDiv.innerHTML = `<h4>${taskName}</h4>`;

  return taskNameDiv;
}

function createPriority(taskPriority) {
  const priorityDiv = document.createElement('div');
  const priorityImg = assignPriorityImage(taskPriority);
  priorityDiv.innerHTML = `${priorityImg}`;

  return priorityDiv;
}

function rotateChevron(itemTag, chevron) {
  const bottomClassName = `bottom-${itemTag}`;
  const taskModuleBottom = document.getElementsByClassName(bottomClassName)[0];

  if (taskModuleBottom.style.display === 'none' || taskModuleBottom.style.display === '') {
    chevron.style.transform = 'rotate(0)';
  } else {
    chevron.style.transform = 'rotate(180deg)';
  }
}

function collapseExpandModule(itemTag) {
  const bottomClassName = `bottom-${itemTag}`;
  const taskModuleBottom = document.getElementsByClassName(bottomClassName)[0];

  if (taskModuleBottom.style.display === 'none' || taskModuleBottom.style.display === '') {
    taskModuleBottom.style.display = 'flex';
  } else {
    taskModuleBottom.style.display = 'none';
  }
}

function createChevron(colorClass, itemTag) {
  const chevronDiv = document.createElement('div');
  const chevronImg = document.createElement('img');
  chevronImg.src = '../src/assets/img/chevron-up-solid.svg';
  chevronImg.classList.add('task-icon');
  chevronImg.classList.add(colorClass);
  chevronDiv.appendChild(chevronImg);
  chevronDiv.classList.add(itemTag);
  chevronDiv.addEventListener('click', () => {
    collapseExpandModule(itemTag);
    rotateChevron(itemTag, chevronImg);
  });

  return chevronDiv;
}

function createDueDate(dueDate) {
  const dueDateDiv = document.createElement('div');
  dueDateDiv.classList.add('deadline');

  const p = document.createElement('p');
  p.classList.add('date');

  const taskDueDate = format(parseISO(dueDate), 'MM/dd/yyyy');
  p.innerText = taskDueDate;
  dueDateDiv.appendChild(p);

  return dueDateDiv;
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

  const taskNameDiv = createTaskName(taskObject.name);
  rightDiv.appendChild(taskNameDiv);

  const priorityAndDateDiv = document.createElement('div');
  priorityAndDateDiv.classList.add('priority-due-date');

  const priorityDiv = createPriority(taskObject.priority);
  const dueDateDiv = createDueDate(taskObject.dueDate, colorClass);

  priorityAndDateDiv.appendChild(dueDateDiv);
  priorityAndDateDiv.appendChild(priorityDiv);

  rightDiv.appendChild(priorityAndDateDiv);

  const iconsDiv = createTaskIconsDiv(colorClass, taskObject);
  rightDiv.appendChild(iconsDiv);

  const chevronDiv = createChevron(colorClass, taskObject.itemTag);
  rightDiv.appendChild(chevronDiv);

  topRowDiv.appendChild(rightDiv);
  topRowDiv.classList.add('task-top-row');

  return topRowDiv;
}

function createBottomRowTaskDiv(taskObject, colorClass) {
  const bottomDiv = document.createElement('div');
  bottomDiv.classList.add('task-bottom-row');
  bottomDiv.classList.add(`bottom-${taskObject.itemTag}`);

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
