"use strict";
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the sidebar
    let sidebar = document.getElementById("sidebar");

    // Get the button that opens the sidebar
    let menu_button = document.getElementById("menu-button");
    
    // When the user clicks the button, toggle hidden class
    menu_button.onclick = function() {
      sidebar.classList.toggle("hidden");
    }
})