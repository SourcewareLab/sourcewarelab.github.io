// toggle hamburger menu (for mobile devices)
function toggleMenu() {
  var navLinks = document.querySelector(".nav-links");
  var hamburgerIcon = document.getElementById("hamburger-icon");
  var xIcon = document.getElementById("x-icon");
  // add/remove class from navLinks
  navLinks.classList.toggle("active");
  // specify the display of hamburgerIcon and xIcon
  if (document.querySelector(".nav-links").classList.contains("active")) {
    hamburgerIcon.style.display = "none";
    xIcon.style.display = "block";
  } else {
    hamburgerIcon.style.display = "block";
    xIcon.style.display = "none";
  }
}

// scroll to top when clicking the logo
document.querySelector(".logo-content").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

// Check for element click to close the navigation bar
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    toggleMenu()
  })
})


// Select all paragraphs inside .qa-card and initially hide them

// Select all question headers
const questions = document.querySelectorAll(".question");

questions.forEach(question => {
  question.addEventListener("click", () => {
    // Get the parent .qa-card of the clicked question
    const parentCard = question.closest(".qa-card");

    // Find the <p> inside the same .qa-card
    const paragraph = parentCard.querySelector("p");

    // Toggle paragraph visibility
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";

    } else {
      paragraph.style.display = "none";

    }
  });
});

