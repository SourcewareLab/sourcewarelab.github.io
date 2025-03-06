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

const paragraphs = document.querySelectorAll('.qa-card > p');
paragraphs.forEach(paragraph => {
    paragraph.style.display = 'flex';
    paragraph.style.justifySelf = 'center';
    paragraph.style.maxWidth = '70%';
    
});

// Select all the paragraph elements within sections and hide them
const sectionParagraphs = document.querySelectorAll('.qa-card p');
sectionParagraphs.forEach(para => {
    para.style.display = "none";
});

const head = document.querySelectorAll(".question")
head.forEach(header =>{
    header.addEventListener("click",()=>{
                
        sectionParagraphs.forEach(para =>{
            if (para.style.display ==="none") {
                
                para.style.display = "block";
            }else{
                
                para.style.display = "none";
            }
        })
    })
})
