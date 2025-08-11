// Modern Navbar JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Get elements
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburger = document.querySelector("#hamburger-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  
  // Mobile menu toggle
  hamburger.onclick = (e) => {
    e.stopPropagation();
    navbarNav.classList.toggle("opacity-100");
    navbarNav.classList.toggle("visible");
    navbarNav.classList.toggle("opacity-0");
    navbarNav.classList.toggle("invisible");
  };
  
  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.add("opacity-0");
      navbarNav.classList.add("invisible");
      navbarNav.classList.remove("opacity-100");
      navbarNav.classList.remove("visible");
    }
  });
  
  // Active link management for desktop
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Remove active class from all links
      navLinks.forEach(l => {
        l.classList.remove('active', 'bg-gradient-to-r', 'from-[#b6895b]', 'to-[#d4af37]');
        l.classList.add('text-gray-300');
      });
      
      // Add active class to clicked link
      this.classList.add('active', 'bg-gradient-to-r', 'from-[#b6895b]', 'to-[#d4af37]');
      this.classList.remove('text-gray-300');
      this.classList.add('text-white');
    });
  });
  
  // Active link management for mobile
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Remove active classes from all mobile links
      mobileNavLinks.forEach(l => {
        l.classList.remove('bg-gradient-to-r', 'from-[#b6895b]', 'to-[#d4af37]', 'text-white');
        l.classList.add('text-gray-300');
      });
      
      // Add active class to clicked link
      this.classList.add('bg-gradient-to-r', 'from-[#b6895b]', 'to-[#d4af37]', 'text-white');
      this.classList.remove('text-gray-300');
      
      // Close mobile menu after clicking
      setTimeout(() => {
        navbarNav.classList.add("opacity-0");
        navbarNav.classList.add("invisible");
        navbarNav.classList.remove("opacity-100");
        navbarNav.classList.remove("visible");
      }, 200);
    });
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 100; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Navbar background change on scroll
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav > div');
    if (window.scrollY > 50) {
      navbar.classList.add('bg-gray-900/98');
      navbar.classList.remove('bg-gray-900/95');
    } else {
      navbar.classList.add('bg-gray-900/95');
      navbar.classList.remove('bg-gray-900/98');
    }
  });
});
