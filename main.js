window.addEventListener("scroll", function () {
  const aboutMissionContainer = document.querySelector(".about-mission-container");
  const aboutCoachContainer = document.querySelector(".about-coach-container");

  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  const missionContainerTop = aboutMissionContainer.getBoundingClientRect().top;
  const coachContainerTop = aboutCoachContainer.getBoundingClientRect().top;

  if (missionContainerTop - windowHeight <= 0) {
    aboutMissionContainer.classList.add("visible");
  }

  if (coachContainerTop - windowHeight <= 0) {
    aboutCoachContainer.classList.add("visible");
  }
});

const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
});






// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get all the navigation links
  const navLinks = document.querySelectorAll(".menu a");

  // Add click event listener to each link
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Get the target section's ID from the link's href attribute
      const targetSectionID = link.getAttribute("href");

      // Find the target section by its ID
      const targetSection = document.querySelector(targetSectionID);

      // Calculate the target section's offset from the top of the document
      const offsetTop = targetSection.getBoundingClientRect().top;

      // Scroll to the target section with smooth behavior
      window.scrollTo({
        top: offsetTop + window.scrollY,
        behavior: "smooth",
      });

      // Close the burger menu (if it's open)
      const menuToggle = document.getElementById("menu-toggle");
      if (menuToggle.checked) {
        menuToggle.checked = false;
      }
    });
  });
});







document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Retrieve form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Perform form validation and submission logic here
  // You can use AJAX to send the form data to a server-side script or handle it in any other way you prefer

  // Reset the form after submission (optional)
  this.reset();
});


