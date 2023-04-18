import './styles.css';

import loadInbox from './inbox';

(function runPage() {
  const inboxDesktop = document.getElementById('inbox');

  inboxDesktop.addEventListener('click', loadInbox);
}());
