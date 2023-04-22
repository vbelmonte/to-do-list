import Task from './tasks';
import Project from './projects';

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
      inboxTaskArray.push(convertedObj);
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
