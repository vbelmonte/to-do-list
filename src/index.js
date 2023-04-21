import './styles.css';
import { addItemsToLocalArrays } from './localstorage';

import loadInbox from './inbox';
import loadToday from './today';
import loadWeek from './week';
import loadCompleted from './completed';
import loadProjects from './projectsfolder';

(function runPage() {
  addItemsToLocalArrays();
  loadInbox();

  function toggleActiveOff() {
    const navLinks = document.getElementsByClassName('nav-link');
    for (let i = 0; i < navLinks.length; i += 1) {
      navLinks[i].classList.remove('active');
    }
  }

  (function toggleActiveClass() {
    const navLinks = document.getElementsByClassName('nav-link');
    for (let i = 0; i < navLinks.length; i += 1) {
      navLinks[i].addEventListener('click', () => {
        toggleActiveOff();
        navLinks[i].classList.add('active');
      });
    }
  }());

  const inboxDesktop = document.getElementById('inbox');
  const today = document.getElementById('today');
  const week = document.getElementById('week');
  const completed = document.getElementById('completed');
  const projects = document.getElementById('projects');
  const logo = document.getElementsByClassName('logo')[0];

  logo.addEventListener('click', loadInbox);
  inboxDesktop.addEventListener('click', loadInbox);
  today.addEventListener('click', loadToday);
  week.addEventListener('click', loadWeek);
  completed.addEventListener('click', loadCompleted);
  projects.addEventListener('click', loadProjects);
}());
