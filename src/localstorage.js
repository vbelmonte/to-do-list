import { isToday, isThisWeek, parseISO } from 'date-fns';
import Task from './tasks';
import Project from './projects';
import taskSubject from './task-subject';
import { removeItemFromTaskList, removeItemFromProjectNavColumn } from './templates';

export const projectArray = [];
export const inboxTaskArray = [];
export const dueTodayArray = [];
export const tasksDueTodayArray = [];
export const projectsDueTodayArray = [];
export const dueThisWeekArray = [];
export const tasksDueThisWeekArray = [];
export const projectsDueThisWeekArray = [];
export const completedArray = [];
export const allItemsArray = [];

taskSubject.taskArraysMap.set('today', dueTodayArray);
taskSubject.taskArraysMap.set('week', dueThisWeekArray);
taskSubject.taskArraysMap.set('inbox', inboxTaskArray);

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
        // everything except Firefox
        && (e.code === 22
          // Firefox
          || e.code === 1014
          // test name field too, because code might not be present
          // everything except Firefox
          || e.name === 'QuotaExceededError'
          // Firefox
          || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
        // acknowledge QuotaExceededError only if there's something already stored
        && storage
        && storage.length !== 0
    );
  }
}

function reassignProjectTaskClass(obj) {
  const { inProgressTaskArray } = obj;
  const { completedTaskArray } = obj;
  const newInProgressTaskArray = [];
  const newCompletedTaskArray = [];

  for (let i = 0; i < inProgressTaskArray.length; i += 1) {
    newInProgressTaskArray.push(Object.assign(new Task(), inProgressTaskArray[i]));
  }
  for (let k = 0; k < completedTaskArray.length; k += 1) {
    newCompletedTaskArray.push(Object.assign(new Task(), completedTaskArray[k]));
  }

  obj.inProgressTaskArray = newInProgressTaskArray;
  obj.completedTaskArray = newCompletedTaskArray;

  return obj;
}

function deserialize(json) {
  const obj = JSON.parse(json);

  if (obj._classname === 'Task') {
    return Object.assign(new Task(), obj);
  }

  const newObj = Object.assign(new Project(), obj);

  return reassignProjectTaskClass(newObj);
}

function retrieveProject(tag) {
  const index = projectArray.map((i) => i.itemTag).indexOf(tag);
  if (index >= 0) {
    return projectArray[index];
  }
}

function removeItemFromInbox(tag) {
  const index = inboxTaskArray.map((i) => i.itemTag).indexOf(tag);

  if (index >= 0) {
    return inboxTaskArray.splice(index, 1)[0];
  }
}

function removeItemFromProjects(tag) {
  const index = projectArray.map((i) => i.itemTag).indexOf(tag);

  if (index >= 0) {
    return projectArray.splice(index, 1)[0];
  }
}

function removeItemFromTodayArrays(tag) {
  const todayArrays = [projectsDueTodayArray, tasksDueTodayArray, dueTodayArray];

  todayArrays.forEach((array) => {
    const index = array.map((i) => i.itemTag).indexOf(tag);

    if (index >= 0) {
      array.splice(index, 1)[0];
    }
  });
  taskSubject.updateDecrement('today', dueTodayArray);
}

function removeItemFromWeekArrays(tag) {
  const weekArrays = [projectsDueThisWeekArray, tasksDueThisWeekArray, dueThisWeekArray];

  weekArrays.forEach((array) => {
    const index = array.map((i) => i.itemTag).indexOf(tag);

    if (index >= 0) {
      array.splice(index, 1)[0];
    }
  });
  taskSubject.updateDecrement('week', dueThisWeekArray);
}

function determineTaskType(tag) {
  if (inboxTaskArray.map((i) => i.itemTag).indexOf(tag) >= 0 && inboxTaskArray.length >= 1) {
    return 'inbox';
  }
  if (projectArray.map((i) => i.itemTag).indexOf(tag) >= 0 && projectArray.length >= 1) {
    return 'project';
  }
  return 'project-task';
}

function removeItemFromAllArrays(tag) {
  removeItemFromTodayArrays(tag);
  removeItemFromWeekArrays(tag);

  const taskType = determineTaskType(tag);

  if (taskType === 'inbox') {
    removeItemFromInbox(tag);
    taskSubject.updateDecrement('inbox', inboxTaskArray);
  } else if (taskType === 'project') {
    removeItemFromProjects(tag);
  }
}

function moveItemToCompletedArray(obj) {
  if (obj.status === 'completed') {
    completedArray.push(obj);
  }
}

function markItemAsComplete(obj) {
  obj.status = 'completed';
  return obj;
}

function updateLocalStorage(obj) {
  const keyName = obj.itemTag;
  localStorage.removeItem(keyName);

  const jsonObj = JSON.stringify(obj);

  localStorage.setItem(keyName, jsonObj);
}

function removeFromLocalStorage(obj) {
  const keyName = obj.itemTag;
  localStorage.removeItem(keyName);
}

function removeSubTasksFromArrays(obj) {
  if (obj.classname === 'Project') {
    const inProgress = obj.inProgressTaskArray;
    const completed = obj.completedTaskArray;

    for (let i = 0; i < inProgress.length; i += 1) {
      const tagID = inProgress[i].itemTag;
      removeItemFromAllArrays(tagID);
      removeFromLocalStorage(inProgress[i]);
    }
    for (let k = 0; k < completed.length; k += 1) {
      const tagID = completed[k].itemTag;
      removeItemFromAllArrays(tagID);
      removeFromLocalStorage(completed[k]);
    }
  }
}

function removeSubTaskFromProject(obj) {
  if (obj.associatedProject !== undefined) {
    const index = projectArray.map((i) => i.itemTag).indexOf(obj.associatedProject);
    const inProgress = projectArray[index].inProgressTaskArray;
    const completed = projectArray[index].completedTaskArray;
    const indexInProgress = inProgress.map((i) => i.itemTag).indexOf(obj.itemTag);
    const indexCompleted = completed.map((i) => i.itemTag).indexOf(obj.itemTag);

    if (indexInProgress >= 0) {
      projectArray[index].inProgressTaskArray.splice(indexInProgress, 1)[0];
    }
    if (indexCompleted >= 0) {
      projectArray[index].completedTaskArray.splice(indexCompleted, 1)[0];
    }

    updateLocalStorage(projectArray[index]);
  }
}

function removeItemFromProjectInProgressArray(obj) {
  const associatedProjectTag = obj.associatedProject;
  const indexOfProject = projectArray.map((i) => i.itemTag).indexOf(associatedProjectTag);
  const { inProgressTaskArray } = projectArray[indexOfProject];

  const indexOfTask = inProgressTaskArray.map((i) => i.itemTag).indexOf(obj.itemTag);
  projectArray[indexOfProject].inProgressTaskArray.splice(indexOfTask, 1);
}

function moveItemToProjectCompletedArray(obj) {
  if (obj.associatedProject !== undefined) {
    const associatedProjectTag = obj.associatedProject;
    const indexOfProject = projectArray.map((i) => i.itemTag).indexOf(associatedProjectTag);

    removeItemFromProjectInProgressArray(obj);
    projectArray[indexOfProject].completedTaskArray.push(obj);
    updateLocalStorage(projectArray[indexOfProject]);
  }
}

function retrieveObj(tag) {
  const index = allItemsArray.map((i) => i.itemTag).indexOf(tag);
  return allItemsArray[index];
}

function updateProjectArray(object) {
  const index = projectArray.map((i) => i.itemTag).indexOf(object.itemTag);

  projectArray[index] = object;
}

function updateInboxTaskArray(object) {
  const index = inboxTaskArray.map((i) => i.itemTag).indexOf(object.itemTag);

  inboxTaskArray[index] = object;
}

function updateProjectSubTask(object) {
  const projectObj = retrieveProject(object.associatedProject);
  const index = projectObj.inProgressTaskArray.map((i) => i.itemTag).indexOf(object.itemTag);

  projectObj.inProgressTaskArray[index] = object;

  return projectObj;
}

export function updateProjectItem(obj) {
  updateLocalStorage(obj);
}

export function markAsComplete(event) {
  const tagID = event.target.id;
  removeItemFromAllArrays(tagID);
  const obj = retrieveObj(tagID);
  const updatedObj = markItemAsComplete(obj);

  moveItemToCompletedArray(updatedObj);
  moveItemToProjectCompletedArray(updatedObj);
  removeItemFromTaskList(obj);
  removeItemFromProjectNavColumn(updatedObj);
  updateLocalStorage(updatedObj);
}

export function assignItemName() {
  const number = localStorage.length + 1;
  const itemName = `item-${number}`;

  return itemName;
}

function addItemToLocalStorage(object) {
  if (storageAvailable('localStorage')) {
    const jsonObj = JSON.stringify(object);

    localStorage.setItem(object.itemTag, jsonObj);
  } else {
    alert(storageAvailable('localStorage'));

    // eslint-disable-next-line no-console
    console.log('Error! No local storage available.');
  }
}

function addItemToDayArray(object) {
  dueTodayArray.push(object);
  taskSubject.updateIncrement('today', dueTodayArray);
  if (object.classname === 'Task') {
    tasksDueTodayArray.push(object);
  } else {
    projectsDueTodayArray.push(object);
  }
}

function addItemToWeekArray(object) {
  dueThisWeekArray.push(object);
  taskSubject.updateIncrement('week', dueThisWeekArray);
  if (object.classname === 'Task') {
    tasksDueThisWeekArray.push(object);
  } else {
    projectsDueThisWeekArray.push(object);
  }
}

function addItemToWeekOrDay(object) {
  if (isToday(parseISO(object.dueDate))) {
    addItemToDayArray(object);
    addItemToWeekArray(object);
  } else if (isThisWeek(parseISO(object.dueDate))) {
    addItemToWeekArray(object);
  }
}

function updateWeek(object) {
  if (isThisWeek(parseISO(object.dueDate))) {
    const index = dueThisWeekArray.map((i) => i.itemTag).indexOf(object.itemTag);

    if (index >= 0) {
      dueThisWeekArray[index] = object;
      if (object.classname === 'Task') {
        const indexT = tasksDueThisWeekArray.map((i) => i.itemTag).indexOf(object.itemTag);
        tasksDueThisWeekArray[indexT] = object;
      } else {
        const indexP = projectsDueThisWeekArray.map((i) => i.itemTag).indexOf(object.itemTag);
        projectsDueThisWeekArray[indexP] = object;
      }

      return 'modify week';
    }
    addItemToWeekArray(object);

    return 'add week';
  }
  removeItemFromWeekArrays(object.itemTag);

  return 'remove week';
}

function updateDay(object) {
  updateWeek(object);

  if (isToday(parseISO(object.dueDate))) {
    const index = dueTodayArray.map((i) => i.itemTag).indexOf(object.itemTag);

    if (index >= 0) {
      dueTodayArray[index] = object;
      if (object.classname === 'Task') {
        const indexT = tasksDueTodayArray.map((i) => i.itemTag).indexOf(object.itemTag);
        tasksDueTodayArray[indexT] = object;
      } else {
        const indexP = projectsDueTodayArray.map((i) => i.itemTag).indexOf(object.itemTag);
        projectsDueTodayArray[indexP] = object;
      }
      return 'modify day';
    }
    addItemToDayArray(object);
    return 'add day';
  }
  removeItemFromTodayArrays(object.itemTag);

  return 'remove day';
}

function updateWeekOrDay(object) {
  const updateWeekResult = updateWeek(object);
  const updateDayResult = updateDay(object);

  return [updateDayResult, updateWeekResult];
}

export function addItemsToLocalArrays() {
  let keyName;
  for (let i = 0; i < localStorage.length; i += 1) {
    keyName = localStorage.key(i);
    const item = localStorage.getItem(keyName);
    const convertedObj = deserialize(item);

    allItemsArray.push(convertedObj);

    if (convertedObj.classname === 'Project') {
      if (convertedObj.status === 'in-progress') {
        projectArray.push(convertedObj);
        addItemToWeekOrDay(convertedObj);
      } else {
        completedArray.push(convertedObj);
      }
    } else if (convertedObj.classname === 'Task') {
      if (convertedObj.status === 'in-progress') {
        addItemToWeekOrDay(convertedObj);
        if (convertedObj.associatedProject === undefined) {
          inboxTaskArray.push(convertedObj);
          taskSubject.updateIncrement('inbox', inboxTaskArray);
        }
      } else {
        completedArray.push(convertedObj);
      }
    }
  }
}

function updateAllItemsArray(object) {
  const tag = object.itemTag;
  const index = allItemsArray.map((i) => i.itemTag).indexOf(tag);

  allItemsArray[index] = object;
}

function addItemToLocalArray(object) {
  if (storageAvailable('localStorage')) {
    allItemsArray.push(object);

    if (object.classname === 'Project') {
      projectArray.push(object);
    } else if (object.classname === 'Task') {
      if (object.associatedProject === undefined) {
        inboxTaskArray.push(object);
        taskSubject.updateIncrement('inbox', inboxTaskArray);
      }
    } else {
      completedArray.push(object);
    }
  } else {
    alert(storageAvailable('localStorage'));

    // eslint-disable-next-line no-console
    console.log('Error! No local storage available.');
  }
}

function updateLocalArray(object) {
  updateAllItemsArray(object);

  if (object.classname === 'Project') {
    updateProjectArray(object);
  } else if (object.classname === 'Task') {
    if (object.associatedProject === undefined) {
      updateInboxTaskArray(object);
    } else {
      const updatedProject = updateProjectSubTask(object);
      updateProjectArray(updatedProject);
    }
  }
}

export function updateItemToStorage(object) {
  updateLocalStorage(object);
  updateLocalArray(object);
  const updateResultArray = updateWeekOrDay(object);

  return updateResultArray;
}

export function deleteItemFromStorage(object) {
  const tagID = object.itemTag;

  removeItemFromAllArrays(tagID);
  removeSubTasksFromArrays(object);
  removeSubTaskFromProject(object);
  removeItemFromProjectNavColumn(object);
  removeFromLocalStorage(object);
}

export default function addItemToStorage(object) {
  addItemToLocalStorage(object);
  addItemToLocalArray(object);
  addItemToWeekOrDay(object);
}
