import './styles.css';

import loadInbox from './inbox';

(function runPage() {
  const inboxDesktop = document.getElementById('inbox');
  const logo = document.getElementsByClassName('logo')[0];

  logo.addEventListener('click', loadInbox);
  inboxDesktop.addEventListener('click', loadInbox);
}());
