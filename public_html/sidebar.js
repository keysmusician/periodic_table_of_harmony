/* eslint-disable camelcase */
'use strict';

document.addEventListener('DOMContentLoaded', (event) => {
  // Get the sidebar
  const sidebar = document.getElementById('sidebar');
  sidebar.style.display = 'none';

  // Get the button that opens the sidebar
  const menu_button = document.getElementById('menu-button');

  // When the user clicks the button, toggle displaying the sidebar
  menu_button.onclick = function () {
    sidebar.style.display = sidebar.style.display === 'none'
      ? 'initial'
      : 'none';
  };
});
