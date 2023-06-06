import './styles.css';
import './media-queries.css';
import { addItemsToLocalArrays } from './localstorage';

import loadInbox from './inbox';
import loadToday from './today';
import loadWeek from './week';
import loadCompleted from './completed';
import loadProjects, { loadProjectsNavList } from './projectsfolder';
import { toggleSideMenu } from './templates';
import loadAbout from './about';

(function runPage() {
  addItemsToLocalArrays();
  loadInbox();
  loadProjectsNavList();

  function rotateProjectsChevron() {
    const projectsChevron = document.getElementById('projects-chevron');
    const projectsList = document.getElementById('projects-list');

    if (projectsList.style.display === 'flex' || projectsList.style.display === '') {
      projectsChevron.style.transform = 'rotate(0deg)';
    } else {
      projectsChevron.style.transform = 'rotate(180deg)';
    }
  }

  function toggleProjectsList() {
    const projectsList = document.getElementById('projects-list');
    if (projectsList.style.display === 'flex' || projectsList.style.display === '') {
      projectsList.style.display = 'none';
    } else {
      projectsList.style.display = 'flex';
    }
  }

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

  const projectsChevron = document.getElementById('projects-chevron');
  projectsChevron.addEventListener('click', () => {
    toggleProjectsList();
    rotateProjectsChevron();
  });

  const inboxDesktop = document.getElementById('inbox');
  const todayDesktop = document.getElementById('today');
  const weekDesktop = document.getElementById('week');
  const completedDesktop = document.getElementById('completed');
  const projectsDesktop = document.getElementById('projects');
  const aboutDesktop = document.getElementById('about');
  const logoDesktop = document.getElementsByClassName('logo')[0];

  logoDesktop.addEventListener('click', loadInbox);
  inboxDesktop.addEventListener('click', loadInbox);
  todayDesktop.addEventListener('click', loadToday);
  weekDesktop.addEventListener('click', loadWeek);
  completedDesktop.addEventListener('click', loadCompleted);
  projectsDesktop.addEventListener('click', loadProjects);
  aboutDesktop.addEventListener('click', loadAbout);

  const inboxMobile = document.getElementById('inbox-mobile');
  const todayMobile = document.getElementById('today-mobile');
  const weekMobile = document.getElementById('week-mobile');
  const completedMobile = document.getElementById('completed-mobile');
  const projectsMobile = document.getElementById('projects-mobile');
  const aboutMobile = document.getElementById('about-mobile');
  const logoMobile = document.getElementsByClassName('logo')[0];

  logoMobile.addEventListener('click', loadInbox);
  inboxMobile.addEventListener('click', loadInbox);
  todayMobile.addEventListener('click', loadToday);
  weekMobile.addEventListener('click', loadWeek);
  completedMobile.addEventListener('click', loadCompleted);
  projectsMobile.addEventListener('click', loadProjects);
  aboutMobile.addEventListener('click', loadAbout);

  const hamburgerMenu = document.querySelector('.hamburger-menu');

  hamburgerMenu.addEventListener('click', toggleSideMenu);
}());
