const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.2,
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, options);
sections.forEach(section => {
  observer.observe(section);
});

// Add active class to project details when project container is hovered over
const projectContainers = document.querySelectorAll('.project-container');
projectContainers.forEach(projectContainer => {
  const projectDetails = projectContainer.querySelector('.project-details');
  projectContainer.addEventListener('mouseenter', () => {
    projectDetails.classList.add('active');
  });
  projectContainer.addEventListener('mouseleave', () => {
    projectDetails.classList.remove('active');
  });
});



