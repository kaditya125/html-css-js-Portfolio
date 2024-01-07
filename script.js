function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
document.querySelector('.contact-icon').addEventListener('click', function() {
    window.open('https://wa.me/9102202267'); 
  });
// var typingEffect  = new Typed(".typedText",{
//     string: ["Java Developer","Frontend Developer","Backend Developer","Full Stack Developer"],
//     loop:true,
//     typeSpeed:100,
//     backSpeed:80,
//     backDelay:2000

// })
document.addEventListener('DOMContentLoaded', function () {
    // Check if dark mode preference is stored in localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
  
    // Set initial dark mode state
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  
    // Toggle dark mode on button click
    window.toggleDarkMode = function () {
      const body = document.body;
      body.classList.toggle('dark-mode');
  
      // Update localStorage with the user's preference
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    };
  });
  