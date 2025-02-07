'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

/**
 * Download CV
 */
document.getElementById("downloadCv").addEventListener("click", function() {
  // Path to the CV PDF file
  const pdfPath = "assets/pdf/Gourab_CV.pdf";

  // Create an invisible link
  const link = document.createElement("a");
  link.href = pdfPath;
  link.download = "Gourab_CV.pdf"; // Suggested filename

  // Append to the body, trigger click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});




/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

/**
 * Send Mail to  the user.
 */
document.querySelector(".contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  let formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
  };

  fetch("https://script.google.com/macros/s/AKfycbx0VssQcuvB7OXWEqsJrUgzqeReHw4WCzSpLtZRImvva7-yTuEsssBB1eDecKEHisD3-Q/exec", { 
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  }).then(() => {
    alert("Message sent successfully!");
    document.querySelector(".contact-form").reset();
    validateForm(); // Revalidate to disable the button again
  }).catch(error => console.error("Error:", error));
});

document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector(".contact-form button[type='submit']");
  submitButton.disabled = true; // Disable the button initially

  function isValidInput(input, type) {
    const value = input.value.trim();
    if (type === "text") return /^[A-Za-z\s]+$/.test(value); // Only letters and spaces
    if (type === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Basic email regex
    if (type === "tel") return /^\d{10,15}$/.test(value); // Phone: 10-15 digits
    if (type === "textarea") return value.length > 0; // Message must not be empty
    return false;
  }

  function validateForm() {
    const nameValid = isValidInput(document.getElementById("name"), "text");
    const emailValid = isValidInput(document.getElementById("email"), "email");
    const phoneValid = isValidInput(document.getElementById("phone"), "tel");
    const messageValid = isValidInput(document.getElementById("message"), "textarea");

    if (nameValid && emailValid && phoneValid && messageValid) {
      submitButton.classList.add("valid-button");
      submitButton.disabled = false; // Enable the button
    } else {
      submitButton.classList.remove("valid-button");
      submitButton.disabled = true; // Keep the button disabled
    }
  }

  document.querySelectorAll(".input-field").forEach(input => {
    input.addEventListener("input", validateForm);
  });
});


// ===================================================================Education=====================================
const swiper = new Swiper('.slider-wrapper', {
  loop: false, // Stops infinite looping
  grabCursor: true,
  spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

// -----------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const messageButton = document.querySelector(".card-item .message-button");
  const popup = document.getElementById("popup");
  const popupOverlay = document.getElementById("popupOverlay");
  const closePopup = document.getElementById("closePopup");

  messageButton.addEventListener("click", function () {
    popup.classList.add("active");
    popupOverlay.classList.add("active"); // Show overlay
  });

  closePopup.addEventListener("click", function () {
    popup.classList.remove("active");
    popupOverlay.classList.remove("active"); // Hide overlay
  });

  window.addEventListener("click", function (event) {
    if (event.target === popupOverlay) {
      popup.classList.remove("active");
      popupOverlay.classList.remove("active"); // Hide overlay
    }
  });
});

// =========================================================================


  document.addEventListener("DOMContentLoaded", function () {
    const messageButtons = document.querySelectorAll(".message-button");
    const popup = document.getElementById("ppopup");
    const popupOverlay = document.getElementById("ppopupOverlay");
    const closePopup = document.getElementById("closePopup");
    const popupMessage = document.getElementById("ppopup-message");
    const popupImage1 = document.getElementById("ppopup-image1");
    const popupImage2 = document.getElementById("ppopup-image2");

    // Open Popup and display specific content
    messageButtons.forEach(button => {
      button.addEventListener("click", function () {
        const popupData = this.getAttribute("data-popup");

        // Set the content based on the clicked item
        if (popupData === "jan2025") {
          popupMessage.textContent = "In January 2025, I won the Coding Competition 'The Turing Show' @RKMVERI during Techfest Perceptron!";
          popupImage1.src = "./assets/images/project-1.png"; // Add image path
          popupImage2.src = "./assets/images/project-2.png"; // Add image path
        } else if (popupData === "jan2024") {
          popupMessage.textContent = "In January 2024, I started my journey in competitive coding and participated in various challenges.";
          popupImage1.src = "./assets/images/project-3.png"; // Add image path
          popupImage2.src = "./assets/images/project-2.png"; // Add image path
        }

        // Show the popup and overlay
        popup.classList.add("active");
        popupOverlay.classList.add("active");
      });
    });

    // Close Popup
    closePopup.addEventListener("click", function () {
      popup.classList.remove("active");
      popupOverlay.classList.remove("active");
    });

    // Close Popup if the overlay is clicked
    window.addEventListener("click", function (event) {
      if (event.target === popupOverlay) {
        popup.classList.remove("active");
        popupOverlay.classList.remove("active");
      }
    });
  });



