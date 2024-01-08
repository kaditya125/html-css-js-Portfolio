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
  
  document.addEventListener("DOMContentLoaded", function () {
    const skillsData = {
      labels: ["HTML", "CSS", "JavaScript", "Java", "Python"],
      datasets: [
        {
          label: "Technical Skills (Dataset 1)",
          data: [90, 85, 80, 75, 70],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          pointRadius: 5,
          pointBackgroundColor: "rgba(75, 192, 192, 1)",
          pointBorderColor: "#fff",
          pointHoverRadius: 8,
        },
        {
          label: "Technical Skills (Dataset 2)",
          data: [70, 60, 75, 80, 85],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 2,
          pointRadius: 5,
          pointBackgroundColor: "rgba(255, 99, 132, 1)",
          pointBorderColor: "#fff",
          pointHoverRadius: 8,
        },
        {
          label: "Course Skills (Dataset 3)",
          data: [80, 75, 70, 85, 80],
          backgroundColor: "rgba(255, 205, 86, 0.2)",
          borderColor: "rgba(255, 205, 86, 1)",
          borderWidth: 2,
          pointRadius: 5,
          pointBackgroundColor: "rgba(255, 205, 86, 1)",
          pointBorderColor: "#fff",
          pointHoverRadius: 8,
        },
        {
          label: "Soft Skills (Dataset 4)",
          data: [85, 90, 80, 75, 85],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 2,
          pointRadius: 5,
          pointBackgroundColor: "rgba(54, 162, 235, 1)",
          pointBorderColor: "#fff",
          pointHoverRadius: 8,
        },
      ],
    };
  
    const skillsRadarChartCanvas = document.getElementById("skillsRadarChart").getContext("2d");
  
    new Chart(skillsRadarChartCanvas, {
      type: "radar",
      data: skillsData,
      options: {
        elements: {
          line: {
            tension: 0.5,
          },
        },
        scales: {
          r: {
            angleLines: {
              color: "rgba(0, 0, 0, 0.1)",
            },
            pointLabels: {
              font: {
                weight: 'bold',
              },
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 100,
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
        },
      },
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  const feedbackForm = document.getElementById("feedbackForm");

  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    // You can replace this alert with your desired action (e.g., sending feedback to a server)
    alert("Feedback submitted! Thank you for sharing your thoughts.");
    
    // Clear form fields
    feedbackForm.reset();
  });
});
  
document.addEventListener("DOMContentLoaded", function () {
  anime({
    targets: '#about',
    opacity: [0, 1],
    translateY: [50, 0],
    easing: 'easeInOutQuad',
    duration: 1000,
  });

  // Animation for the 'Skills' section
  anime({
    targets: '#skills',
    opacity: [0, 1],
    translateX: [-50, 0],
    easing: 'easeInOutQuad',
    duration: 1000,
  });

  // Animation for the 'Experience' section
  anime({
    targets: '#experience',
    opacity: [0, 1],
    translateY: [50, 0],
    easing: 'easeInOutQuad',
    duration: 1000,
  });

  // Add more animations for other sections as needed

  // Example for the 'Projects' section
  anime({
    targets: '#projects',
    opacity: [0, 1],
    translateX: [50, 0],
    easing: 'easeInOutQuad',
    duration: 1000,
  });

  // Example for the 'Contact' section
  anime({
    targets: '#contact',
    opacity: [0, 1],
    translateY: [50, 0],
    easing: 'easeInOutQuad',
    duration: 1000,
  });
  anime({
    targets: '#contact',
    opacity: [0, 1],
    translateY: [50, 0],
    easing: 'easeInOutQuad',
    duration: 1000,
  });
  anime({
    targets: '.logo',
    opacity: [0, 1],
    translateX: [-200, 0],
    easing: 'easeInOutExpo',
    duration: 1000,
    delay: 1000
  });
  anime({
    targets: 'nav a',
    opacity: [0, 1],
    translateY: [-50, 0],
    easing: 'easeInOutExpo',
    duration: 1200,
    delay: (el,i) => {
      return 1000 +100 * i;
    }
  
  });
  anime({
    targets: '.title',
    opacity: [0, 1],
    translateX: [-200, 0],
    easing: 'easeInOutExpo',
    duration: 1000,
    delay: 1000
  });
});


  