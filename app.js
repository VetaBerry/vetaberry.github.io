// Get the button and content elements
const rick = document.getElementById("rick");

// Function to simulate typing effect
function typeWriter(element, text, index, speed) {
  if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(() => typeWriter(element, text, index, speed), speed);
  }
}

// Typing effect on rackroll_ text
const rickrolling = "Paphawarin_  ";
typeWriter(rick, rickrolling, 0, 50);

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

function setActiveLink() {
  const scrollY = window.scrollY;
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 100;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      navLinks.forEach((link) => link.classList.remove('active'));
      navLinks.forEach((link) => link.classList.add('inactive'));
      navLinks[index].classList.add('active');
      navLinks[index].classList.remove('inactive');
    }
  });
}

function stickyNav() {
  const nav = document.querySelector('nav');
  const headerHeight = document.querySelector('header').offsetHeight;
  if (window.scrollY >= headerHeight) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

//Smooth Scroll

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  targetSection.scrollIntoView({ behavior: 'smooth' });
}

navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});


window.addEventListener('scroll', () => {
  setActiveLink();
  stickyNav();
});
