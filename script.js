// Initialize EmailJS
emailjs.init({
  publicKey: "HixHUf0M98eIcyN3u",
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// === YOUR ACTUAL PROJECTS ===
const projects = [
  {
    title: "Personal Portfolio Website",
    desc: "Modern, responsive portfolio with dark mode, profile picture, working contact form (EmailJS), and smooth animations. Built specifically for Wix Grow application.",
    github: "https://github.com/OJCodeCanvas/portfolio",
    live: "https://OJCodeCanvas.github.io/portfolio"
  },
  {
    title: "TaskFlow - Advanced Todo App",
    desc: "Feature-rich todo application with drag & drop reordering, due dates, priorities, search, filters, dark mode, and localStorage persistence.",
    github: "https://github.com/OJCodeCanvas/advanced-todo-app",
    live: "https://OJCodeCanvas.github.io/advanced-todo-app"
  }
  // Add more projects here as you create them
];

// Render Projects
const projectsContainer = document.getElementById('projects-container');
projectsContainer.innerHTML = ''; // Clear previous

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <div class="project-info">
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <div class="project-links">
        <a href="${project.github}" target="_blank">GitHub <i class="fab fa-github"></i></a>
        <a href="${project.live}" target="_blank">Live Demo →</a>
      </div>
    </div>
  `;
  projectsContainer.appendChild(card);
});

// Working Contact Form (EmailJS)
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  const templateParams = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
    time: new Date().toLocaleString()
  };

  emailjs.send('service_jikm4kk', 'template_min0s3n', templateParams)
    .then(() => {
      alert("✅ Message sent successfully!");
      contactForm.reset();
    })
    .catch((error) => {
      alert("❌ Failed to send message. Please try again.");
      console.error(error);
    })
    .finally(() => {
      submitBtn.textContent = "Send Message";
      submitBtn.disabled = false;
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    }
  });
});
