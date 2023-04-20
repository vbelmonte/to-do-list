import './styles.css';
import { addItemsToLocalArrays } from './localstorage';

import loadInbox from './inbox';

(function runPage() {
  addItemsToLocalArrays();
  loadInbox();

  const inboxDesktop = document.getElementById('inbox');
  const logo = document.getElementsByClassName('logo')[0];

  logo.addEventListener('click', loadInbox);
  inboxDesktop.addEventListener('click', loadInbox);
}());
