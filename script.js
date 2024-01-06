function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var typingEffect  = new Typed(".typedText",{
    string: ["Java Developer","Frontend Developer","Backend Developer","Full Stack Developer"],
    loop:true,
    typeSpeed:100,
    backSpeed:80,
    backDelay:2000

})