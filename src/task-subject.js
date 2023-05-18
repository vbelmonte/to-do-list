import Observer from './observer';

const inboxObserver = new Observer('inbox', 0);
const todayObserver = new Observer('today', 0);
const weekObserver = new Observer('week', 0);

const taskSubject = {
  taskArraysMap: new Map([]),

  subscribers: [inboxObserver, todayObserver, weekObserver],

  subscribe(observer) {
    this.subscribers.push(observer);
  },

  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter(
      (item) => {
        if (item !== observer) {
          return item;
        }
      },
    );
  },

  notifyInbox(value) {
    this.subscribers.forEach((subscriber) => {
      if (subscriber.type === 'inbox') {
        subscriber.notify(value);
        subscriber.updateDOM('inbox', value);
      }
    });
  },

  notifyToday(value) {
    this.subscribers.forEach((subscriber) => {
      if (subscriber.type === 'today') {
        subscriber.notify(value);
        subscriber.updateDOM('today', value);
      }
    });
  },

  notifyWeek(value) {
    this.subscribers.forEach((subscriber) => {
      if (subscriber.type === 'week') {
        subscriber.notify(value);
        subscriber.updateDOM('week', value);
      }
    });
  },

  notify(array, value) {
    switch (array) {
      case 'today':
        this.notifyToday(value);
        break;
      case 'week':
        this.notifyWeek(value);
        break;
      case 'inbox':
        this.notifyInbox(value);
        break;
      default:
        break;
    }
  },

  updateIncrement(array) {
    const value = this.taskArraysMap.get(array).length;
    this.taskArraysMap.set(array, value);
    this.notify(array, value);
  },

  updateDecrement(array) {
    const value = this.taskArraysMap.get(array).length;
    this.taskArraysMap.set(array, value);
    this.notify(array, value);
  },
};

export default taskSubject;
