// Dynamically set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically set last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Toggle the navigation menu on small screens
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

// hamburger button for small screens
hamButton.addEventListener("", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});