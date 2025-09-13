
  //  set the current year
  document.getElementById("currentyear").textContent = new Date().getFullYear();

  //  set last modified date
  document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

  // Toggle the navigation menu on small screens
  function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
  }

