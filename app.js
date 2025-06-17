const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

// Typewriter Effect
const texts = ["IT CONSULTANT", "DATA ANALYST", "CLOUD ENGINEER", "PROJECT MANAGER", "AI SPECIALIST"];
let textIndex = 0;
let charIndex = 0;
const speed = 100; // Typing speed
const eraseSpeed = 50; // Erase speed
const delayBetweenTexts = 1000; // Delay before erasing
const typewriterText = document.querySelector(".typewriter-text");

function typeWriter() {
  if (charIndex < texts[textIndex].length) {
    typewriterText.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, delayBetweenTexts);
  }
}

function eraseText() {
  if (typewriterText.innerHTML.length > 0) {
    typewriterText.innerHTML = typewriterText.innerHTML.slice(0, -1);
    setTimeout(eraseText, eraseSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length; // Move to the next word
    charIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

// Start the effect when the page loads
window.onload = typeWriter;

// Add to app.js
document.addEventListener("DOMContentLoaded", function () {
  // Get modal elements
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

  // Select all project images
  const projectImages = document.querySelectorAll(".project-img img");

  // Open modal when image is clicked
  projectImages.forEach((img) => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt || "No caption available";
    });
  });

  // Close modal when clicking the close button
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
