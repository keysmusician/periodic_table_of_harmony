'use strict';

/* eslint-disable camelcase */

document.addEventListener('DOMContentLoaded', (event) => {
  // Get the modal
  const modal = document.getElementById('info-modal');

  // Get the button that opens the modal
  const btn = document.getElementById('info');

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName('close')[0];

  // Display the modal when the page loads
  modal.style.display = 'block';

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = 'flex';
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
});
