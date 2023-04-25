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

  /*label.setAttribute('for', 'checkbox');*/
  label.setAttribute('for', checkboxID);

  /*checkboxInput.id = 'checkbox';*/
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

function createTaskInfoDiv(taskName, taskDesc, dueDate, priority) {
  const taskInfoDiv = document.createElement('div');
  taskInfoDiv.classList.add('task-info');

  const namePriorityDiv = document.createElement('div');
  namePriorityDiv.classList.add('name-priority');

  const taskNameDiv = document.createElement('div');
  taskNameDiv.classList.add('task-name');
  taskNameDiv.innerHTML = `<h4>${taskName}</h4>`;

  const taskPriorityImgDiv = document.createElement('div');
  const taskPriorityImg = assignPriorityImage(priority);
  taskPriorityImgDiv.innerHTML = taskPriorityImg;

  const deadlineDiv = document.createElement('div');
  deadlineDiv.classList.add('deadline');
  deadlineDiv.innerHTML = `<h5>${dueDate}</h5>`;

  const taskDescDiv = document.createElement('div');
  taskDescDiv.classList.add('description');
  taskDescDiv.innerHTML = `<p>${taskDesc}</p>`;

  namePriorityDiv.appendChild(taskNameDiv);
  namePriorityDiv.appendChild(taskPriorityImgDiv);

  taskInfoDiv.appendChild(namePriorityDiv);
  taskInfoDiv.appendChild(deadlineDiv);
  taskInfoDiv.appendChild(taskDescDiv);

  return taskInfoDiv;
}

function createEditDiv() {
  const editDiv = document.createElement('div');
  editDiv.classList.add('edit');
  const editSVG = '<img class=\'edit-icon\' src=\'../src/assets/img/ellipsis-vertical-solid.svg\'>';

  editDiv.innerHTML = `${editSVG}`;

  return editDiv;
}

export default function createTaskDiv(taskObject) {
  const taskName = taskObject.name;
  const taskDesc = taskObject.description;
  const taskDueDate = format(parseISO(taskObject.dueDate), 'MM/dd/yyyy');
  const taskPriority = taskObject.priority;
  const taskTag = taskObject.itemTag;

  const taskDiv = document.createElement('div');
  const checkBoxDiv = createCheckBoxDiv(taskObject);
  const taskInfoDiv = createTaskInfoDiv(taskName, taskDesc, taskDueDate, taskPriority);
  const editDiv = createEditDiv();

  taskDiv.classList.add('task');
  taskDiv.classList.add(taskTag);
  taskDiv.classList.add(assignPriorityClass(taskPriority));

  taskDiv.appendChild(checkBoxDiv);
  taskDiv.appendChild(taskInfoDiv);
  taskDiv.appendChild(editDiv);

  return taskDiv;
}
