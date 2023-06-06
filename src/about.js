import {
  createPageHeadline, clearMainContent, createModuleTitle, createPageDescription, createModuleContainer,
} from './templates';

export default function loadAbout() {
  clearMainContent();

  const mainContentDiv = document.getElementById('main-content');
  const pageHeadline = createPageHeadline('About This Project');
  const pageDescription = createPageDescription('This To-Do app was created as part of The Odin Project curriculum.');
  const moduleContainerDiv = createModuleContainer('about');

  const projectSummaryDiv = createModuleTitle('Project Summary');

  const summaryDiv = document.createElement('div');
  const summary = document.createElement('p');
  const gitHubLink = document.createElement('p');

  summary.innerHTML = `This To-Do app is a simple task-tracker app intended to help organize and keep track of tasks for the average person. This project was written in Vanilla Javascript and was set up using Webpack. The code for this app utilizes and demonstrates the following concepts:
    <ul>
    <li>- Classes</li>
    <li>- Module Pattern</li>
    <li>- Observer Pattern</li>
    <li>- ES6 Modules</li>
    <li>- Responsive Design</li>
    </ul>`;

  gitHubLink.innerHTML = 'Feel free to view the code in the <a href="https://github.com/vbelmonte/to-do-list" target="_blank">GitHub repository</a>.';

  summaryDiv.appendChild(summary);
  summaryDiv.appendChild(gitHubLink);
  moduleContainerDiv.appendChild(projectSummaryDiv);
  moduleContainerDiv.appendChild(summaryDiv);

  const titleAndDescription = document.createElement('div');
  titleAndDescription.appendChild(pageHeadline);
  titleAndDescription.appendChild(pageDescription);
  titleAndDescription.classList.add('title-description');

  mainContentDiv.appendChild(titleAndDescription);
  mainContentDiv.appendChild(moduleContainerDiv);
}
