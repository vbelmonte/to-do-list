import Task from './tasks';
import Project from './projects';
import { removeItemFromTaskList } from './templates';

export const projectArray = [];
export const inboxTaskArray = [];
export const dueTodayArray = [];
export const dueThisWeekArray = [];
export const completedArray = [];
export const allItemsArray = [];

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

function deserialize(json) {
  const obj = JSON.parse(json);

  if (obj._classname === 'Task') {
    return Object.assign(new Task(), obj);
  }

  return Object.assign(new Project(), obj);
}

function removeItemFromInbox(tag) {
  const index = inboxTaskArray.map((i) => i.itemTag).indexOf(tag);

  return inboxTaskArray.splice(index, 1)[0];
}

function moveItemToCompletedArray(obj) {
  if (obj.status === 'completed') {
    completedArray.push(obj);
  }
}

function updateLocalStorage(obj) {
  const itemName = obj.name;
  const keyName = `item-${itemName}`;
  const item = localStorage.getItem(keyName);
  localStorage.removeItem(keyName);

  const convertedObj = deserialize(item);
  convertedObj.status = 'complete';

  const jsonObj = JSON.stringify(convertedObj);

  localStorage.setItem(keyName, jsonObj);
}

export function markAsComplete(event) {
  const tagID = event.target.id;
  const obj = removeItemFromInbox(tagID);
  obj.status = 'completed';
  moveItemToCompletedArray(obj);
  removeItemFromTaskList(obj);
  updateLocalStorage(obj);
}

function assignItemName() {
  const number = localStorage.length + 1;
  const itemName = `item-${number}`;

  return itemName;
}

function addItemToLocalStorage(object) {
  if (storageAvailable('localStorage')) {
    const itemName = assignItemName();
    const jsonObj = JSON.stringify(object);

    localStorage.setItem(itemName, jsonObj);
  } else {
    // eslint-disable-next-line no-console
    console.log('Error! No local storage available.');
  }
}

export function addItemsToLocalArrays() {
  let keyName;
  for (let i = 0; i < localStorage.length; i += 1) {
    keyName = localStorage.key(i);
    const item = localStorage.getItem(keyName);
    const convertedObj = deserialize(item);

    allItemsArray.push(convertedObj);

    if (convertedObj.classname === 'Project') {
      projectArray.push(convertedObj);
    } else if (convertedObj.classname === 'Task') {
      if (convertedObj.status === 'in-progress') {
        inboxTaskArray.push(convertedObj);
      } else {
        completedArray.push(convertedObj);
      }
    }
  }
}

function addItemToLocalArray(object) {
  if (storageAvailable('localStorage')) {
    allItemsArray.push(object);

    if (object.classname === 'Project') {
      projectArray.push(object);
    } else if (object.classname === 'Task') {
      inboxTaskArray.push(object);
    } else {
      completedArray.push(object);
    }
  } else {
    // eslint-disable-next-line no-console
    console.log('Error! No local storage available.');
  }
}

export default function addItemToStorage(object) {
  addItemToLocalStorage(object);
  addItemToLocalArray(object);

  console.log('inboxTaskArray: ', inboxTaskArray);
}
