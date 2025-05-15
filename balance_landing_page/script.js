document.addEventListener("DOMContentLoaded", function () {
  const intro = document.getElementById("intro");
  const header = document.getElementById("mainHeader");
  const body = document.body;

  // Lock scroll on page load
  body.classList.add("lock-scroll");

  // Unlock scroll after intro fades
  let introDone = false;

  window.addEventListener("scroll", () => {
    if (!introDone && window.scrollY > 10) {
      intro.style.opacity = 0;
      intro.style.pointerEvents = "none";
      header.classList.add("visible");
      body.classList.remove("lock-scroll");
      introDone = true;
    }
  });

  // Scroll-triggered narrative reveal (IntersectionObserver)
  const narrativeGroups = document.querySelectorAll('.narrative-group');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  narrativeGroups.forEach(group => observer.observe(group));

  // === TIMELINE STEP ANIMATION ===
  const timelineSteps = document.querySelectorAll('.timeline-step');
  timelineSteps.forEach(step => step.classList.add('animated'));
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 200);
        timelineObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });
  timelineSteps.forEach(step => timelineObserver.observe(step));
});
