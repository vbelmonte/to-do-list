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

function createCheckBoxDiv() {
  const div = document.createElement('div');
  const checkboxDiv = document.createElement('div');
  const roundDiv = document.createElement('div');
  const checkboxInput = document.createElement('input');
  const label = document.createElement('label');

  label.setAttribute('for', 'checkbox');

  checkboxInput.id = 'checkbox';
  checkboxInput.setAttribute('type', 'text');

  roundDiv.appendChild(checkboxInput);
  roundDiv.appendChild(label);

  checkboxDiv.appendChild(roundDiv);
  checkboxDiv.classList.add('checkbox-container');

  div.appendChild(checkboxDiv);

  return div;
}

function createTaskInfoDiv(taskName, taskDesc, dueDate, priority) {
  const taskInfoDiv = document.createElement('div');
  const namePriorityDiv = document.createElement('div');

  const taskNameDiv = document.createElement('div');
  taskNameDiv.classList.add('task-name');
  taskNameDiv.innerHTML = `<h4>${taskName}</h4>`;

  const taskPriorityImgDiv = document.createElement('div');
  const taskPriorityImg = assignPriorityImage(priority);

  taskPriorityImgDiv.appendChild(taskPriorityImg);

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
  const editSVG = '<img class=\'edit-icon\' src=\'../src/assets/img/ellipsis-vertical-solid.svg\'>';

  editDiv.innerHTML = `${editSVG}`;

  return editDiv;
}

export default function createTaskDiv(taskName, taskDesc, dueDate, priority) {
  const taskDiv = document.createElement('div');
  const checkBoxDiv = createCheckBoxDiv();
  const taskInfoDiv = createTaskInfoDiv(taskName, taskDesc, dueDate, priority);
  const editDiv = createEditDiv();

  taskDiv.classList.add('task');
  taskDiv.classList.add(assignPriorityClass(priority));

  taskDiv.appendChild(checkBoxDiv);
  taskDiv.appendChild(taskInfoDiv);
  taskDiv.appendChild(editDiv);

  return taskDiv;
}
