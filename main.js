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

