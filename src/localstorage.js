export const projectArray = [];
export const inboxTaskArray = [];
export const completedArray = [];

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

function assignItemName() {
  const number = localStorage.length + 1;
  const itemName = `item-${number}`;

  return itemName;
}

export default function addItemToStorage(object) {
  if (storageAvailable('localStorage')) {
    const itemName = assignItemName();
    const jsonObj = JSON.stringify(object);

    localStorage.setItem(itemName, jsonObj);
  } else {
    console.log('Error! No local storage available.');
  }
}

function fetchItemsFromLocalStorage() {
  let keyName;
  for (let i = 0; i < localStorage.length; i += 1) {
    keyName = localStorage.key(i);
    const item = JSON.parse(localStorage.getItem(keyName));

    if (item.type === 'project') {
      projectArray.push(item);
    } else if (item.type === 'task') {
      inboxTaskArray.push(item);
    } else {
      completedArray.push(item);
    }
  }
}
