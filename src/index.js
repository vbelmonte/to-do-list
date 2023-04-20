import './styles.css';
import { addItemsToLocalArrays } from './localstorage';

import loadInbox from './inbox';
import loadToday from './today';
import loadWeek from './week';
import loadCompleted from './completed';

(function runPage() {
  addItemsToLocalArrays();
  loadInbox();

  const inboxDesktop = document.getElementById('inbox');
  const today = document.getElementById('today');
  const week = document.getElementById('week');
  const completed = document.getElementById('completed');
  const logo = document.getElementsByClassName('logo')[0];

  logo.addEventListener('click', loadInbox);
  inboxDesktop.addEventListener('click', loadInbox);
  today.addEventListener('click', loadToday);
  week.addEventListener('click', loadWeek);
  completed.addEventListener('click', loadCompleted);
}());
